'use client';

import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import commonSkills from '@/data/skillsData';
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


const MAX_SKILLS = 15; // Configurable max skills limit

const ProfileCreatePage = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [randomAvatar, setRandomAvatar] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [githubError, setGithubError] = useState("");
    const [linkedinError, setLinkedinError] = useState("");
    const [formErrors, setFormErrors] = useState<string[]>([]);
    const [skillError, setSkillError] = useState<string | null>(null); // Added for user feedback
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1); // Track highlighted suggestion
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const router = useRouter();


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

    useEffect(() => {
        if (skillInput.trim() === "") {
            setShowSuggestions(false);
            setSkillError(null);
            setHighlightedIndex(-1); // Reset highlight when input is empty
        } else {
            const matches = commonSkills.filter(skill =>
                skill.toLowerCase().includes(skillInput.toLowerCase())
            );
            setFilteredSuggestions(matches.slice(0, 5)); // Show max 5 suggestions
            setShowSuggestions(matches.length > 0);
            setHighlightedIndex(0); // Default to first suggestion
        }
    }, [skillInput]);



    const handleSkillAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();

            // If there's a highlighted suggestion, select it
            if (highlightedIndex >= 0 && filteredSuggestions.length > 0) {
                addSkill(filteredSuggestions[highlightedIndex]);
            }
            // Otherwise, add the user's input
            else if (skillInput.trim() !== "") {
                addSkill(skillInput.trim());
            }
        }

        // Handle Arrow Key Navigation
        else if (event.key === "ArrowDown") {
            event.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
            );
        }
        else if (event.key === "ArrowUp") {
            event.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : 0
            );
        }
    };



    const addSkill = (skill: string) => {
        if (skills.length >= MAX_SKILLS) {
            setSkillError(`You’ve reached the maximum of ${MAX_SKILLS} skills.`); // Set warning
            setSkillInput(""); // Clear input but keep warning
            setShowSuggestions(false);
            return;
        }
        if (!skills.includes(skill)) {
            setSkills([...skills, skill]);
            setSkillError(null); // Clear warning only on successful add
            setSkillInput("");
            setShowSuggestions(false);
        } else {
            setSkillError("This skill is already added."); // Set warning for duplicates
            setSkillInput("");
            setShowSuggestions(false);
        }
    };

    const removeSkill = (index: number) => {
        setSkills(skills.filter((_, i) => i !== index));
        setSkillError(null); // Clear warning when removing a skill
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

        if (errors.length === 0) {
            console.log("Form submitted successfully!");

            const profileData = {
                name,
                bio,
                skills,
                github,
                linkedin,
                country: selectedCountry?.label || "",
                profilePicture: selectedImage || randomAvatar,
            };

            console.log(profileData);
            router.push('/explore');
        }
    };
    return (
        <div className="bg-gray-100 flex flex-col px-5 py-8 sm:py-16 sm:px-20 w-full">
            <h1 className="font-bold text-center text-2xl sm:text-4xl">
                Finish Setting Up Your Profile
            </h1>


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
                    {/* Error Message */}
                    {formErrors.length > 0 && (
                        <p className="bg-red-100 text-red-600 p-3 text-center rounded-md my-4">
                            Please fill in all required fields.
                        </p>
                    )}
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
                    <div className="mb-4 relative">
                        <label htmlFor="skills" className="text-gray-700 font-medium">
                            Technical Skills (Max {MAX_SKILLS})
                        </label>
                        <input
                            type="text"
                            id="skills"
                            placeholder="Type a skill and press Enter..."
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleSkillAdd}
                            className="w-full border rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                            disabled={skills.length >= MAX_SKILLS}
                        />

                        {/* Warning Message */}
                        {skillError && (
                            <p className="text-yellow-600 bg-yellow-100 p-1 rounded-md text-sm mt-1">{skillError}</p>
                        )}

                        {showSuggestions && (
                            <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full shadow-md z-10">
                                {filteredSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => addSkill(suggestion)}
                                        className={`px-3 py-2 cursor-pointer transition ${index === highlightedIndex ? "bg-gray-200" : "hover:bg-gray-100"}`}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill, index) => (
                                <div key={index} className="relative shadow-md bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center">
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => removeSkill(index)}
                                        className="ml-2 text-gray-600 hover:text-gray-800 text-sm font-bold"
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
                    <Button submit light className="w-full">
                        Complete Profile
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ProfileCreatePage;
