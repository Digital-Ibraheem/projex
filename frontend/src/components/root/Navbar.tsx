'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import Button from "@/components/ui/Button";
import clsx from "clsx";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const pathname = usePathname(); // Get current route

    useEffect(() => {
        const handleScroll = () => {
            // Set hasScrolled to true if scrolled past 50px OR if not on home page
            setHasScrolled(window.scrollY > 50 || pathname !== "/");
        };

        // Check scroll on page load and when scrolling
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]); // Re-run effect when the route changes

    return (
        <>
            <nav className={clsx(
                "fixed top-0 left-0 w-full flex justify-center px-4 sm:px-8 md:px-16 z-50 transition-all duration-500",
                hasScrolled ? "bg-[#1a1a1a]/90 backdrop-blur-md" : "bg-transparent"
            )}>
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
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-white text-sm font-medium transition hover:text-gray-400">Log in</a>
                        <Button onClick={() => setIsPopUpOpen(true)}>Sign up</Button>
                        <HamburgerMenu onClick={() => setSidebarOpen(!isSidebarOpen)} />
                    </div>
                </div>
            </nav>
        </>
    );
}
