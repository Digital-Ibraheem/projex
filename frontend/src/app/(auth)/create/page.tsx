'use client';

import CreateFooter from '@/components/create/CreateFooter';
import Step1 from '@/components/create/steps/Step1';
import Step2 from '@/components/create/steps/Step2';
// import Step3 from '@/components/create/steps/Step3';
// import Step4 from '@/components/create/steps/Step4';
import React, { useState, useEffect } from 'react';

const steps = [
  { title: "Let's start with a strong title.", description: "A good title is important - make sure it's brief and descriptive." },
  { title: "What is this project going to use?", description: "Or it might just be an idea for now" },
  { title: "Describe your project", description: "Provide details and optional images." },
  { title: "Review & Submit", description: "Check all details before posting." },
];

const CreatePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    projectStatus: "",
    technologies: [],
    roles: [],
    isIdea: false,
  });
  const [canProceed, setCanProceed] = useState(false);

  // Function to update form data
  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Function to check if the current step is valid
  useEffect(() => {
    switch (currentStep) {
      case 0:
        setCanProceed(formData.title.trim().length > 8 && formData.projectStatus !== "");
        break;
      case 1:
        setCanProceed(formData.technologies.length > 0 || formData.isIdea);
        break;
      case 2:
        // setCanProceed(formData.description.trim() !== "");
        break;
      case 3:
        setCanProceed(true); // Final step doesn't require validation
        break;
      default:
        setCanProceed(false);
    }
  }, [formData, currentStep]);

  const getNextPageTitle = () => {
    switch (currentStep) {
      case 0:
        return "Next: Technologies";
      case 1:
        return "Next: Description";
      case 2:
        return "Next: Review";
      case 3:
        return "Post";
      default:
        return "Post";
    }
  };

  const stepComponents = [
    <Step1 formData={formData} updateFormData={updateFormData} />,
    <Step2 formData={formData} updateFormData={updateFormData} />,
    // <Step3 formData={formData} updateFormData={updateFormData} />,
    // <Step4 formData={formData} />,
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 py-6 sm:px-8 sm:py-10">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row sm:justify-between sm:gap-8">
        {/* Left Side - Step Counter & Title */}
        <div className="w-full sm:w-1/2 pr-0 sm:pr-12 mb-6 sm:mb-0">
          <div className="mb-4 text-sm text-gray-500 flex items-center">
            <span className="font-medium text-gray-700">{currentStep + 1}/4</span>
            <span className="ml-4 text-gray-400">Idea Post</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold leading-relaxed">{steps[currentStep].title}</h1>
          <p className="text-gray-500 text-sm mt-2">{steps[currentStep].description}</p>
        </div>

        {/* Right Side - Step Content */}
        <div className="w-full sm:w-1/2">{stepComponents[currentStep]}</div>
      </div>

      {/* Footer Navigation with validation */}
      <CreateFooter
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        nextPageTitle={getNextPageTitle()}
        canProceed={canProceed}
      />
    </div>
  );
};

export default CreatePage;
