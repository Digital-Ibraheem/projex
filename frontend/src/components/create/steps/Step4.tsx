'use client';

import React from 'react';
import Image from 'next/image';

interface Step4Props {
  formData: {
    title: string;
    projectStatus: string;
    technologies: string[];
    roles: string[];
    description: string;
    images: File[];
  };
}

// Mock user data (replace with actual user data later)
const mockUser = {
  name: "Alex Johnson",
  avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  country: "United States"
};

const Step4: React.FC<Step4Props> = ({ formData }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-700 font-medium text-base mb-2 text-left w-full">Review Your Post</p>

      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md border border-gray-300">
        {/* Title & Status */}
        <h1 className="text-2xl font-bold text-gray-900">{formData.title}</h1>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-semibold">Status:</span> {formData.projectStatus === "work-in-progress" ? "Work in Progress" : "New Project"}
        </p>

        {/* Description */}
        <p className="text-gray-700 mt-4 break-words">{formData.description}</p>

        {/* Technologies & Roles */}
        <div className="mt-6">
          {/* Technologies Used */}
          <div className="mb-4">
            <h3 className="text-gray-800 font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.technologies.length > 0 ? (
                formData.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))
              ) : (
                <p className="text-gray-500 italic">No technologies selected.</p>
              )}
            </div>
          </div>

          {/* Roles Needed */}
          <div className="mb-4">
            <h3 className="text-gray-800 font-semibold">Roles Needed</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.roles.length > 0 ? (
                formData.roles.map((role, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {role}
                  </span>
                ))
              ) : (
                <p className="text-gray-500 italic">No roles selected.</p>
              )}
            </div>
          </div>
        </div>

        {/* Uploaded Images Preview */}
        {formData.images.length > 0 && (
          <div className="mt-6">
            <h3 className="text-gray-800 font-semibold mb-2">Uploaded Images</h3>
            <div className="grid grid-cols-3 gap-3">
              {formData.images.map((file, index) => (
                <div key={index} className="w-24 h-24 rounded-md overflow-hidden border border-gray-300 shadow-sm">
                  <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Info */}
        <div className="mt-6 flex items-center border-t pt-4 border-gray-300">
          <Image
            src={mockUser.avatar}
            width={40}
            height={40}
            alt={mockUser.name}
            className="w-10 h-10 rounded-full border"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">{mockUser.name}</p>
            {mockUser.country && <p className="text-xs text-gray-500">{mockUser.country}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
