'use client';

import Button from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-gray-900 text-white flex flex-col`}>
      {/* Navbar */}
      <Navbar />

      <main>
        <Hero />
        <div className='h-[100vh]'></div>
      </main>
    </div>
  );
}
