import { useRef } from "react";

const articles = [
    {
        title: `Wondering how the Internet of Things will change everything? Here are 3 industries the IoT is already revolutionizing - and we're just getting started.`,
        image: `/images/kids.jpg`,
        name: 'How the Internet of Things will Change Everything',
        alt: `Kids exploring IoT concepts.`,
    },
    {
        title: `New to robotics? Explore easy-to-follow projects perfect for beginners. Build your first robot and start your journey in the world of automation.`,
        name: 'Top Robotics Projects for Beginners',
        image: `/images/iotsense.avif`,
        alt: `Robotics for beginners.`,
    },
    {
        title: `Learn how AI is revolutionizing the education sector, personalizing learning experiences, and making education more accessible and effective.`,
        image: `/images/rspi.jpeg`,
        name: 'AI in Education: A Game Changer for Learning',
        alt: `AI revolutionizing education.`,
    },
];

const Blogs = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="bg-blue-500 min-h-screen py-12 md:py-20 relative overflow-hidden">

            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <h1 id="blogs" className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Latest Blogs
                    </h1>
                    <p className="mt-4 text-white text-opacity-90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
                        Stay Inspired and Informed with Our Expert Insights!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {articles.map((article) => (
                        <div
                            key={article.name}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mx-auto w-full max-w-sm"
                            aria-label={article.name}
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


export default Blogs;
