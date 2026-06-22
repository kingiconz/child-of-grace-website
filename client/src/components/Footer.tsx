import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#2C2C2C', color: '#FAFAF8' }}>
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-lg">Child of Grace</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'rgba(250, 250, 248, 0.7)' }}>
              Healing Hearts, Shaping Futures
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(250, 250, 248, 0.6)' }}>
              Restoring dignity, rebuilding identity, and shaping brighter futures through emotional healing and mindset transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#philosophy" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#programs" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9B7AD1' }} />
                <a href="mailto:kingiconz2002@gmail.com" className="transition-colors text-sm" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  kingiconz2002@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9B7AD1' }} />
                <a href="tel:+2330264020512" className="transition-colors text-sm" style={{ color: 'rgba(250, 250, 248, 0.7)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}>
                  +233 (0) 26 402 0512
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9B7AD1' }} />
                <span className="text-sm" style={{ color: 'rgba(250, 250, 248, 0.7)' }}>
                  GD-081-0603<br />
                  Accra, Ghana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8 mb-8" style={{ borderTop: '1px solid rgba(250, 250, 248, 0.1)' }} />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(250, 250, 248, 0.6)' }}>
            &copy; {currentYear} Child of Grace Orphan Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(250, 250, 248, 0.6)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.6)')}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(250, 250, 248, 0.6)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.6)')}>
              Terms of Service
            </a>
            <a href="#" className="text-sm transition-colors" style={{ color: 'rgba(250, 250, 248, 0.6)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.6)')}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
