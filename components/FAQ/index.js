import React from 'react';

const faqData = [
    {
        question: 'Do I need prior experience to enroll?',
        answer: 'No, our courses are designed to be beginner-friendly and accessible to learners with no prior experience.',
    },
    {
        question: 'What age group are these courses for?',
        answer: 'Our courses are ideal for kids aged 10+ and suitable for students of all levels who are eager to learn.',
    },
    {
        question: 'Can I take the courses online?',
        answer: 'Yes, we provide both in-person and online course options to fit your preferences and schedule.',
    },
    {
        question: 'How long do the courses take to complete?',
        answer:
            'The duration varies by course, but most courses are structured to be completed in 4-8 weeks with flexible schedules.',
    },
    {
        question: 'What topics are covered in the courses?',
        answer:
            'Our courses cover a wide range of topics, including coding, robotics, math, science, and other STEM-focused areas.',
    },
];

const FAQ = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-16 bg-white min-h-screen">
            <div id="about-us" className="max-w-4xl mx-auto py-16">
                <h4 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-gray-800">
                    Frequently Asked Questions
                </h4>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {faqData.map((faq, index) => (
                    <div className="py-5" key={index}>
                        <details className="group" open={index === 0}>
                            <summary
                                className="flex justify-between items-center font-bold cursor-pointer list-none font-bold text-gray-800"
                                aria-expanded={index === 1 ? "false" : "true"}
                            >
                                <span className="text-sm sm:text-base p-1">{faq.question}</span>
                                <span className="transition-transform group-open:rotate-180">
                                    <svg
                                        fill="none"
                                        height="24"
                                        shapeRendering="geometricPrecision"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn p-1 text-sm sm:text-base">
                                {faq.answer}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
