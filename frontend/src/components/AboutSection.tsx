'use client';

import Image from "next/image";
import { Lightbulb } from 'lucide-react';

export default function AboutSection() {
    return (
        <section
            className="relative py-16 flex flex-col items-center justify-center px-4 text-[#1a1a1a] sm:px-10 bg-white"
        >
            <h1 className="sm:px-8 md:px-0 text-4xl md:text-6xl font-semibold text-[#1a1a1a] max-w-4xl w-full">What's XYZ?</h1>
            <div className="flex flex-col md:flex-row mt-6 w-full max-w-4xl items-stretch justify-center">
                <div className="sm:px-8 md:px-0 md:pr-8 flex-1 flex justify-center">
                    {/* Image Below Title */}
                    <div className="w-full md:h-full flex items-stretch">
                        <Image
                            src="/images/about-section.webp"
                            alt="About XYZ"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="sm:px-8 md:px-0 flex-1 mt-6 md:mt-0 flex flex-col justify-center h-full">
                    <div className="w-full flex flex-col justify-center h-full">
                        <h3 className="text-xl font-bold text-[#1a1a1a]">Learn by doing</h3>
                        <p className='text-gray-600 mt-2 font-inter text-sm lg:text-base'>
                            You need projects to get a job, but not just any projects. Trust me, no one cares about your notes app or the Instagram clone you copied off of YouTube. Recruiters are looking for real-world impact, not just tutorial-based work. You need projects that solve real problems and are used by actual people. This platform connects you with students who have real ideas and a drive to build something meaningful; projects that can make an impact and help shape the future.
                        </p>
                        <div className="flex items-center mt-4">
                            <span className="border border-black rounded-full p-[5px]">
                                <Lightbulb className="w-5 h-5 rounded-full" />
                            </span>
                            <p className="ml-3 font-inter text-sm md:text-base">Project-based learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
