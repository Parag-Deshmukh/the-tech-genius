import Image from 'next/image'; // Make sure you are importing Image correctly

const listItems = [
    {
        title: `IoT Sensor Projects`,
        description: `Learn how to use sensors to gather real-time data and create smart systems. Whether it’s monitoring air quality, creating a weather station, or building automated plant watering systems, our IoT projects teach you practical applications that make a difference.`,
    },
    {
        title: `Raspberry Pi Innovations`,
        description: `Explore the limitless possibilities of Raspberry Pi! Build smart home automation systems, set up media servers, or design your own environmental monitoring devices. Unleash your potential to innovate with this versatile microcomputer.`,
    },
    {
        title: `Robotics Adventures`,
        description: `Discover the fascinating world of robotics with Arduino! Program robots to move, avoid obstacles, and perform tasks autonomously. From building robotic arms to line-following bots, your imagination is the only limit.`,
    },
];

const ListSection = () => (
    <section className="lg:py-28 pt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white">
            <div className="mb-16 text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    Bring ideas to life with real-world IoT, Robotics, and AI projects!
                </h2>
                <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                    Hands-On Projects
                </p>
            </div>
            <div id="projects" className="flex flex-wrap -mx-8 items-center">
                <div className="w-full lg:w-1/2 px-8">
                    <ul className="space-y-12">
                        {listItems.map((item, index) => (
                            <li className="flex -mx-4 text-gray-800" key={item.title}>
                                <div className="px-4">
                                    <span
                                        className="flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500"
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                                <div className="px-4">
                                    <h3 className="my-4 text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-500 leading-loose">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 px-8">
                    <div className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
                        <Image
                            src="/images/iot.jpg" // Ensure this path points to an existing image in the public folder
                            width={500}
                            height={500}
                            alt="Picture of a project"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ListSection;
