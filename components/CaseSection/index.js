

// Define the ParticleBg component
// const ParticleBg = () => (
//     <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
//         <Particles
//             options={{
//                 particles: {
//                     number: {
//                         value: 400,
//                         density: {
//                             enable: true,
//                             value_area: 3000,
//                         },
//                     },
//                     links: {
//                         enable: false,
//                     },
//                     move: {
//                         direction: "right",
//                         speed: 0.3,
//                     },
//                     size: {
//                         value: 1,
//                     },
//                     opacity: {
//                         anim: {
//                             enable: true,
//                             speed: 0.5,
//                             opacity_min: 0.1,
//                         },
//                     },
//                 },
//                 interactivity: {
//                     events: {
//                         onclick: {
//                             enable: false,
//                         },
//                     },
//                 },
//                 retina_detect: true,
//             }}
//         />
//     </div>
// );
// Your existing article array
const articles = [
    {
        title: `Learn how to build IoT projects with Raspberry Pi, sensors, and actuators. Understand the principles of smart home automation, environmental monitoring, and more.`,
        image: `/images/raspberry-pi.jpg`,
        name: 'IoT with Raspberry Pi',
        alt: `Proident pariatur est.`,
    },
    {
        title: `Discover the world of robotics! Learn to build robots with Arduino, control motors, sensors, and make autonomous machines.`,
        name: 'Robotics with Arduino',
        image: `/images/arduino.jpg`,
        alt: `Proident pariatur est.`,
    },
    {
        title: `Explore the fundamentals of artificial intelligence and machine learning. Learn how to train models and make predictions with real data.`,
        image: `/images/ai-project.jpg`,
        name: 'AI & Machine Learning',
        alt: `Proident pariatur est.`,
    },
];

// Your existing CasesSection component
const CasesSection = () => (
    <section>
        <div className="w-full min-h-screen bg-gray-900 relative">
            <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
                {/* <ParticleBg /> */}
            </div>
            <div className="max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40">
                <h1 className="text-white text-4xl lg:text-7xl font-bold text-center">
                    Our Courses
                </h1>
                <p className="text-white text-gray-400 text-center text-xl mt-12">
                    Explore our courses designed to help you build real-world skills in IoT, Robotics, and AI!
                </p>
                <div id="courses" className="mx-auto pt-24">
                    <div className="w-full flex flex-wrap justify-around">
                        {articles.map((article) => (
                            <div
                                key={article.title}
                                className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                            >
                                <div className="h-64 z-20">
                                    <img
                                        src={article.image}
                                        alt={article.alt}
                                        className="h-full w-full object-cover overflow-hidden rounded"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                                    <p className="uppercase text-sm text-gray-700 text-center pb-1">
                                        {article.name}
                                    </p>
                                    <p className="text-gray-500 text-center pb-1 text-sm">
                                        {article.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <span
                            className=" -mt-8 pb-12 lg:mt-4 flex items-center text-xl text-indigo-400 cursor-pointer z-30 hover:text-indigo-600"
                        >
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CasesSection;
