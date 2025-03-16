import { useRef } from "react";

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
const CasesSection = () => {
    const sectionRef = useRef(null);
    return (
        <section ref={sectionRef} className="bg-gray-900 min-h-screen py-12 md:py-20 relative overflow-hidden">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Our Courses
                    </h1>
                    <p className="mt-4 text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
                        Explore our courses designed to help you build real-world skills in IoT, Robotics, and AI!
                    </p>
                </div>

                <div id="courses" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {articles.map((article) => (
                        <div
                            key={article.name}
                            className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mx-auto w-full max-w-sm"
                        >
                            <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={400}
                                    height={300}
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-sm sm:text-base uppercase text-gray-700 font-semibold text-center mb-2">
                                    {article.name}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base text-center line-clamp-3">
                                    {article.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CasesSection;

