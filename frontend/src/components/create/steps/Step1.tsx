'use client';

import React from 'react';

interface Step1Props {
  formData: { title: string; projectStatus: string };
  updateFormData: (field: string, value: any) => void;
}

const exampleTitles = [
  "SnapShelf: Instant Grocery Inventory Tracker",
  "Personalized Coffee Subscription Service",
  "FitSphere: Virtual Reality Workout Hub"
];

const Step1: React.FC<Step1Props> = ({ formData, updateFormData }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="idea-title" className="text-gray-700 font-medium text-base mb-2">
        Write a title for your job post
      </label>
      <input
        type="text"
        id="idea-title"
        value={formData.title}
        onChange={(e) => updateFormData("title", e.target.value)}
        placeholder="Enter your idea title..."
        className="w-full border rounded-md p-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 border-gray-300"
      />
      <p className='text-gray-500 text-xs text-right mt-2'>{formData.title.length <= 7 && formData.title.length - 8}</p>

      {/* Example Titles */}
      <div className="mt-6">
        <label className="text-gray-700 font-medium text-sm">Example titles</label>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
          {exampleTitles.map((example, index) => (
            <li key={index} className="mb-1">{example}</li>
          ))}
        </ul>
      </div>

      {/* Project Status Selection */}
      <div className="mt-6 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
        <label className="text-gray-700 font-medium text-sm block mb-2">Project Status</label>
        <div className="flex flex-col sm:flex-row sm:space-x-4 gap-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="new-project"
              checked={formData.projectStatus === "new-project"}
              onChange={() => updateFormData("projectStatus", "new-project")}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">New Project</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              value="work-in-progress"
              checked={formData.projectStatus === "work-in-progress"}
              onChange={() => updateFormData("projectStatus", "work-in-progress")}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">Work in Progress</span>
          </label>
        </div>
      </div>

    </div>
  );
};

export default Step1;
