'use client';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center px-16 bg-[rgba(3,0,20,0.08)] z-50">
      {/* Border extending full width */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/50 to-transparent pointer-events-none"></div>

      <div className="flex justify-between items-center w-full max-w-[1296px] py-6 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-full"></div> {/* Placeholder for logo */}
          <span className="text-white text-lg font-medium">COMPANY</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-full px-4 py-2">
          <a href="#" className="text-white text-sm font-normal">Product</a>
          <a href="#" className="text-white text-sm font-normal">Pricing</a>
          <a href="#" className="text-white text-sm font-normal">Company</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white text-sm font-medium">Log in</a>
          <button className="px-5 py-2 border border-[#003F8C] rounded-lg bg-gradient-to-b from-transparent to-blue-900/30 bg-blue-500/10 
            shadow-[inset_0px_0px_12px_rgba(191,151,255,0.24)] text-[#F4F0FF] font-medium text-sm leading-[20px]">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
