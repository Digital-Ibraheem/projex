'use client';

import Button from '@/components/ui/button';
import Navbar from '@/components/Navbar';

export default function HomePage() {

  return (
    <div className={`min-h-screen bg-gray-900 text-white flex flex-col`}>
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="relative h-screen flex flex-col items-center justify-center text-center px-10 text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/images/handshake.jpg')" }}
        >
          {/* Dark Overlay & Fade Effect */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent"></div>

          {/* Content (must be above overlay) */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-semibold">Build Projects. Showcase Your Skills.</h1>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">Join fellow students to gain experience, build your portfolio, and collaborate on real-world ideas.</p>
            <div className="flex justify-center items-center mt-4">
              <Button className="">Start your journey</Button>
            </div>


          </div>
        </section>
      </main>
    </div>
  );
}
