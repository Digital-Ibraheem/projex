'use client';

import Image from "next/image";

export default function AboutSection() {
    return (
        <section 
            className="relative h-screen flex flex-col items-center justify-center text-center px-10 text-white bg-[#1f1f1f]"
        >
            <h1 className="text-4xl sm:text-6xl font-semibold">What's XYZ?</h1>
            
            {/* Image Below Title */}
            <div className="mt-6 w-full max-w-xs sm:max-w-md">
                <Image 
                    src="/images/handshake.jpg" 
                    alt="About XYZ" 
                    width={400} 
                    height={300} 
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </section>
    )
}
