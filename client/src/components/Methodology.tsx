import { Search, Handshake, Heart, Zap, Lightbulb } from 'lucide-react';

interface MethodologyStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: MethodologyStep[] = [
  {
    title: 'Identify Need',
    description: 'Assess each child individual circumstances and needs',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Build Trust',
    description: 'Establish safe, consistent relationships',
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    title: 'Facilitate Healing',
    description: 'Support emotional and psychological recovery',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Develop Confidence',
    description: 'Build skills and self-belief',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Empower Independence',
    description: 'Enable children to shape their own futures',
    icon: <Lightbulb className="w-6 h-6" />,
  },
];

export default function Methodology() {
  return (
    <section className="section-spacing" style={{ backgroundColor: '#F5F3F0' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2C2C2C' }}>How Transformation Happens</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2C2C2C' }}>
            Our five-step methodology creates sustainable pathways to healing and empowerment
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 rounded-full" style={{ backgroundColor: 'rgba(155, 122, 209, 0.2)' }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-md border-4" style={{ backgroundColor: 'white', borderColor: '#9B7AD1', color: '#9B7AD1' }}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2C2C2C' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#2C2C2C' }}>{step.description}</p>
                </div>

                {/* Connecting line to next step (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8" style={{ backgroundColor: 'rgba(155, 122, 209, 0.2)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid #E5E3E0' }}>
          <div className="max-w-3xl mx-auto rounded-lg p-8 border" style={{ backgroundColor: 'white', borderColor: '#E5E3E0' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C2C2C' }}>A Continuous Journey</h3>
            <p style={{ color: '#2C2C2C' }} className="leading-relaxed">
              This methodology is not linear—it's cyclical and adaptive. We continuously assess progress, adjust support strategies, and celebrate milestones. Each child moves through these phases at their own pace, with consistent support from our team and community partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
