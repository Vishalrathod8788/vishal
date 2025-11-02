import { useEffect, useState } from "react";

export const Toggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        localStorage.getItem("theme") === "dark"
    });

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <div>
            <svg
                onClick={() => setDarkMode(!darkMode)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
                {darkMode ? (
                    <>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"></circle>
                        <path d="M12 2v2" stroke="currentColor"></path>
                        <path d="M12 20v2" stroke="currentColor"></path>
                        <path d="m4.93 4.93 1.41 1.41" stroke="currentColor"></path>
                        <path d="m17.66 17.66 1.41 1.41" stroke="currentColor"></path>
                        <path d="M2 12h2" stroke="currentColor"></path>
                        <path d="M20 12h2" stroke="currentColor"></path>
                        <path d="m6.34 17.66-1.41 1.41" stroke="currentColor"></path>
                        <path d="m19.07 4.93-1.41 1.41" stroke="currentColor"></path>
                    </>
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                )}
            </svg>
            <span className="text-gray-800 dark:text-gray-200">{darkMode ? "Dark Mode" : "Light Mode"}</span>

        </div>
    );
};
