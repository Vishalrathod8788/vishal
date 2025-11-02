
export const About = () => {


    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">


            <main className="pt-20 pb-16 mt-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row gap-8 mb-16">
                        <img
                            src="/vishalrathod1.jpg"
                            alt="Vishal Rathod"
                            width="200"
                            height="200"
                            className="rounded-full border-4 border-gray-700 dark:border-4 dark:border-white w-48 h-48 object-cover mx-auto sm:mx-0"
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                                About Me
                            </h1>
                            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                I'm <strong>Vishal Rathod</strong>, a MERN stack Full Stack Developer and final-year MCA student based in Ahmedabad, Gujarat. I enjoy building responsive web apps and solving DSA problems (500+ solved). Passionate about learning and creating impactful software.
                            </p>
                        </div>
                    </div>

                    {/* Journey */}
                    <div className="space-y-6 text-base leading-relaxed">
                        <p>

                        </p>

                        <p>
                            My coding journey started during my BCA at Saurashtra University, where I first learned the basics of programming using C, C++, Python, and Java. I was always curious about how websites and applications work, which motivated me to explore web development. Gradually, I mastered HTML, CSS, and JavaScript and then moved toward React and the MERN stack during my MCA.
                        </p>

                        <p>
                            After completing my BCA, I joined the <strong>Bosscoder Software Engineering Cohort</strong> to level up my skills. That experience was transformative—it's where I truly discovered my passion for Frontend Development. I dove deep into JavaScript, React.js, and Tailwind CSS, learning how to create beautiful, interactive interfaces that users love. Along the way, I've solved <strong>500+ Data Structures & Algorithms problems</strong> using Java, which has significantly sharpened my problem-solving abilities. I believe that great developers don't just write code—they write efficient, scalable code. I also use Python for experimentation and testing new ideas.
                        </p>

                        <p>
                            I've built several real-world projects that I'm proud of, including a <strong>URL Shortener</strong> that transforms long URLs into shareable links, a <strong>Wallpaper Gallery</strong> with a smooth browsing experience, and a <strong>Location Bookmark</strong> app to save and organize favorite places. Each project has taught me valuable lessons about state management, API optimization, responsive design, and user experience.
                        </p>

                        <p>
                            My approach to technology is simple: understand the fundamentals deeply, then build relentlessly. I'm a strong believer in learning by doing, which is why I constantly work on projects that challenge me and push me out of my comfort zone. My tech stack includes JavaScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and MySQL.
                        </p>

                        <p>
                            My career goal is to establish myself as a <strong>full-stack developer</strong> who can design and develop scalable, user-friendly applications. I want to keep enhancing my skills in the MERN stack, Data Structures & Algorithms, and system design, while contributing to projects that make a real difference in people's lives.
                        </p>

                        <p>
                            I'm currently looking for opportunities as a <strong>Frontend Developer</strong> where I can collaborate with talented teams, learn from experienced professionals, and work on challenging projects that help me grow as a developer.
                        </p>

                        <p>
                            That's a brief summary about me. I'm always open to discussing technology, sharing knowledge, and exploring new opportunities.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center space-x-5 pt-8 border-t border-gray-200 dark:border-gray-800 mt-8">
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
                                aria-label="Email"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m15.24 8.998 3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284h-.003zm-5.456 3.538 1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024zM23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};