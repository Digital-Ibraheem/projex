'use client';

import Button from "./ui/button";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center px-8 sm:px-16 bg-transparent z-50">
      {/* Border extending full width */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>

      <div className="flex justify-between items-center w-full max-w-[1296px] py-6 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-full"></div> {/* Placeholder for logo */}
          <span className="text-white text-lg font-medium">Projex</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-full px-4 py-2">
          <a href="#" className="text-white text-sm font-normal transition hover:text-gray-400">Create</a>
          <a href="#" className="text-white text-sm font-normal transition hover:text-gray-400">Explore</a>
          <a href="#" className="text-white text-sm font-normal transition hover:text-gray-400">About</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white text-sm font-medium transition hover:text-gray-400">Log in</a>
          <Button>Sign up</Button>
        </div>
      </div>
    </nav>
  );
}
