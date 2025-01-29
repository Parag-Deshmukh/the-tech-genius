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

const Blogs = () => (
    <section className="w-full min-h-screen bg-blue-500 relative">
        <div className="absolute inset-0 h-screen w-full overflow-hidden">
            {/* Placeholder for Particle Background */}
            {/* <ParticleBg /> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-20 lg:pt-40">
            <h1 id="blogs" className="text-white text-4xl lg:text-6xl font-bold text-center">
                Latest Blogs
            </h1>
            <p className="text-white text-xl text-center mt-6">
                Stay Inspired and Informed with Our Expert Insights!
            </p>
            <div className="pt-16 flex flex-wrap justify-center gap-12">
                {articles.map((article) => (
                    <div
                        key={article.title}
                        className="relative w-full sm:w-5/12 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        aria-label={article.name}
                    >
                        <div className="h-56">
                            <img
                                src={article.image}
                                alt={article.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-gray-700 font-semibold text-center uppercase text-sm">{article.name}</p>
                            <p className="text-gray-500 text-center text-sm mt-2">{article.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Blogs;
