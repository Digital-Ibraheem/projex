'use client'

import CreateFooter from '@/components/create/CreateFooter';
import React, { useState } from 'react';

const stages = [
  {title: "Let's start with a strong title.", description: "A good title is important - make sure it's brief and descriptive."},
  {title: "What is this project going to use?", description: ""}
]

const CreatePage = () => {
  const [currentStep, setCurrentStep] = useState(0); // Initialize currentStep state

  const getNextPageTitle = () => {
    switch (currentStep) {
      case 0:
        return 'Next: Technologies';
      case 1:
        return 'Next: Description';
      case 2:
        return 'Next: Review';
      case 3:
        return 'Post';
      default:
        return 'Next: Technologies'; // Fallback
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center ">
      <h1 className="text-2xl font-bold text-[#1a1a1a]">Create a New Project</h1>
      <CreateFooter setCurrentStep={setCurrentStep} currentStep={currentStep} nextPageTitle={getNextPageTitle()}/>
    </div>
  );
};

export default CreatePage;
