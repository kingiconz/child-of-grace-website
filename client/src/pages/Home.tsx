import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Impact from '@/components/Impact';
import Transformation from '@/components/Transformation';
import Programs from '@/components/Programs';
import Methodology from '@/components/Methodology';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Philosophy />
        <Impact />
        <Transformation />
        <Programs />
        <Methodology />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
