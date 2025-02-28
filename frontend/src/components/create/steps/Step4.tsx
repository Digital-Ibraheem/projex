'use client';

import React from 'react';

interface Step4Props {
  formData: {
    title: string;
    projectStatus: string;
    technologies: string[];
    roles: string[];
    isIdea: boolean;
    description: string;
    images: File[];
  };
}

const Step4: React.FC<Step4Props> = ({ formData }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-700 font-medium text-base mb-2 text-left w-full">Review Your Post</p>

      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md border border-gray-300">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900">{formData.title}</h1>

        {/* Project Status */}
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-semibold">Status:</span> {formData.projectStatus === "work-in-progress" ? "Work in Progress" : "New Project"}
        </p>

        {/* Description */}
        <p className="text-gray-700 mt-4 break-words">{formData.description}</p>

        {/* Technologies and Roles */}
        <div className="mt-6">
          {formData.technologies.length > 0 || formData.roles.length > 0 ? (
            <>
              {formData.technologies.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-gray-800 font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {formData.roles.length > 0 && (
                <div>
                  <h3 className="text-gray-800 font-semibold">Roles Needed</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.roles.map((role, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500 italic">No specific technologies or roles selected.</p>
          )}
        </div>

        {/* Just an Idea Tag */}
        {formData.isIdea && (
          <div className="mt-6 p-3 bg-yellow-100 border border-yellow-300 rounded-lg text-yellow-800 text-sm">
            This project is still in the idea stage. Reach out to the creator for more details.
          </div>
        )}

        {/* Uploaded Images Preview */}
        {formData.images.length > 0 && (
          <div className="mt-6">
            <h3 className="text-gray-800 font-semibold mb-2">Uploaded Images</h3>
            <div className="flex flex-wrap gap-2">
              {formData.images.map((file, index) => (
                <div key={index} className="w-20 h-20 rounded-md overflow-hidden border border-gray-300">
                  <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step4;
