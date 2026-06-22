import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for frontend
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const slideshowImages = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg'];

const calculateTimeLeft = (eventDate: Date) => {
  if (isNaN(eventDate.getTime())) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const difference = eventDate.getTime() - new Date().getTime();
  
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  
  return timeLeft;
};

// Helper function to safely parse and format dates
const parseDate = (dateString: string | null | undefined): Date | null => {
  if (!dateString) return null;
  
  // Try parsing directly first
  let date = new Date(dateString);
  if (!isNaN(date.getTime())) return date;
  
  // If that fails, try some common formats
  console.warn('Failed to parse date, trying alternative formats:', dateString);
  return null;
};

const formatDate = (dateString: string | null | undefined) => {
  const date = parseDate(dateString);
  if (!date) return 'Date TBA';
  
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const formatTime = (dateString: string | null | undefined) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return '';
  }
  
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
};

interface Event {
  id: string;
  title: string;
  description?: string;
  start_at: string;
  end_at?: string;
  location?: string;
  status: string;
  cover_image_url?: string;
  created_by?: string;
  created_at: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Separate events into ongoing and upcoming
  const ongoingEvent = events.find(e => e.status === 'ongoing');
  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  
  console.log('Ongoing event:', ongoingEvent);
  console.log('Upcoming events:', upcomingEvents);
  console.log('Number of upcoming events:', upcomingEvents.length);
  console.log('Current event index:', currentEventIndex);
  
  // Determine which event to display
  const displayedEvent = ongoingEvent || (upcomingEvents[currentEventIndex] || null);
  console.log('Displayed event:', displayedEvent);

  // Fetch events directly from Supabase
  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .in("status", ["upcoming", "ongoing"])
        .order("start_at", { ascending: true });

      if (error) throw error;
      console.log('Fetched events:', data);
      console.log('Number of events:', data?.length);
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Update countdown timer
  useEffect(() => {
    if (displayedEvent && !ongoingEvent) {
      const eventDate = parseDate(displayedEvent.start_at);
      
      if (!eventDate) {
        console.error('Could not parse event date');
        return;
      }
      
      const updateTimer = () => {
        const newTimeLeft = calculateTimeLeft(eventDate);
        setTimeLeft(newTimeLeft);
      };
      
      updateTimer();
      
      const timer = setInterval(updateTimer, 1000);
      return () => clearInterval(timer);
    }
  }, [displayedEvent?.id, ongoingEvent]); // Only depend on event ID and ongoing status

