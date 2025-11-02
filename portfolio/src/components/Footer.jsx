export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between py-6">
                    {/* Left side - Copyright */}
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Copyright © 2025
                    </div>

                    {/* Center - Name */}
                    <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        Vishal Rathod
                    </div>

                    {/* Right side - Go to top button */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-sm"
                        aria-label="Go to top"
                    >
                        Go to top
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;