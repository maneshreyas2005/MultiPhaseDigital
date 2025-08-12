import React, { useRef, useState, useEffect } from 'react';
import whiteGridBackGround from '../assets/whiteGridBackground.png';
import Blur from '../assets/Blur.jpg';
import OnePlus10t from '../assets/OneplusPhones/FilmyGyan.png';
import OnePlus10t1 from '../assets/OneplusPhones/OnePlus10T2.png';
import OnePlus10t2 from '../assets/OneplusPhones/RVCJInsta.png';
import OnePlus10t3 from '../assets/OneplusPhones/InstantBollywood.png';
import vector6 from '../assets/Vector6.png';

const MemePage = () => {
    const headingRef = useRef(null);
    const imagesRef = useRef(null);
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
            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        };

        const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);
        const cleanupImages = createObserver(imagesRef, setIsImagesVisible);

        return () => {
            cleanupHeading();
            cleanupImages();
        };
    }, []);

    return (
        <div className="relative w-full bg-black flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${whiteGridBackGround})` }} // Fixed the template literal syntax
            />
            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.7)_100%)]"></div>

            {/* Centered Text and Vector */}
            <div className="flex flex-col items-center justify-center">
                <div className="relative z-10 flex flex-col items-center">
                    <h1
                        ref={headingRef}
                        className={`text-white text-3xl md:text-6xl font-bold tracking-wide mb-2 mt-[22px] ${isHeadingVisible ? 'animate-word-reveal' : ''
                            }`}
                        style={{ fontFamily: 'Constantine' }}
                    >
                        <span className=" sm:text-3xl md:text-4xl lg:text-5xl ml-[36px]">MEME PAGE</span> <br /> <span className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl ml-[35px] md:ml-[36px]">MARKETING</span>
                    </h1>
                    <img
                        src={vector6}
                        alt="Decorative line"
                        className="w-[190px] md:w-[250px] lg:w-[350px] mb-8 md:ml-[29px]"
                    />
                </div>
                {/* Phone Images Grid */}
                <div ref={imagesRef} className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:top-[-170px] pl-[1rem] pr-[1rem]">
                    <img
                        src={OnePlus10t}
                        alt="Phone 1"
                        className={`w-[220px] md:w-[280px] ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.2s' : '0s' }}
                    />
                    <img
                        src={OnePlus10t2}
                        alt="Phone 2"
                        className={`w-[220px] md:w-[280px] mt-[-160px] md:mt-[0px] translate-y-40 ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.2s' : '0s' }}
                    />
                    <img
                        src={OnePlus10t3}
                        alt="Phone 3"
                        className={`w-[220px] md:w-[278px] mt-[-164px] md:mt-[0px] translate-y-42 ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.2s' : '0s' }}
                    />
                    <img
                        src={OnePlus10t1}
                        alt="Phone 4"
                        className={`w-[220px]  md:w-[280px] ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.2s' : '0s' }}
                    />
                </div>
                {/* <div
                    ref={imagesRef}
                    className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 md:top-[-170px] px-4"
                >
                    <img
                        src={OnePlus10t}
                        alt="Phone 1"
                        className={`w-full max-w-[280px] mx-auto ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.2s' : '0s' }}
                    />
                    <img
                        src={OnePlus10t2}
                        alt="Phone 2"
                        className={`w-full max-w-[280px] mx-auto translate-y-10 ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.4s' : '0s' }}
                    />
                    <img
                        src={OnePlus10t3}
                        alt="Phone 3"
                        className={`w-full max-w-[280px] mx-auto translate-y-10 ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.6s' : '0s' }}
                    />
                    <img
                        src={OnePlus10t1}
                        alt="Phone 4"
                        className={`w-full max-w-[280px] mx-auto ${isImagesVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: isImagesVisible ? '0.8s' : '0s' }}
                    />
                </div> */}

            </div>
        </div>
    );
};

export default MemePage;