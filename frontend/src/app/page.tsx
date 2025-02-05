'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-gray-900 text-white flex flex-col font-roboto`}>
      {/* Navbar */}
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
      </main>
    </div>
  );
}
