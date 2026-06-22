import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipientEmail = 'hello@childofgrace.org';
    const mailSubject = encodeURIComponent(formData.subject || 'New Message from Website');
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${mailSubject}&body=${mailBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C2C' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#2C2C2C' }}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 122, 209, 0.1)' }}>
                    <Mail className="w-6 h-6" style={{ color: '#9B7AD1' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2C2C2C' }}>Email Us</h4>
                    <a href="mailto:hello@childofgrace.org" className="text-sm" style={{ color: '#2C2C2C' }}>
                      hello@childofgrace.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 122, 209, 0.1)' }}>
                    <Phone className="w-6 h-6" style={{ color: '#9B7AD1' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2C2C2C' }}>Call Us</h4>
                    <a href="tel:+2330264020512" className="text-sm" style={{ color: '#2C2C2C' }}>
                      +233 (0) 26 402 0512
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(155, 122, 209, 0.1)' }}>
                    <MapPin className="w-6 h-6" style={{ color: '#9B7AD1' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2C2C2C' }}>Visit Us</h4>
                    <p className="text-sm" style={{ color: '#2C2C2C' }}>
                      GD-081-0603<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#2C2C2C' }}>Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{ color: '#2C2C2C' }}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{ color: '#2C2C2C' }}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    style={{ color: '#2C2C2C' }}
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#2C2C2C' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    style={{ color: '#2C2C2C' }}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#9B7AD1' }}
                >
                  Send Message
                </button>
                <p className="text-sm text-center" style={{ color: '#666' }}>
                  This will open your email client
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
