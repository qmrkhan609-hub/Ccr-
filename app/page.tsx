import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Country Club Resorts Balakot',
  description: 'Experience luxury and nature at Country Club Resorts Balakot. Riverside cottages, stone architecture, and exclusive hot air balloon experiences.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
