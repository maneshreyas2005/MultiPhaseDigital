
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import whiteGridBackGround from '../assets/whiteGridBackGround.png';
import Pandavasss from '../assets/Pandavasss.png';

const ServicePage = () => {
    const statsRef = useRef(null);
    const headingRef = useRef(null);
    const imagesRef = useRef(null);
    const [isStatsVisible, setIsStatsVisible] = useState(false);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [isImagesVisible, setIsImagesVisible] = useState(false);

    useEffect(() => {
        const createObserver = (ref, setVisible) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.3 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }
            return () => observer.disconnect();
        };

        const cleanupStats = createObserver(statsRef, setIsStatsVisible);
        const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);
        const cleanupImages = createObserver(imagesRef, setIsImagesVisible);

        return () => {
            cleanupStats();
            cleanupHeading();
            cleanupImages();
        };
    }, []);

    const headingText = ['WE', 'GAIN', 'TRUST', 'BY', 'WORKING', 'EFFICIENTLY'];

    return (
        <div className="relative w-full max-w-[1390px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${whiteGridBackGround})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />

            {/* Heading */}
            <div className="relative z-10 flex justify-center mt-8 sm:mt-12 lg:mt-16">
                <h1
                    ref={headingRef}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-center max-w-xs sm:max-w-md lg:max-w-lg px-2"
                    style={{ fontFamily: 'Constantine' }}
                >
                    <p className="flex flex-wrap justify-center gap-1 sm:gap-2 leading-tight">
                        {headingText.map((word, index) => (
                            <span
                                key={index}
                                className={`${isHeadingVisible ? 'animate-word-reveal' : 'opacity-0'} ${['GAIN', 'TRUST'].includes(word) ? 'text-white' : 'text-white/40'}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </h1>
            </div>

            {/* Stats */}
            <div
                ref={statsRef}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[80px] mt-6 sm:mt-8 lg:mt-10 justify-center items-center bg-black px-2 sm:px-4 py-4 sm:py-6 overflow-hidden mb-4 sm:mb-6 lg:mb-8"
            >
                {[
                    { value: 6, label: 'Years Of\nExperience' },
                    { value: 5658, label: 'Customers\nWorldwide', separator: ',' },
                    { value: 12000, label: 'PR works\nCompleted', suffix: '+' }
                ].map((stat, i) => (
                    <div
                        key={i}
                        className={`group relative inline-block rounded-[2rem] p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                    >
                        <div className="rounded-[2rem] bg-black w-[140px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[280px] 2xl:w-[300px] aspect-square flex flex-col justify-center items-center text-white text-center overflow-hidden">
                            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                                {isStatsVisible ? <CountUp end={stat.value} duration={2} separator={stat.separator} suffix={stat.suffix} /> : '0'}
                            </h2>
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-pre-line mt-1 sm:mt-2">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image */}
            <div
                ref={imagesRef}
                className={`relative z-1 mt-[-20px] xs:mt-[-30px] sm:mt-[-40px] md:mt-[-60px] lg:mt-[-95px] 
        ${isImagesVisible ? 'animate-slide-up' : 'opacity-0'}`}
            >
                <img
                    src={Pandavasss}
                    alt=""
                    className="w-full max-w-full h-auto mx-auto px-2 sm:px-0"
                />
            </div>

        </div>
    );
};

export default ServicePage;
