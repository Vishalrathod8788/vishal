import { Link } from "react-router-dom";

export const Home = () => {

    const recentBlogs = [
        {
            title: "FIX Dual Boot: Recover Ubuntu GRUB After Windows Update",
            date: "14 June, 2025",
            tags: ["Dual Boot", "GRUB", "Linux"],
            slug: "fix-dual-boot-recover-ubuntu-grub-after-windows-update",
        },
        {
            title: "Tailwind CSS: Tips and Tricks",
            date: "5 June, 2025",
            tags: ["CSS", "Tailwind", "Web Development"],
            slug: "tailwind-css-tips-and-tricks",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

            <main className="pt-20 pb-16 mt-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <section className="mb-12 sm:mb-16 lg:mb-20">
                        <div className="max-w-full">
                            {/* Main Greeting */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 text-gray-900 dark:text-gray-100">
                                Hello <span className="inline-block">👋</span>
                            </h1>

                            {/* Introduction */}
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                {/* Left Side: Content */}
                                <div className="flex-1 lg:w-[70%]">
                                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                                        I'm{" "}
                                        <Link
                                            to="/about"
                                            className="text-gray-900 dark:text-white font-medium underline decoration-2 hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline transition-all duration-200"
                                        >
                                            Vishal Rathod
                                        </Link>
                                        , a{" "}
                                        <strong className="text-gray-900 dark:text-white font-semibold">
                                            Full-Stack Developer
                                        </strong>{" "}
                                        passionate about crafting modern web applications using the MERN stack. I combine strong problem-solving abilities (500+ DSA problems solved) with hands-on development experience to build scalable, user-friendly solutions. Currently seeking opportunities where I can contribute, learn, and create meaningful impact. Check out my{" "}
                                        <Link
                                            to="/projects"
                                            className="text-gray-900 dark:text-white font-medium underline decoration-2 hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline transition-all duration-200"
                                        >
                                            Projects
                                        </Link>{" "}
                                        or{" "}
                                        <a
                                            href="https://github.com/vishalrathod8788"
                                            className="text-gray-900 dark:text-white font-medium underline decoration-2 hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline transition-all duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>{" "}
                                        to see my work in action.
                                    </p>
                                </div>

                                {/* Right Side: Navigation */}
                                <div className="w-full lg:w-[30%] lg:min-w-[280px]">
                                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-1 gap-2">
                                        {/* Blogs Link */}
                                        <Link
                                            to="/blog"
                                            className="flex items-center gap-3 border-b-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-3 transition-all duration-200 rounded-lg lg:rounded-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-notebook-pen shrink-0"
                                            >
                                                <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
                                                <path d="M2 6h4"></path>
                                                <path d="M2 10h4"></path>
                                                <path d="M2 14h4"></path>
                                                <path d="M2 18h4"></path>
                                                <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                                            </svg>
                                            <span className="text-sm sm:text-base lg:text-lg font-medium">
                                                Blogs
                                            </span>
                                        </Link>

                                        {/* Work Link */}
                                        <Link
                                            to="/projects"
                                            className="flex items-center gap-3 border-b-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-3 transition-all duration-200 rounded-lg lg:rounded-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-briefcase-business shrink-0"
                                            >
                                                <path d="M12 12h.01"></path>
                                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                                <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                            </svg>
                                            <span className="text-sm sm:text-base lg:text-lg font-medium">
                                                Projects
                                            </span>
                                        </Link>

                                        {/* About Link */}
                                        <Link
                                            to="/about"
                                            className="flex items-center gap-3 border-b-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-3 transition-all duration-200 rounded-lg lg:rounded-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-user shrink-0"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            <span className="text-sm sm:text-base lg:text-lg font-medium">
                                                About
                                            </span>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mt-8">
                                <div className="flex items-center space-x-4 sm:space-x-5 flex-wrap">
                                    <a
                                        href="https://github.com/vishalrathod8788/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-200"
                                        aria-label="GitHub"
                                    >
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://medium.com/@vishal88"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-200"
                                        aria-label="Medium"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 1043.63 592.71"
                                            fill="currentColor"
                                        >
                                            <path d="M588.67 296.45c0 163.74-131.34 296.26-293.86 296.26S1 460.2 1 296.45 132.34.2 294.81.2s293.86 132.51 293.86 296.25zM803.12 296.45c0 151.02-65.7 273.44-146.79 273.44s-146.79-122.42-146.79-273.44S575.25 23.01 656.33 23.01s146.79 122.42 146.79 273.44zM1042.63 296.45c0 140.88-30.2 255.15-67.41 255.15s-67.41-114.27-67.41-255.15 30.2-255.15 67.41-255.15 67.41 114.27 67.41 255.15z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://x.com/VishalRathod_88"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-200"
                                        aria-label="Twitter"
                                    >
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/rathod-vishal/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
                                        aria-label="LinkedIn"
                                    >
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="mailto:vishalrathod1562004@gmail.com"
                                        target="_blank"
                                        aria-label="Email"
                                    >
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="size-8 dark:text-gray-300 text-gray-600 hover:text-blue-500 hover:scale-110 transition-all duration-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m15.24 8.998 3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284h-.003zm-5.456 3.538 1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024zM23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z"></path></svg>
                                    </a>
                                </div>
                                <div className="flex justify-start sm:justify-end w-full sm:w-auto">
                                    <a
                                        href="https://drive.google.com/file/d/1vrdazR4u6ffQhxmlUFX9NNQLkXADcWkX/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center px-5 py-2.5 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
                                        aria-label="Download Resume"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                        <span className=" sm:inline">Download Resume</span>
                                        {/* <span className="sm:hidden">Resume</span> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Recent Blogs Section */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">
                            Recent Blogs
                        </h2>

                        <div className="space-y-4 max-w-full">
                            {recentBlogs.map((blog, index) => (
                                <Link
                                    key={index}
                                    to={`/blog/${blog.slug}`}
                                    className="block p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md rounded-lg transition-all duration-200 group cursor-pointer"
                                >
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3 transition-colors duration-200">
                                        {blog.title}
                                    </h3>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                            {blog.date}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Blogs */}
                        <div className="mt-6 sm:mt-8">
                            <Link
                                to="/blog"
                                className="inline-flex items-center underline text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium group"
                            >
                                View all blogs
                                <svg
                                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}