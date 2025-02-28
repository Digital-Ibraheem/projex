'use client';

import React, { useState, useEffect } from 'react';
import commonSkills from '@/data/skillsData';
import availableRoles from '@/data/roles';

interface Step2Props {
  formData: { technologies: string[]; roles: string[] };
  updateFormData: (field: string, value: any) => void;
}

const MAX_TECHNOLOGIES = 10;

const Step2: React.FC<Step2Props> = ({ formData, updateFormData }) => {
  const [techInput, setTechInput] = useState('');
  const [filteredTech, setFilteredTech] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useEffect(() => {
    if (techInput.trim() === '') {
      setShowSuggestions(false);
      setFilteredTech([]);
      setHighlightedIndex(-1);
    } else {
      const matches = commonSkills.filter(tech =>
        tech.toLowerCase().includes(techInput.toLowerCase())
      );
      setFilteredTech(matches.slice(0, 5));
      setShowSuggestions(matches.length > 0);
      setHighlightedIndex(0);
    }
  }, [techInput]);

  const handleTechAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (highlightedIndex >= 0 && filteredTech.length > 0) {
        addTechnology(filteredTech[highlightedIndex]);
      } else if (techInput.trim() !== '') {
        addTechnology(techInput.trim());
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex(prev => (prev < filteredTech.length - 1 ? prev + 1 : prev));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));
    }
  };

  const addTechnology = (tech: string) => {
    if (formData.technologies.length >= MAX_TECHNOLOGIES) return;
    if (!formData.technologies.includes(tech)) {
      updateFormData('technologies', [...formData.technologies, tech]);
    }
    setTechInput('');
    setShowSuggestions(false);
  };

  const removeTechnology = (tech: string) => {
    updateFormData('technologies', formData.technologies.filter(t => t !== tech));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value;
    if (role && !formData.roles.includes(role)) {
      updateFormData('roles', [...formData.roles, role]);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Technologies Input */}
      <label htmlFor="technologies" className="text-gray-700 font-medium text-base mb-2">
        Technologies Used (Max {MAX_TECHNOLOGIES}) <span className="text-gray-500">(Optional)</span>
      </label>

      {/* Input + Dropdown Wrapper */}
      <div className="relative">
        <input
          type="text"
          id="technologies"
          placeholder="Type a technology and press Enter..."
          value={techInput}
          onChange={e => setTechInput(e.target.value)}
          onKeyDown={handleTechAdd}
          className="w-full border rounded-md p-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 border-gray-300"
          disabled={formData.technologies.length >= MAX_TECHNOLOGIES}
        />

        {/* Auto-suggestions Dropdown */}
        {showSuggestions && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md z-10 overflow-hidden">
            {filteredTech.map((tech, index) => (
              <li
                key={index}
                onClick={() => addTechnology(tech)}
                className={`px-3 py-2 cursor-pointer transition ${
                  index === highlightedIndex ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Selected Technologies */}
      <div className="flex flex-wrap gap-2 mt-2">
        {formData.technologies.map((tech, index) => (
          <div key={index} className="relative bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center">
            {tech}
            <button
              type="button"
              onClick={() => removeTechnology(tech)}
              className="ml-2 text-gray-600 hover:text-gray-800 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Roles Dropdown */}
      <label htmlFor="roles" className="text-gray-700 font-medium text-base mt-4">
        Roles Needed <span className="text-gray-500">(Optional)</span>
      </label>
      <select
        id="roles"
        onChange={handleRoleChange}
        className="w-full border rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 border-gray-300"
      >
        <option value="">Select a role...</option>
        {availableRoles.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>
      <div className="flex flex-wrap gap-2 mt-2">
        {formData.roles.map((role, index) => (
          <div key={index} className="relative bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center">
            {role}
            <button
              type="button"
              onClick={() => updateFormData('roles', formData.roles.filter(r => r !== role))}
              className="ml-2 text-gray-600 hover:text-gray-800 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;
