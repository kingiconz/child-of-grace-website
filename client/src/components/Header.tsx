import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Who We Are', href: '#about' },
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300" style={{ backgroundColor: 'rgba(250, 250, 248, 0.95)', borderColor: '#E5E3E0' }}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Child of Grace Logo"
            className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-lg hidden sm:inline" style={{ color: '#2C2C2C' }}>Child of Grace</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-sm transition-colors duration-300"
              style={{ color: '#2C2C2C' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden md:inline-block btn-primary text-sm"
        >
          Support Our Mission
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ backgroundColor: 'transparent' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F3F0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" style={{ color: '#2C2C2C' }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: '#2C2C2C' }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-in fade-in slide-in-from-top-2 duration-300" style={{ backgroundColor: '#FAFAF8', borderBottom: '1px solid #E5E3E0' }}>
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium transition-colors duration-300"
                style={{ color: '#2C2C2C' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#9B7AD1')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-primary text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support Our Mission
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
