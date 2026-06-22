export default function About() {
  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="fade-in-up order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl" style={{ backgroundColor: '#9B7AD1', opacity: 0.2 }}></div>
              <img
                src="/auth.jpg"
                alt="Child in a safe environment"
                className="rounded-xl shadow-xl w-full h-auto object-cover relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <div className="text-4xl font-bold" style={{ color: '#9B7AD1' }}>15+</div>
                <div className="text-sm font-medium" style={{ color: '#2C2C2C' }}>Years of Impact</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full mb-6" style={{ backgroundColor: 'rgba(155, 122, 209, 0.1)', color: '#9B7AD1' }}>
              <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C2C2C' }}>
              Who We Are
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#2C2C2C' }}>
              Child of Grace Orphan Foundation exists to <span className="font-semibold" style={{ color: '#9B7AD1' }}>restore dignity</span>, <span className="font-semibold" style={{ color: '#9B7AD1' }}>rebuild identity</span>, and <span className="font-semibold" style={{ color: '#9B7AD1' }}>shape brighter futures</span> through emotional healing and mindset transformation.
            </p>
            
            <p className="text-lg mb-10 leading-relaxed" style={{ color: '#2C2C2C' }}>
              We believe that every child has inherent value and deserves more than survival. Our work focuses on creating safe spaces where children can heal emotionally, develop confidence, and discover their potential to lead meaningful lives.
            </p>
            
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 border border-gray-100 group">
                <div className="text-3xl font-bold mb-3" style={{ color: '#9B7AD1' }}>01</div>
                <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: '#2C2C2C' }}>Holistic Approach</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>Addressing emotional, psychological, and social needs of every child with comprehensive care.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 border border-gray-100 group">
                <div className="text-3xl font-bold mb-3" style={{ color: '#9B7AD1' }}>02</div>
                <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: '#2C2C2C' }}>Long-Term Commitment</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>Consistent support for sustainable transformation and lasting impact that endures.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-400 border border-gray-100 group">
                <div className="text-3xl font-bold mb-3" style={{ color: '#9B7AD1' }}>03</div>
                <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: '#2C2C2C' }}>Measurable Results</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666' }}>Tracking and reporting real outcomes that demonstrate genuine transformation and progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
