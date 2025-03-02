'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projectData } from "@/data/projects";
import { CardsSkeleton } from '@/components/ui/skeletons';
import { useAuth } from '@/context/AuthContext';

const DESCRIPTION_LIMIT = 150;

const ExplorePage = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<typeof projectData>([]);
    const { user } = useAuth();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setProjects(projectData);
            setLoading(false);
        }, 2000);
    }, []);

    // Remove error when user logs in
    useEffect(() => {
        if (user) {
            setError(null);
        }
    }, [user]);

    const handleViewDetailsClick = () => {
        setError("You need to log in to view project details.");
    };

    return (
        <section className="min-h-screen flex flex-col py-10 px-5 items-center">
            {/* Error Message */}
            {error && (
                <div className="mb-4 w-full max-w-6xl bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm">
                    {error}
                </div>
            )}

            <h1 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] max-w-6xl w-full mb-4">
                Explore Featured Ideas
            </h1>
            <p className="text-gray-600 px-0 font-inter w-full max-w-6xl">
                Connect, collaborate, and build your portfolio alongside like-minded individuals through real-world projects.
            </p>

            {loading ? (
                <CardsSkeleton />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="border rounded-lg shadow-md bg-white p-6 hover:shadow-lg transition flex flex-col justify-between h-full"
                        >
                            {/* Upper Content */}
                            <div className="flex flex-col flex-grow">
                                {/* Title */}
                                <h2 className="text-lg font-semibold text-gray-900">{project.title}</h2>

                                {/* Project Status */}
                                <p className="text-sm text-gray-500 mt-1">
                                    <span className="font-semibold">Status:</span> 
                                    {project.projectStatus === "work-in-progress" ? " Work in Progress" : " New Project"}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-gray-700 mt-2">
                                    {project.description.length > DESCRIPTION_LIMIT
                                        ? `${project.description.substring(0, DESCRIPTION_LIMIT)}...`
                                        : project.description}
                                </p>

                                {/* Technologies & Roles */}
                                <div className="mt-3 flex flex-col gap-2">
                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-gray-800 font-semibold text-sm">Technologies {project.projectStatus == 'new-project' ? "To Be Used" : "Used" }</h3>
                                        {project.technologies.length > 0 ? (
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-500 italic text-sm">No technologies selected.</p>
                                        )}
                                    </div>

                                    {/* Roles */}
                                    <div>
                                        <h3 className="text-gray-800 font-semibold text-sm">Roles Needed</h3>
                                        {project.roles.length > 0 ? (
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.roles.map((role, index) => (
                                                    <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                                        {role}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-500 italic text-sm">No roles selected.</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Content (keeps everything spaced evenly) */}
                            <div className="mt-auto">
                                {/* View More - Requires Login */}
                                {user ? (
                                    <Link
                                        href={`/project/${project.id}`}
                                        className="text-blue-600 text-sm font-medium mt-4 block hover:underline"
                                    >
                                        View details
                                    </Link>
                                ) : (
                                    <button
                                        onClick={handleViewDetailsClick}
                                        className="text-blue-600 text-sm font-medium mt-4 hover:underline"
                                    >
                                        View details
                                    </button>
                                )}

                                {/* User Info */}
                                <div className="flex items-center mt-4 pt-3 border-t border-gray-300">
                                    <Image
                                        src={project.user.avatar}
                                        width={40}
                                        height={40}
                                        alt={project.user.name}
                                        className="w-10 h-10 rounded-full border"
                                    />
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-800">{project.user.name}</p>
                                        {project.user.country && (
                                            <p className="text-xs text-gray-500">{project.user.country}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ExplorePage;
