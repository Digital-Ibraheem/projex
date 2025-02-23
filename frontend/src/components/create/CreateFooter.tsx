'use client'

import React from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

interface CreateFooterProps {
    nextPageTitle: string; // New prop to receive the next page title
    currentStep: number; // Convert currentStep to a prop
    setCurrentStep: (step: number) => void; // Add setCurrentStep as a prop
}

const CreateFooter: React.FC<CreateFooterProps> = ({ nextPageTitle, currentStep, setCurrentStep }) => {
    const router = useRouter(); // Initialize the router

    return (
        <footer className=" text-white py-6 w-full fixed bottom-0 left-0">
            <div className="border-t border-gray-300 border-2 w-full absolute top-0 left-0"/>
            <div className={`border-t border-gray-700 border-2`} style={{ width: `${((currentStep + 1) / 4) * 100}%`, position: 'absolute', top: 0, left: 0 }} />
            <div className="container mx-auto flex justify-between text-center">
                <button className='px-5 py-2 text-black border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition' onClick={() => {
                    if (currentStep === 0) {
                        router.push('/explore'); // Use router.push for navigation
                    } else {
                        setCurrentStep(currentStep - 1); // Decrement currentStep
                    }
                }}>
                    Back
                </button>
                <Button onClick={() => setCurrentStep(currentStep + 1)} light inverted>{nextPageTitle}</Button> {/* Use the nextPageTitle prop here */}
            </div>
        </footer>
    );
};

export default CreateFooter;
