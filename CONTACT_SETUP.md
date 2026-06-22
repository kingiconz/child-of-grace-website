# Contact Form Setup

## Current Setup (Mailto: Method)
The contact form currently uses a simple mailto: approach that opens the user's default email client.

## Enhanced Setup (EmailJS - Recommended)

To make emails send directly from the browser, use EmailJS:

### Step 1: Sign Up for EmailJS
1. Go to https://www.emailjs.com/ and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{name}}`
   - `{{email}}`
   - `{{subject}}`
   - `{{message}}`

### Step 2: Get Your Credentials
- Public Key: Found in EmailJS account settings
- Service ID: Found in Email Services section
- Template ID: Found in Email Templates section

### Step 3: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 4: Update the Contact Component
Replace the current handleSubmit function with this version (add to Contact.tsx):

```tsx
import emailjs from '@emailjs/browser';

// Add these constants (replace with your actual IDs)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
    );
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    alert('Failed to send message. Please try again.');
    console.error('EmailJS error:', error);
  }
};
```

### Step 5: Remove the Mailto: Note
Delete or comment out the `<p className="text-sm text-center"...>` line below the button.

## Email Template Example (For EmailJS)
Subject: New Website Message from {{name}}

Body:
```
You have received a new message from your website:

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```
