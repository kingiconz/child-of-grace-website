import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Load environment variables
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase client - use service role for server-side to bypass RLS
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function startServer() {
  const app = express();
  const server = createServer(app);
  
  // Parse JSON requests
  app.use(express.json());

  // API endpoint to get events - only show upcoming events
  app.get("/api/events", async (_req, res) => {
    try {
      console.log("Fetching events from Supabase...");
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("status", "upcoming")
        .order("start_at", { ascending: true });

      if (error) throw error;
      console.log("Fetched events from Supabase:", data);
      res.json(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  // API endpoint to create events (for your dashboard)
  app.post("/api/events", async (req, res) => {
    try {
      const { data, error } = await supabase
        .from("events")
        .insert([req.body])
        .select();

      if (error) throw error;
      res.json(data?.[0] || {});
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Failed to create event" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
