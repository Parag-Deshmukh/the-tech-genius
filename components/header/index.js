import { useState } from 'react';
import Button from '../button'; // Ensure this import is correct

const Header = () => {
    const [showGetStartedModal, setShowGetStartedModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        courseName: '',
    });

    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const toggleGetStartedModal = () => {
        setShowGetStartedModal(!showGetStartedModal);
    };

    const toggleContactModal = () => {
        setShowContactModal(!showContactModal);
    };

    const handleGetStartedSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        toggleGetStartedModal();
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log(contactData);
        toggleContactModal();
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleContactInputChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <header className="bg-white mb-16">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800">
                    "Empowering Young Innovators in IoT, Robotics, and AI!"
                </h1>
                <div className="max-w-xl mx-auto">
                    <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl">
                        Discover, Create, and Lead with Hands-On Learning at Tech Genius.
                    </p>
                </div>
                <div className="mt-10 flex justify-center items-center w-full mx-auto">
                    <Button primary onClick={toggleGetStartedModal}>
                        Get started
                    </Button>
                    <span className="mx-2 text-lime-950">or</span>
                    <Button onClick={toggleContactModal}>Contact us</Button>
                </div>
            </div>

            {/* Modal for Get Started Form */}
            {showGetStartedModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Get Started</h2>
                        <form onSubmit={handleGetStartedSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="courseName" className="block text-gray-700 mb-1">Course Name</label>
                                <input
                                    id="courseName"
                                    name="courseName"
                                    type="text"
                                    placeholder="Enter the course name"
                                    value={formData.courseName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={toggleGetStartedModal}
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

            {/* Modal for Contact Us Form */}
            {showContactModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                        <form onSubmit={handleContactSubmit}>
                            <div className="mb-4">
                                <label htmlFor="contactName" className="block text-gray-700 mb-1">Full Name</label>
                                <input
                                    id="contactName"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={contactData.name}
                                    onChange={handleContactInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contactEmail" className="block text-gray-700 mb-1">Email Address</label>
                                <input
                                    id="contactEmail"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={contactData.email}
                                    onChange={handleContactInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    value={contactData.message}
                                    onChange={handleContactInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={toggleContactModal}
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
        </header>
    );
};

export default Header;
