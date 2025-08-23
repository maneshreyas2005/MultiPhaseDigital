
import React from "react";
import vector6 from "../assets/Vector6.png";
import useInView from "./UseInView";

function FaqsPage() {
    const [headingRef, headingVisible] = useInView({ threshold: 0.1 });

    const faqs = [
        { question: "How does Multiphase Digital measure the success of its PR campaigns?", answer: "We use key performance indicators like media reach, engagement rates, and sentiment analysis to measure success." },
        { question: "What unique services does Multiphase Digital offer to its clients?", answer: "We offer tailored PR strategies, crisis management, and advanced analytics services." },
        { question: "Can you share a case study that highlights your approach to crisis management?", answer: "One case study involves a swift response strategy that mitigated a client's reputation damage within 48 hours." },
        { question: "What role does social media play in your overall PR strategy?", answer: "Social media is central for real-time engagement and amplifying our clients' messages." },
        { question: "How does your team stay updated on industry trends and changes?", answer: "Our team attends industry webinars, follows thought leaders, and analyzes market reports." },
        { question: "What are the common challenges clients face that you help overcome?", answer: "We address challenges like negative publicity, low brand visibility, and inconsistent messaging." },
        { question: "How do you tailor your communication strategies for different audiences?", answer: "We customize messaging based on audience demographics, preferences, and communication channels." },
        { question: "What tools and technologies does Multiphase Digital utilize for PR analytics?", answer: "We use tools like Hootsuite, Google Analytics, and custom dashboards for in-depth PR analytics." }
    ];

    return (
        <div className="bg-black px-4 sm:px-6 lg:px-20 py-10">
            {/* Heading */}
            <div
                ref={headingRef}
                className="flex flex-col justify-center items-center w-full text-center mb-8 sm:mb-10 md:mb-12"
            >
                <h1
                    className={`text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide 
                        ${headingVisible ? "animate-fade-slide-up" : "opacity-0"}`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    <span className="text-white">OUR FAQ'S</span>
                </h1>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className={`w-[200px] sm:w-[250px] md:w-[300px] mt-4 sm:mt-5 mb-4 sm:mb-5
                        ${headingVisible ? "animate-fade-slide-up" : "opacity-0"}`}
                />
            </div>

            {/* FAQ List */}
            <div className="flex flex-col items-center w-full">
                {faqs.map((faq, index) => {
                    const [faqRef, faqVisible] = useInView({ threshold: 0.1 });
                    return (
                        <div
                            key={index}
                            ref={faqRef}
                            className={`bg-gradient-to-r from-pink-500 via-purple-500 to-pink p-[2px] rounded-lg mb-4 w-full max-w-[800px] transition-all duration-500
                                ${faqVisible ? "animate-slide-to-left" : "opacity-0 translate-x-10"}`}
                        >
                            {/* Inner Box */}
                            <div className="bg-black rounded-lg p-4 flex sm:flex-row sm:justify-between sm:items-center gap-3">
                                <span className="text-gray-300 flex-shrink-0">Q{index + 1}</span>
                                <span className="text-white flex-1 break-words text-sm sm:text-base">
                                    {faq.question}
                                </span>
                                <button className="text-gray-300 hover:text-gray-100 flex-shrink-0">+</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FaqsPage;
