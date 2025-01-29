import { useState, useRef } from "react";

const links = [
    { label: "About Us", href: "about-us" },
    { label: "Courses", href: "courses" },
    { label: "Projects", href: "projects" },
    { label: "Workshops", href: "workshops" },
    { label: "Testimonials", href: "testimonials" },
];

const rightLinks = [
    { label: "Live Projects", href: "live-projects" },
    { label: "Blogs", href: "blogs" },
    { label: "Enroll", href: "enroll", isButton: true },
];

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Refs for scrollable sections
    const aboutUsRef = useRef(null);
    const coursesRef = useRef(null);
    const projectsRef = useRef(null);
    const workshopsRef = useRef(null);
    const testimonialsRef = useRef(null);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 70, // Offset for fixed navbar
            behavior: "smooth",
        });
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(false); // Close modal if clicked outside
        }
    };

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Left-side links */}
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="h-12 w-12"
                                src="logo2.png"
                                alt="logo1"
                                width={68}
                                height={68}
                            />
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            {links.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() =>
                                        scrollToSection(
                                            link.href === "about-us"
                                                ? aboutUsRef
                                                : link.href === "courses"
                                                    ? coursesRef
                                                    : link.href === "projects"
                                                        ? projectsRef
                                                        : link.href === "workshops"
                                                            ? workshopsRef
                                                            : testimonialsRef
                                        )
                                    }
                                    className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-normal"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Hamburger Menu for mobile */}
                    <div className="md:hidden" onClick={toggleMobileMenu}>
                        <button className="text-gray-500 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Right-side links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {rightLinks.map((link) =>
                            link.isButton ? (
                                <button
                                    key={link.label}
                                    onClick={toggleModal} // Open modal for Enroll
                                    className="px-3 py-2 rounded-md text-sm font-medium border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
                                    aria-label={`Open modal to ${link.label}`}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() =>
                                        scrollToSection(
                                            link.href === "live-projects"
                                                ? aboutUsRef
                                                : link.href === "blogs"
                                                    ? coursesRef
                                                    : testimonialsRef
                                        )
                                    }
                                    className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white border-t border-gray-200`}
                >
                    <div className="flex flex-col items-center py-4">
                        {links.map((link) => (
                            <button
                                key={link.label}
                                onClick={() =>
                                    scrollToSection(
                                        link.href === "about-us"
                                            ? aboutUsRef
                                            : link.href === "courses"
                                                ? coursesRef
                                                : link.href === "projects"
                                                    ? projectsRef
                                                    : link.href === "workshops"
                                                        ? workshopsRef
                                                        : testimonialsRef
                                    )
                                }
                                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium"
                            // Close the menu on link click
                            >
                                {link.label}
                            </button>
                        ))}
                        {rightLinks.map((link) =>
                            link.isButton ? (
                                <button
                                    key={link.label}
                                    onClick={toggleModal}
                                    className="mt-2 px-3 py-2 rounded-md text-base font-medium border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() =>
                                        scrollToSection(
                                            link.href === "live-projects"
                                                ? aboutUsRef
                                                : link.href === "blogs"
                                                    ? coursesRef
                                                    : testimonialsRef
                                        )
                                    }
                                    className="mt-2 text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium"
                                // Close the menu on link click
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Modal for Enroll Form */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal} // Close modal when clicking outside
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg w-96"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Enroll Now
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 mb-1"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 mb-1"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="course"
                                    className="block text-gray-700 mb-1"
                                >
                                    Course Name
                                </label>
                                <input
                                    id="course"
                                    type="text"
                                    placeholder="Enter course name"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
