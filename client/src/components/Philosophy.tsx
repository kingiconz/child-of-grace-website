import { useEffect, useState } from 'react';

type VisibleCards = number[];

interface PhilosophyCard {
  title: string;
  description: string;
  image: string;
}

const philosophyCards: PhilosophyCard[] = [
  {
    title: 'Dignity Above Dependency',
    description: 'Every child has value, voice, and purpose.',
    image: '/dig.jpg',
  },
  {
    title: 'Healing Is Foundational',
    description: 'Emotional restoration creates lasting transformation.',
    image: '/hea.jpg',
  },
  {
    title: 'Consistency Over Occasional Support',
    description: 'Long-term engagement creates sustainable outcomes.',
    image: '/con.jpg',
  },
  {
    title: 'Environment Shapes Outcomes',
    description: 'Healthy communities help children thrive.',
    image: '/env.jpg',
  },
  {
    title: 'Measurable Impact Over Good Intentions',
    description: 'Real transformation should be visible and accountable.',
    image: '/int.jpg',
  },
];

export default function Philosophy() {
  const [visibleCards, setVisibleCards] = useState<VisibleCards>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-philosophy-card]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" className="section-spacing" style={{ backgroundColor: '#F5F3F0' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Our Philosophy</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C2C' }}>
            Five core principles that guide everything we do
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyCards.slice(0, 3).map((card: PhilosophyCard, index: number) => (
              <div
                key={index}
                data-philosophy-card
                data-index={index}
                className={`rounded-2xl overflow-hidden shadow-lg border transition-all duration-500 card-hover hover:-translate-y-2 hover:shadow-xl ${visibleCards.includes(index) ? 'fade-in-up' : 'opacity-0'}`}
                style={{
                  backgroundColor: 'white',
                  borderColor: '#E5E3E0',
                  animationDelay: visibleCards.includes(index) ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {card.image ? (
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#9B7AD1' }}>
                      <span style={{ color: 'white' }}>Image Placeholder</span>
                    </div>
                  )}
                  {/* Cloud decorations (optional) */}
                  <div className="absolute top-2 left-4 text-4xl opacity-50">☁️</div>
                  <div className="absolute top-4 right-6 text-3xl opacity-40">☁️</div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: '#2C2C2C' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9B7AD1'} onMouseLeave={(e) => e.currentTarget.style.color = '#2C2C2C'}>{card.title}</h3>
                  <p style={{ color: '#2C2C2C' }} className="leading-relaxed text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Centered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {philosophyCards.slice(3, 5).map((card: PhilosophyCard, offsetIndex: number) => {
              const index = offsetIndex + 3;
              return (
                <div
                  key={index}
                  data-philosophy-card
                  data-index={index}
                  className={`rounded-2xl overflow-hidden shadow-lg border transition-all duration-500 card-hover hover:-translate-y-2 hover:shadow-xl ${visibleCards.includes(index) ? 'fade-in-up' : 'opacity-0'}`}
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#E5E3E0',
                    animationDelay: visibleCards.includes(index) ? `${index * 100}ms` : '0ms',
                  }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    {card.image ? (
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#9B7AD1' }}>
                        <span style={{ color: 'white' }}>Image Placeholder</span>
                      </div>
                    )}
                    {/* Cloud decorations (optional) */}
                    <div className="absolute top-2 left-4 text-4xl opacity-50">☁️</div>
                    <div className="absolute top-4 right-6 text-3xl opacity-40">☁️</div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: '#2C2C2C' }} onMouseEnter={(e) => e.currentTarget.style.color = '#9B7AD1'} onMouseLeave={(e) => e.currentTarget.style.color = '#2C2C2C'}>{card.title}</h3>
                    <p style={{ color: '#2C2C2C' }} className="leading-relaxed text-sm">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
