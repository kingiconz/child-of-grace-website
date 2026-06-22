import { useEffect, useState } from 'react';

interface ImpactMetric {
  number: number;
  label: string;
  suffix: string;
}

const metrics: ImpactMetric[] = [
  { number: 250, label: 'Children Mentored', suffix: '+' },
  { number: 50, label: 'Caregivers Supported', suffix: '+' },
  { number: 12, label: 'Communities Reached', suffix: '' },
  { number: 95, label: 'Program Retention', suffix: '%' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="section-spacing" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Impact That Lasts</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C2C' }}>
            Measurable outcomes that demonstrate real transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                backgroundColor: 'white',
                borderColor: '#E5E3E0',
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#9B7AD1' }}>
                <AnimatedCounter target={metric.number} suffix={metric.suffix} />
              </div>
              <p className="font-medium" style={{ color: '#2C2C2C' }}>{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid #E5E3E0' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Holistic Support</h3>
              <p style={{ color: '#2C2C2C' }}>
                Each child receives emotional, psychological, and social support tailored to their unique needs.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Community Engagement</h3>
              <p style={{ color: '#2C2C2C' }}>
                We work with caregivers, families, and communities to create sustainable ecosystems of support.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>Long-Term Outcomes</h3>
              <p style={{ color: '#2C2C2C' }}>
                Our high retention rate reflects the trust and meaningful relationships we build with each child.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
