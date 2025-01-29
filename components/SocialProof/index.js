import { useState } from 'react';

const socialProofs = [
    {
        name: `Ava`,
        company: `Age 12`,
        image: `/images/social-1.webp`,
        text: `Tech Genius has made learning so much fun! I now know how to build my own smart home systems using Raspberry Pi!`,
    },
    {
        name: `Liam`,
        company: `Age 14`,
        image: `/images/social-2.webp`,
        text: `The Robotics course was amazing. I loved building my own robot and programming it to move!`,
    },
];

const SocialProof = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % socialProofs.length);
    };

    const previous = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? socialProofs.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container mx-auto my-12 px-4">
            <div className="max-w-3xl mx-auto">
                <section>
                    <figure className="relative bg-white p-8 rounded-lg ">
                        {/* Decorative Quote PNG */}
                        <img
                            src="/images/quote.png"
                            alt="Quote"
                            className="absolute top-[-20px] left-[-20px] w-12 h-12 opacity-30"
                        />
                        <div className="pt-6">
                            <p className="text-gray-600 text-lg italic pb-6 text-center">
                                "{socialProofs[currentIndex].text}"
                            </p>
                            <div className="flex items-center justify-center mt-4">
                                <div className="flex items-center">
                                    <div className="h-16 w-16">
                                        <img
                                            src={socialProofs[currentIndex].image}
                                            alt={socialProofs[currentIndex].name}
                                            className="h-full w-full object-cover rounded-full border-2 border-gray-200"
                                        />
                                    </div>
                                    <div className="ml-4 text-center">
                                        <p className="text-gray-800 font-bold text-lg">
                                            {socialProofs[currentIndex].name}
                                        </p>
                                        <span className="text-gray-500 text-sm">
                                            {socialProofs[currentIndex].company}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6 space-x-4">
                                <button
                                    className="p-3 bg-gray-400 rounded-full hover:bg-gray-800 focus:outline-none"
                                    onClick={previous}
                                    aria-label="Previous"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                </button>
                                <button
                                    className="p-3 bg-gray-400 rounded-full hover:bg-gray-800 focus:outline-none"
                                    onClick={next}
                                    aria-label="Next"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </figure>
                </section>
            </div>
        </div>
    );
};

export default SocialProof;
