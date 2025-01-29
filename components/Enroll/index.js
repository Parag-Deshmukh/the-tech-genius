import Button from "../button";

const Enroll = () => {
    return (
        <footer className="bg-white border-t border-gray-400 pt-14 pb-16">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap justify-between">
                {/* Logo Section */}
                <div className="mb-10 flex items-center justify-start">
                    <img
                        className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 mr-1"
                        src="logo1.png"
                        alt="Company Logo"
                        width={320}
                        height={320}
                        onError={(e) => (e.target.style.display = "none")} // Hides image if it fails to load
                    />
                </div>

                {/* Contact Us Section */}
                <div className="w-full lg:w-1/3 text-gray-800 text-sm font-medium leading-6">
                    <h4 className="text-gray-900 text-base font-bold mb-4">Contact Us</h4>
                    <p className="mb-2">123 Tech Street</p>
                    <p className="mb-2">Innovation City, TC 45678</p>
                    <p className="mb-2">Phone: +1 (555) 123-4567</p>
                    <p>Email: contact@thetechgenius.com</p>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
                    <div className="border border-gray-400 rounded py-5 px-4">
                        <h4 className="font-mono text-sm uppercase text-gray-500 mb-3">
                            Contact Us
                        </h4>

                        <div className="flex w-full flex-col gap-4">
                            <div>
                                <p className="font-mono text-sm uppercase text-gray-500 mb-1">
                                    Name
                                </p>
                                <input
                                    aria-label="name"
                                    type="text"
                                    required
                                    className="border border-gray-300 bg-gray-100 w-full rounded text-gray-800 py-2 px-3"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <p className="font-mono text-sm uppercase text-gray-500 mb-1">
                                    Email
                                </p>
                                <input
                                    aria-label="email"
                                    type="email"
                                    required
                                    className="border border-gray-300 bg-gray-100 w-full rounded text-gray-800 py-2 px-3"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <p className="font-mono text-sm uppercase text-gray-500 mb-1">
                                    Course Name
                                </p>
                                <input
                                    aria-label="course name"
                                    type="text"
                                    required
                                    className="border border-gray-300 bg-gray-100 w-full rounded text-gray-800 py-2 px-3"
                                    placeholder="Enter course name"
                                />
                            </div>
                            <Button primary>Submit</Button>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="w-full flex justify-between mt-8">
                    <div className="flex flex-col items-start">
                        <h4 className="text-gray-900 text-base font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Instagram">
                                <img
                                    className="w-6 h-6"
                                    src="/images/instagram.png"
                                    alt="Instagram logo"
                                />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <img
                                    className="w-6 h-6"
                                    src="/images/twitter.png"
                                    alt="Twitter logo"
                                />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <img
                                    className="w-6 h-6"
                                    src="/images/linkedin.png"
                                    alt="LinkedIn logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Enroll;
