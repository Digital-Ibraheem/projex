'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

interface CountryOption {
    value: string;
    label: string;
}

const PfpSkeleton = () => {
    return (
        <div className="relative w-[200px] h-[200px] rounded-full bg-gray-200 animate-pulse"></div>
    );
};

const avatarNames = [
    "Jessica", "Jude", "Kimberly", "Sara", "Liliana", "Mackenzie", "Vivian",
    "Christian", "Jade", "Aidan", "Eden", "Liam", "Avery", "Wyatt", "Sadie",
    "Brian", "George", "Adrian", "Andrea", "Ryker"
];

const ProfileCreatePage = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [randomAvatar, setRandomAvatar] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [githubError, setGithubError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [formErrors, setFormErrors] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    const excludedCountries = ['IL'];
    const countryOptions = countryList()
        .getData()
        .filter((country: CountryOption) => !excludedCountries.includes(country.value))
        .map((country: CountryOption) => (country.value === "PS" ? { ...country, label: "Palestine" } : country));

    useEffect(() => {
        const randomName = avatarNames[Math.floor(Math.random() * avatarNames.length)];
        const avatarUrl = `https://api.dicebear.com/9.x/shapes/svg?seed=${randomName}`;

        // Fetch the image to confirm it's available before setting the state
        fetch(avatarUrl)
            .then((res) => {
                if (res.ok) {
                    setRandomAvatar(avatarUrl);
                } else {
                    setRandomAvatar("/images/default-pfp.jpg");
                }
            })
            .catch(() => setRandomAvatar("/images/default-pfp.jpg"))
            .finally(() => setIsLoading(false));
    }, []);

    const handleSkillAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && skillInput.trim() !== "") {
            event.preventDefault();
            if (skills.length < 10) {
                setSkills([...skills, skillInput.trim()]);
                setSkillInput("");
            }
        }
    };

    const removeSkill = (index: number) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const validateGithub = (url: string) => {
        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
        setGithubError(url && !githubRegex.test(url) ? "Invalid GitHub URL (e.g., https://github.com/username)" : "");
        setGithub(url);
    };

    const validateLinkedin = (url: string) => {
        const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9_-]+\/?$/;
        setLinkedinError(url && !linkedinRegex.test(url) ? "Invalid LinkedIn URL (e.g., https://linkedin.com/in/username)" : "");
        setLinkedin(url);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const errors = [];

        if (!name.trim()) errors.push("name");
        if (!bio.trim()) errors.push("bio");
        if (skills.length === 0) errors.push("skills");

        setFormErrors(errors);
    };
    return (
        <div className="bg-gray-100 flex flex-col px-5 py-8 sm:py-16 sm:px-20 w-full">
            <h1 className="font-bold text-center text-2xl sm:text-4xl">
                Finish Setting Up Your Profile
            </h1>

            {/* Error Message */}
            {formErrors.length > 0 && (
                <p className="bg-red-100 text-red-600 p-3 text-center rounded-md mt-4">
                    Please fill in all required fields.
                </p>
            )}

            <div className='w-full flex flex-col items-center font-roboto mt-10'>

                {/* Hidden File Input */}
                <input type="file" accept="image/*" id="fileUpload" className="hidden" onChange={handleImageUpload} />

                {/* Profile Picture Container */}
                <div
                    className="relative w-[200px] h-[200px] mt-6 cursor-pointer"
                    onClick={() => document.getElementById('fileUpload')?.click()}
                >
                    {/* Show Skeleton While Loading */}
                    {isLoading ? (
                        <PfpSkeleton />
                    ) : (
                        <img
                            src={selectedImage || randomAvatar || undefined}
                            alt="Profile Picture"
                            className="rounded-full object-cover w-[200px] h-[200px]"
                            onLoad={() => setIsLoading(false)}
                        />
                    )}

                    {/* Plus Sign */}
                    {!selectedImage && (
                        <div className="absolute bottom-2 right-2 bg-gray-700 text-white w-10 h-10 rounded-full text-3xl flex items-center justify-center border-[3px] border-white shadow-lg">
                            +
                        </div>
                    )}
                </div>

                <p className='text-gray-400 mt-3 underline cursor-pointer' onClick={() => document.getElementById('fileUpload')?.click()}>
                    {selectedImage ? "Change your profile picture" : "Add a profile picture"}
                </p>

                <form className="mt-6 w-full max-w-lg" onSubmit={handleSubmit}>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your preferred name..."
                            className={`w-full border rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 
                                ${formErrors.includes("name") ? "border-red-500" : "border-gray-300"}`}
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
                        <textarea
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself..."
                            className={`w-full h-24 md:h-32 border rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 
                                ${formErrors.includes("bio") ? "border-red-500" : "border-gray-300"}`}
                        />
                    </div>

                    {/* Location (Country Selector) */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="location" className="text-gray-700 font-medium">
                                Location
                            </label>
                            <span className="text-gray-400 text-md">Optional</span>
                        </div>
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
                        <input
                            type="text"
                            id="skills"
                            placeholder="Type a skill and press enter..."
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleSkillAdd}
                            className={`w-full border rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 
                                ${formErrors.includes("skills") ? "border-red-500" : "border-gray-300"}`}
                            disabled={skills.length >= 10}
                        />
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

                    {/* GitHub Section */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="github" className="text-gray-700 font-medium">
                                GitHub Profile
                            </label>
                            <span className="text-gray-400 text-md">Optional</span>
                        </div>
                        <input
                            type="url"
                            id="github"
                            placeholder="https://github.com/yourusername"
                            value={github}
                            onChange={(e) => validateGithub(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        {githubError && <p className="text-red-500 text-sm mt-1">{githubError}</p>}
                    </div>

                    {/* LinkedIn Section */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="linkedin" className="text-gray-700 font-medium">
                                LinkedIn Profile
                            </label>
                            <span className="text-gray-400 text-md">Optional</span>
                        </div>
                        <input
                            type="url"
                            id="linkedin"
                            placeholder="https://linkedin.com/in/yourprofile"
                            value={linkedin}
                            onChange={(e) => validateLinkedin(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        {linkedinError && <p className="text-red-500 text-sm mt-1">{linkedinError}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-[#1b1b1b] text-white font-medium py-2 rounded-md mt-4 hover:text-gray-300 transition">
                        Complete Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileCreatePage;
