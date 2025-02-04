'use client';

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Button from '@/components/ui/button';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex flex-col`}>
      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <main
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/handshake.jpg')" }}
      >
        {/* Dark Overlay & Fade Effect */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent"></div>

        {/* Content (must be above overlay) */}
        <div className="relative z-10">
          <h1 className="text-6xl font-semibold">Build Projects. Showcase Your Skills.</h1>
          <p className="text-gray-400 mt-4">Join fellow students to gain experience, build your portfolio, and collaborate on real-world ideas.</p>
          <div className="flex justify-center items-center mt-6">
            <Button className="">Start Your Journey</Button>
          </div>


        </div>
      </main>

    </div>
  );
}
