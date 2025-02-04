'use client';

import { useState, useEffect } from "react";
import HamburgerMenu from "./ui/HamburgerMenu";
import Button from "./ui/button";
import clsx from "clsx";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={clsx(
                "fixed top-0 left-0 w-full flex justify-center px-8 sm:px-16 z-50 transition-all duration-500",
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
                        <a href="#" className="text-white text-sm font-normal transition hover:text-gray-400">About</a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-white text-sm font-medium transition hover:text-gray-400">Log in</a>
                        <Button>Sign up</Button>
                        <HamburgerMenu onClick={() => setSidebarOpen(!isSidebarOpen)} />
                    </div>
                </div>
            </nav>

            <div
                className={clsx(
                    "md:hidden fixed top-0 right-0 h-full w-full bg-[#1a1a1a] shadow-lg z-40 transition-transform duration-300 pl- pt-24",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="py-5 px-10">
                    <a href="#" className="text-white text-xl font-normal transition hover:text-gray-400">Create</a>
                </div>
                <div className="z-50 absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>
                <div className="py-5 px-10">
                    <a href="#" className="text-white text-xl font-normal transition hover:text-gray-400">Explore</a>
                </div>
                <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>
                <div className="py-5 px-10">
                    <a href="#" className="text-white text-xl font-normal transition hover:text-gray-400">About</a>
                </div>
                <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>
            </div>

        </>
    );
}
