'use client';

import React from 'react';

interface Step3Props {
    formData: { description: string };
    updateFormData: (field: string, value: any) => void;
}

const MIN_DESCRIPTION_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 5000;

const Step3: React.FC<Step3Props> = ({ formData, updateFormData }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="project-description" className="text-gray-700 font-medium text-base mb-2">
                Description
            </label>
            <textarea
                id="project-description"
                value={formData.description}
                onChange={(e) => updateFormData("description", e.target.value)}
                placeholder="Provide a detailed outline of your idea..."
                rows={5}
                className="w-full border rounded-md p-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 border-gray-300 resize-none min-h-[300px]"
            />

            {/* Live Character Counter */}
            <p className={`text-xs text-right mt-2 ${formData.description.length < MIN_DESCRIPTION_LENGTH ? "text-red-500" : "text-gray-500"}`}>
                {formData.description.length < MIN_DESCRIPTION_LENGTH ? Math.max(0, MIN_DESCRIPTION_LENGTH - formData.description.length) + " more characters required" : formData.description.length + "/" + MAX_DESCRIPTION_LENGTH}
            </p>
            {/* Error Message */}
            {formData.description.length > MAX_DESCRIPTION_LENGTH && (
                <p className="text-red-500 text-sm mt-2">Maximum {MAX_DESCRIPTION_LENGTH} characters allowed</p>
            )}
        </div>
    );
};

export default Step3;