  // Event slideshow for upcoming events
  useEffect(() => {
    console.log('Slideshow effect running');
    console.log('Upcoming events length:', upcomingEvents.length);
    console.log('Has ongoing event:', !!ongoingEvent);
    
    let interval: NodeJS.Timeout | null = null;
    
    if (upcomingEvents.length > 1 && !ongoingEvent) {
      console.log('Starting slideshow interval');
      interval = setInterval(() => {
        console.log('Interval fired!');
        setCurrentEventIndex((prev) => {
          const nextIndex = (prev + 1) % upcomingEvents.length;
          console.log('Changing to event index:', nextIndex);
          return nextIndex;
        });
      }, 5000); // Change event every 5 seconds
    } else {
      console.log('Not starting slideshow');
    }
    
    return () => {
      if (interval) {
        console.log('Clearing interval');
        clearInterval(interval);
      }
    };
  }, [upcomingEvents.length, ongoingEvent]); // Only depend on the length and ongoing status

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      {/* Slideshow Images */}
      {slideshowImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentSlide ? 1 : 0,
            animation: index === currentSlide ? 'breathe 10s ease-in-out infinite' : 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(250, 250, 248, 1), rgba(250, 250, 248, 0.9), rgba(250, 250, 248, 0.7))',
        }} />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#2C2C2C' }}>
            Every Child Deserves More Than Survival.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl" style={{ color: '#2C2C2C' }}>
            We help orphaned and vulnerable children heal emotionally, rebuild identity, and develop the confidence to shape their own future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="btn-primary text-center"
            >
              Support Our Mission
            </a>
            <a
              href="#philosophy"
              className="btn-secondary text-center"
            >
              Learn Our Philosophy
            </a>
          </div>

          {/* Tagline */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(155, 122, 209, 0.2)' }}>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#9B7AD1' }}>
              Healing Hearts, Shaping Futures
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        {displayedEvent && (
          <div key={`event-card-${displayedEvent.id}`} className="mt-16 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative bg-white border border-gray-200">
            {/* Status Tag */}
            {displayedEvent.status && displayedEvent.status !== 'upcoming' && (
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 ${
                  displayedEvent.status === 'ongoing' ? 'text-white' :
                  displayedEvent.status === 'completed' ? 'bg-gray-600 text-white' :
                  displayedEvent.status === 'postponed' ? 'bg-yellow-500 text-white' :
                  displayedEvent.status === 'cancelled' ? 'bg-red-600 text-white' :
                  'bg-gray-500 text-white'
                }`} style={displayedEvent.status === 'ongoing' ? { backgroundColor: '#9B7AD1' } : {}}>
                  {displayedEvent.status === 'ongoing' && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  )}
                  {displayedEvent.status.charAt(0).toUpperCase() + displayedEvent.status.slice(1)}
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: '#2C2C2C' }}>
                {displayedEvent.status === 'ongoing' ? 'ONGOING EVENT' : 'UPCOMING EVENTS'}
              </h2>
              {upcomingEvents.length > 1 && !ongoingEvent && (
                <div className="flex items-center gap-2">
                  {upcomingEvents.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentEventIndex ? 'w-6' : ''
                      }`}
                      style={{ 
                        backgroundColor: index === currentEventIndex ? '#9B7AD1' : '#D1D5DB' 
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event Image */}
              <div className="overflow-hidden rounded-lg relative">
                <img 
                  src={displayedEvent.cover_image_url || (displayedEvent.status === 'ongoing' ? "/ono.png" : "/eve.png")} 
                  alt={displayedEvent.title}
                  className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Event Details */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-500" style={{ color: '#2C2C2C' }}>
                  {displayedEvent.title}
                </h3>
                
                {/* Show description if available */}
                {displayedEvent.description && (
                  <p className="mb-4 transition-all duration-500" style={{ color: '#2C2C2C' }}>
                    {displayedEvent.description}
                  </p>
                )}
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3" style={{ color: '#2C2C2C' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-lg">
                      {formatDate(displayedEvent.start_at)}
                      {formatTime(displayedEvent.start_at) && ` • ${formatTime(displayedEvent.start_at)}`}
                    </span>
                  </div>
                  {displayedEvent.location && (
                    <div className="flex items-center gap-3" style={{ color: '#2C2C2C' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" strokeWidth="2" />
                      </svg>
                      <span className="text-lg">{displayedEvent.location}</span>
                    </div>
                  )}
                </div>

                {/* Ongoing Event Info */}
                {displayedEvent.status === 'ongoing' && (
                  <div className="rounded-xl p-6 mb-6 border-2 shadow-lg" style={{ backgroundColor: 'rgba(155, 122, 209, 0.1)', borderColor: '#9B7AD1' }}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: '#9B7AD1' }}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#2C2C2C' }}>Event is Currently Happening</h4>
                        <p className="text-base" style={{ color: '#666' }}>Join us now and be part of this special event!</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Countdown Timer - only show if not ongoing */}
                {displayedEvent.status !== 'ongoing' && (
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="text-white text-xl md:text-2xl font-bold py-3 px-2 rounded-lg shadow-md transition-transform hover:scale-105" style={{ backgroundColor: '#9B7AD1' }}>
                        {String(value).padStart(2, '0')}
                      </div>
                      <p className="text-xs font-semibold mt-1 uppercase" style={{ color: '#2C2C2C' }}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </p>
                    </div>
                  ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
