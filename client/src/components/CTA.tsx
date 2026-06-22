export default function CTA() {
  return (
    <section
      id="cta"
      className="section-spacing relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663120633080/JtKoRGLxt96fwaeBPdSpyK/cta-section-bg-Fmg4HWix387R2sW3neJH7u.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2C2C2C' }}>
            Become Part of a Child's Healing Journey
          </h2>

          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'rgba(44, 44, 44, 0.8)' }}>
            Your support helps create safe environments where healing, growth, and transformation can take root. Together, we can ensure every child has the opportunity to thrive.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary text-center">
              Support a Child
            </a>
            <a href="#about" className="btn-secondary text-center">
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(122, 155, 127, 0.2)' }}>
            <p className="text-sm mb-4" style={{ color: 'rgba(44, 44, 44, 0.6)' }}>Trusted by donors and partners worldwide</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium" style={{ color: 'rgba(44, 44, 44, 0.5)' }}>
              <span>Transparent Reporting</span>
              <span>•</span>
              <span>Impact-Focused</span>
              <span>•</span>
              <span>Community-Led</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
