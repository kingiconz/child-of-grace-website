import { Heart, Users, Handshake } from 'lucide-react';

interface Program {
  title: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
}

const programs: Program[] = [
  {
    title: 'Emotional Healing',
    icon: <Heart className="w-8 h-8" />,
    items: ['Counseling', 'Safe Spaces', 'Recovery Programs'],
    description:
      'We create safe, nurturing environments where children can process trauma, develop emotional resilience, and begin their healing journey.',
  },
  {
    title: 'Mentorship & Identity',
    icon: <Users className="w-8 h-8" />,
    items: ['Leadership Development', 'Confidence Building', 'Personal Growth'],
    description:
      'Through consistent mentorship, we help children discover their strengths, build confidence, and develop a strong sense of identity and purpose.',
  },
  {
    title: 'Community Support',
    icon: <Handshake className="w-8 h-8" />,
    items: ['Caregiver Engagement', 'Community Partnerships', 'Sustainable Support Systems'],
    description:
      'We engage families and communities to create sustainable ecosystems of support that extend far beyond individual interventions.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-spacing" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C2C2C' }}>Our Programs</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C2C' }}>
            Three integrated pillars of support that work together to create lasting transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-sm border card-hover group"
              style={{
                backgroundColor: 'white',
                borderColor: '#E5E3E0',
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:transition-colors group-hover:duration-300" style={{ backgroundColor: 'rgba(155, 122, 209, 0.1)' }}>
                <div style={{ color: '#9B7AD1' }}>{program.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C2C2C' }}>{program.title}</h3>

              {/* Description */}
              <p className="mb-6 leading-relaxed" style={{ color: '#2C2C2C' }}>{program.description}</p>

              {/* Items */}
              <div className="space-y-3">
                {program.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9B7AD1' }} />
                    <span className="font-medium" style={{ color: '#2C2C2C' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
