'use client';

import React, { useState } from 'react';
import { Paperclip, X } from 'lucide-react';

interface Step3Props {
    formData: { description: string; images: File[] };
    updateFormData: (field: string, value: any) => void;
}

const MIN_DESCRIPTION_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 5000;
const MAX_IMAGES = 3;
const MAX_FILE_SIZE_MB = 2;

const Step3: React.FC<Step3Props> = ({ formData, updateFormData }) => {
    const [errorMessage, setErrorMessage] = useState("");

    // Handle Image Upload
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const newImages = [...formData.images];

        for (const file of files) {
            if (newImages.length >= MAX_IMAGES) {
                setErrorMessage(`You can only upload up to ${MAX_IMAGES} images.`);
                return;
            }

            if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
                setErrorMessage(`"${file.name}" exceeds the 2MB file size limit.`);
                return;
            }

            newImages.push(file);
        }

        updateFormData("images", newImages);
        setErrorMessage("");
    };

    // Remove an image
    const removeImage = (index: number) => {
        const updatedImages = formData.images.filter((_, i) => i !== index);
        updateFormData("images", updatedImages);
    };

    return (
        <div className="flex flex-col">
            {/* Description Field */}
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

            {/* Character Counter */}
            <p className={`text-xs text-right mt-2 ${formData.description.length < MIN_DESCRIPTION_LENGTH ? "text-red-500" : "text-gray-500"}`}>
                {formData.description.length < MIN_DESCRIPTION_LENGTH
                    ? `${Math.max(0, MIN_DESCRIPTION_LENGTH - formData.description.length)} more characters required`
                    : `${formData.description.length}/${MAX_DESCRIPTION_LENGTH}`}
            </p>

            {/* Error Message */}
            {formData.description.length > MAX_DESCRIPTION_LENGTH && (
                <p className="text-red-500 text-sm mt-2">Maximum {MAX_DESCRIPTION_LENGTH} characters allowed</p>
            )}

            {/* Image Upload Section */}
            <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 font-medium text-base">Images</label>
                    <p className="text-gray-500 text-sm">Optional (max {MAX_IMAGES} images)</p>
                </div>

                {/* Attach File Button */}
                <label className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-md cursor-pointer bg-white hover:bg-gray-100 transition text-gray-700 w-fit">
                    <Paperclip size={18} />
                    <span>Attach File</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={formData.images.length >= MAX_IMAGES}
                    />
                </label>

                {/* Error Message for Images */}
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                {/* Uploaded Images Preview */}
                <div className="mt-4 space-y-2">
                    {formData.images.map((image, index) => (
                        <div key={index} className="flex items-center bg-gray-100 p-2 rounded-md shadow-sm">
                            {/* Image Preview */}
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Uploaded"
                                className="w-12 h-12 rounded-md object-cover"
                            />
                            
                            {/* File Info */}
                            <div className="ml-4 flex-1">
                                <p className="text-sm font-medium text-gray-700">{image.name}</p>
                                <p className="text-xs text-gray-500">{(image.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>

                            {/* Delete Button */}
                            <button
                                className="text-gray-600 hover:text-red-600 transition"
                                onClick={() => removeImage(index)}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Step3;
