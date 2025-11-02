import React, { useState } from 'react';
import { ExternalLink, Github, Search, Folder } from 'lucide-react';

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const projects = [
        {
            id: 1,
            title: 'URL Shortener',
            description: 'A clean and fast URL shortening service that transforms long URLs into shareable short links. Built with a focus on simplicity and user experience.',
            category: 'fullstack',
            tags: ['React', 'Node.js', 'Express', 'MongoDB'],
            liveUrl: '#', // Replace with your live URL
            githubUrl: '#', // Replace with your GitHub repo
            year: '2024'
        },
        {
            id: 2,
            title: 'Wallpaper Gallery',
            description: 'A visually stunning wallpaper gallery with smooth browsing experience, search functionality, and responsive design for all devices.',
            category: 'frontend',
            tags: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
            liveUrl: '#', // Replace with your live URL
            githubUrl: '#', // Replace with your GitHub repo
            year: '2024'
        },
        {
            id: 3,
            title: 'Location Bookmark',
            description: 'An intuitive application to save, organize, and manage your favorite places with interactive maps and easy navigation.',
            category: 'fullstack',
            tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
            liveUrl: '#', // Replace with your live URL
            githubUrl: '#', // Replace with your GitHub repo
            year: '2024'
        }
    ];

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Full Stack' }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <main className="pt-20 pb-16 mt-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    <section className="mb-12 sm:mb-16 lg:mb-20">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">Work</h1>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                            A collection of projects I've built and contributed to
                        </p>
                    </section>

                    <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
                        <div className="relative">
                            <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-6 sm:pl-8 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors border rounded-md ${activeFilter === category.id
                                        ? 'bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 border-gray-900 dark:border-gray-100'
                                        : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-500 dark:hover:border-gray-500'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-1">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="border-b border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all group"
                            >
                                <div className="py-6 sm:py-8">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                                <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors shrink-0" />
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-1 sm:ml-6 whitespace-nowrap">
                                            {project.year}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                        <a
                                            href={project.liveUrl}
                                            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                            View Project
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 sm:py-20 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                No projects found matching your search
                            </p>
                        </div>
                    )}
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        Total Projects: {filteredProjects.length}
                    </p>
                </div>
            </main>
        </div>
    );
}