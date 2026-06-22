export default function Transformation() {
  return (
    <section className="section-spacing" style={{ backgroundColor: '#F5F3F0' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-12 h-12 mx-auto"
              fill="currentColor"
              style={{ color: 'rgba(155, 122, 209, 0.4)' }}
              viewBox="0 0 24 24"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 1-2 1s-1-1-2-1c-2.716 0-7 3.75-7 5v8c0 1 0 8 4 8s6.002-6 7-7.808c.02-1.25 1-4.192 1-4.192" />
            </svg>
          </div>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#2C2C2C' }}>
            When a child is intentionally healed, empowered, and supported, their future is not left to chance—it is shaped with purpose.
          </blockquote>

          <div className="h-1 w-16 rounded-full mx-auto mb-8" style={{ backgroundColor: '#9B7AD1' }} />

          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C2C' }}>
            This is the heart of our mission. We don't just provide temporary relief. We invest in lasting transformation that enables children to become confident, resilient, and empowered individuals who can shape their own destinies.
          </p>
        </div>
      </div>
    </section>
  );
}
