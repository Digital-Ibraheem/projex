'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import Button from "@/components/ui/Button";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SignupForm from "./PopUp";
export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <nav tabIndex={0} className={clsx(
                "fixed top-0 left-0 w-full flex justify-center px-4 sm:px-8 md:px-16 z-50 transition-all duration-500",
                hasScrolled || !isHomePage ? "bg-[#1a1a1a]/90 backdrop-blur-md" : "bg-transparent"
            )}>
                {/* Border extending full width */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>

                <div className="flex justify-between items-center w-full max-w-[1296px] py-6 relative">
                    {/* Logo */}
                    <Link href="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-white rounded-full"></div> {/* Placeholder for logo */}
                        <span className="text-white text-lg font-medium">Projex</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-full px-4 py-2">
                        <Link href="/create" className="text-white text-sm font-normal transition hover:text-gray-400">Create</Link>
                        <Link href="/explore" className="text-white text-sm font-normal transition hover:text-gray-400">Explore</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-white text-sm font-medium transition hover:text-gray-400">Log in</Link>
                        <Button onClick={() => setIsPopUpOpen(true)}>Sign up</Button>
                        <HamburgerMenu isSidebarOpen={isSidebarOpen} onClick={() => setSidebarOpen(!isSidebarOpen)} />
                    </div>
                </div>
            </nav>

            {/* Sidebar Navigation for Mobile */}
            <div
                className={clsx(
                    "fixed top-0 right-0 h-full bg-[#1a1a1a] shadow-lg z-40 transition-transform duration-300 pt-24",
                    "w-full sm:w-[375px]", // Full width on mobile, 375px on larger screens
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="py-5 px-10">
                    <Link
                        href="/create"
                        onClick={() => setSidebarOpen(false)}
                        className="text-white text-xl font-normal transition hover:text-gray-400"
                    >
                        Create
                    </Link>
                </div>
                <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>

                <div className="py-5 px-10">
                    <Link
                        href="/explore"
                        onClick={() => setSidebarOpen(false)}
                        className="text-white text-xl font-normal transition hover:text-gray-400"
                    >
                        Explore
                    </Link>
                </div>
                <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent pointer-events-none"></div>
            </div>


            {/* Sign Up Popup */}
            {isPopUpOpen && <SignupForm setIsPopUpOpen={setIsPopUpOpen}/>
            }
        </>
    );
}
