import Image from 'next/image'; // Import the Image component

const features = [
    {
        title: "Hands-On Learning",
        description:
            "Dive deep into IoT, Robotics, and AI with practical, project-based workshops designed to enhance your skills.",
    },
    {
        title: "Expert Guidance",
        description:
            "Learn directly from industry professionals and experienced mentors who simplify complex concepts.",
    },
    {
        title: "Real-World Projects",
        description:
            "Work on exciting projects like smart home automation, robotics, and machine learning models.",
    },
    {
        title: "Problem-Solving Focus",
        description:
            "Develop critical thinking by tackling real-world challenges with innovative solutions.",
    },
    {
        title: "Collaborative Environment",
        description:
            "Connect with peers, share ideas, and collaborate on projects to expand your learning experience.",
    },
    {
        title: "Tech for the Future",
        description:
            "Gain experience with cutting-edge tools like Raspberry Pi, Arduino, sensors, and AI platforms.",
    },
];

const FeatureSection = () => {
    return (
        <section className="bg-white pb-6">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="container mx-auto px-6 p-6 bg-white">
                    <div className="mb-16 text-center">
                        <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            Learn, Build, and Innovate with Expert-Led Workshops!
                        </h4>
                        <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                            Workshops
                        </p>
                    </div>
                    <div className="flex flex-wrap my-12">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`w-full border-b md:w-1/2 lg:w-1/3 p-8 ${index % 3 === 2 ? "lg:border-b-1" : "lg:border-r"
                                    }`}
                            >
                                <div className="flex items-center mb-6">
                                    {/* Use next/image for static images */}
                                    <Image
                                        src="/images/check.svg" // Path to your SVG file in public
                                        alt="Check icon"
                                        width={25}
                                        height={25}
                                        className="text-indigo-500"
                                    />
                                    <div className="ml-4 text-xl  text-gray-800">{feature.title}</div>
                                </div>
                                <p className="leading-loose text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
