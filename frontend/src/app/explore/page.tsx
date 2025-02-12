'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Skeleton Loading Components
const shimmer = "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const CardSkeleton = () => (
    <div className={`${shimmer} border rounded-lg shadow-lg bg-gray-100 p-6 min-h-[260px] flex flex-col justify-between`}>

        {/* Placeholder for Title */}
        <div>
            <div className="h-7 w-3/4 bg-gray-300 rounded-md mb-3"></div>
            <div className="h-5 w-full bg-gray-200 rounded-md mb-3"></div>
            <div className="h-5 w-5/6 bg-gray-200 rounded-md mb-4"></div>
        </div>

        {/* Placeholder for Description */}
        <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded-md"></div>
            <div className="h-4 w-11/12 bg-gray-200 rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
        </div>

        {/* User Info */}
        <div className="flex items-center mt-6">
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
                <div className="h-5 w-24 bg-gray-300 rounded-md mb-1"></div>
                <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
            </div>
        </div>

    </div>
);


const CardsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </div>
);

const projectData = [
    {
        id: 1,
        title: "Ecommerce Mobile App | Flutter & Dart",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Anurag P.",
            avatar: "https://randomuser.me/api/portraits/women/24.jpg",
            country: "India",
        },
    },
    {
        id: 2,
        title: "AI-Powered Chatbot for Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Sophia R.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            country: "United States",
        },
    },
    {
        id: 3,
        title: "SaaS Dashboard UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Michael D.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        }, // No country provided for this user
    },
    {
        id: 4,
        title: "Custom CRM System for Small Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Elena G.",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            country: "Germany",
        },
    },
    {
        id: 5,
        title: "AI-Powered Chatbot for Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Sophia R.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            country: "United States",
        },
    },
    {
        id: 6,
        title: "SaaS Dashboard UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Michael D.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
    },
    {
        id: 7,
        title: "Ecommerce Mobile App | Flutter & Dart",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Anurag P.",
            avatar: "https://randomuser.me/api/portraits/men/62.jpg",
            country: "India",
        },
    },
    {
        id: 8,
        title: "AI-Powered Chatbot for Businesses",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Sophia R.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            country: "United States",
        },
    },
    {
        id: 9,
        title: "SaaS Dashboard UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi libero placeat repellendus. Soluta sint excepturi quo praesentium doloremque beatae quisquam dignissimos, accusantium totam perspiciatis earum quaerat commodi quis maxime facilis enim iure ullam esse accusamus minima fuga rem dolores! Deserunt ea dignissimos ad fuga quod animi eaque ducimus incidunt nemo odit doloremque, impedit nam nulla cum molestias? Aperiam odit unde esse consequatur animi iste odio, veniam necessitatibus error iure eligendi in voluptate voluptatibus ipsa tempora veritatis doloribus nisi impedit.",
        user: {
            name: "Michael D.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            country: "Canada",
        },
    },
];


const ExplorePage = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<typeof projectData>([]);

    useEffect(() => {
        // Simulate API call delay
        setTimeout(() => {
            setProjects(projectData);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section className="min-h-screen flex flex-col py-10 px-5 items-center">
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
                        <div key={project.id} className="border rounded-lg shadow-lg bg-white p-4 hover:shadow-xl transition">

                            {/* Title */}
                            <h2 className="text-lg font-semibold text-gray-900 min-h-[48px]">
                                {project.title}
                            </h2>

                            {/* Description (Truncated) */}
                            <p className="text-sm text-gray-600 mt-2">
                                {project.description.length > 200
                                    ? `${project.description.substring(0, 200)}...`
                                    : project.description}
                            </p>

                            {/* View More */}
                            <Link href={`/project/${project.id}`} className="text-blue-600 text-sm font-medium mt-2 block hover:underline">
                                View details
                            </Link>

                            {/* User Info */}
                            <div className="flex items-center mt-4">
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
                    ))}
                </div>
            )}
        </section>
    );
};

export default ExplorePage;
