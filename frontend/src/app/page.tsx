'use client';

import Navbar from '@/components/root/Navbar';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import Footer from '@/components/root/Footer';

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-gray-900 text-white flex flex-col font-roboto`}>
      {/* Navbar */}
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
