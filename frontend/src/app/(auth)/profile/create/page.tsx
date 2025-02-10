'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

// Define the CountryOption type
interface CountryOption {
    value: string; // ISO code of the country
    label: string; // Name of the country
}

const ProfileCreatePage = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

    const excludedCountries = ['IL'];

    const countryOptions = countryList()
    .getData()
    .filter((country: CountryOption) => !excludedCountries.includes(country.value))
    .map((country: CountryOption) => {
        if (country.value === "PS") {
            return {
                ...country,
                label: "Palestine",
            };
        }
        return country;
    });


    const handleSkillAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && skillInput.trim() !== "") {
            event.preventDefault();

            if (skills.length < 10) {
                setSkills([...skills, skillInput.trim()]);
                setSkillInput(""); // Clear input after adding
            }
        }
    };

    const removeSkill = (index: number) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    // Handle file selection for profile picture
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col py-16 sm:py-20 px-20 w-full">
            <h1 className="text-3xl font-bold text-[#1a1a1a] text-center">
                Finish Setting up Your Profile
            </h1>

            <div className='w-full flex flex-col items-center'>

                {/* Hidden File Input */}
                <input 
                    type="file" 
                    accept="image/*" 
                    id="fileUpload"
                    className="hidden"
                    onChange={handleImageUpload} 
                />

                {/* Profile Picture Container */}
                <div 
                    className="relative w-[200px] h-[200px] mt-6 cursor-pointer" 
                    onClick={() => document.getElementById('fileUpload')?.click()}
                >
                    <Image
                        src={selectedImage || "/images/default-pfp.jpg"}
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full object-cover w-[200px] h-[200px]"
                    />
                    {/* Plus Sign */}
                    {!selectedImage && <div className="absolute bottom-2 right-2 bg-blue-500 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center border-2 border-white shadow-lg">
                        +
                    </div>}
                </div>

                {/* Clickable Add Profile Picture Text */}
                <p 
                    className='text-gray-400 mt-3 underline cursor-pointer' 
                    onClick={() => document.getElementById('fileUpload')?.click()}
                >
                    {selectedImage ? "Change your profile picture" : "Add a profile picture"}
                </p>

                <form className="mt-6 w-full max-w-lg">
                    {/* Name Section */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="name" className="text-gray-700 font-medium">
                                Name
                            </label>
                            <span className="text-red-500 text-lg">*</span>
                        </div>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your preferred name..."
                            required
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                    </div>

                    {/* Bio Section */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="bio" className="text-gray-700 font-medium">
                                Bio
                            </label>
                            <span className="text-red-500 text-lg">*</span>
                        </div>
                        <p className="text-gray-500 text-sm my-2">
                            What you study, where you go to school, anything to teach us about yourself!
                        </p>
                        <textarea
                            id="bio"
                            placeholder="Tell us about yourself..."
                            required
                            className="w-full h-24 md:h-32 border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                    </div>

                    {/* Location (Country Selector) */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="location" className="text-gray-700 font-medium">
                                Location
                            </label>
                            <span className="text-md text-gray-400">Optional</span>
                        </div>
                        <p className="text-gray-500 text-sm my-2">
                            Select your country from the list.
                        </p>
                        <Select
                            options={countryOptions}
                            value={selectedCountry}
                            onChange={setSelectedCountry}
                            placeholder="Search for a country..."
                            className="border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400"
                        />
                    </div>

                    {/* Skills Section */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="skills" className="text-gray-700 font-medium">
                                Skills
                            </label>
                            <span className="text-red-500 text-lg">*</span>
                        </div>
                        <p className="text-gray-500 text-sm my-2">
                            Add the technical skills you have (and don't sell yourself short)!
                        </p>

                        {/* Input for adding skills */}
                        <input
                            type="text"
                            id="skills"
                            placeholder="Type a skill and press enter..."
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleSkillAdd}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                            disabled={skills.length >= 10} // Disable if max reached
                        />

                        {/* Displaying skills as pill-shaped badges */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill, index) => (
                                <div key={index} className="relative bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center">
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => removeSkill(index)}
                                        className="ml-2 text-blue-600 hover:text-blue-800 text-sm font-bold"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileCreatePage;
