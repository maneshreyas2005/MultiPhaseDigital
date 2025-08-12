
import React from 'react';
import vector6 from '../assets/Vector6.png';
import Aeroplane from '../assets/Airplane.png';
import Aeroplane1 from '../assets/aeroplane2.png';
import AirMagazine from '../assets/AirMagazine.png';
import Indigo from '../assets/Indigoandmore.png';
import useInView from './UseInView';

const AirLineMagazines = () => {
    const [sectionRef, inView] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={sectionRef}
            className="relative w-full bg-black flex flex-col items-center justify-center mx-2 p-4 sm:p-6 mb-8 sm:mb-[30px]"
        >
            {/* Heading */}
            <div className="w-full max-w-[556px] text-center mb-8 sm:mb-12 px-4">
                <h1
                    className={`text-white/40 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide 
                        ${inView ? "animate-slide-up" : "opacity-0"}`}
                    style={{
                        fontFamily: 'Constantine',
                        animationDelay: '0.1s',
                        animationFillMode: 'both',
                    }}
                >
                    <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                        GET FEATURED
                    </span>
                </h1>

                <h2
                    className={`text-white/40 text-xl sm:text-2xl md:text-2xl font-semibold tracking-wide mt-2 
                        ${inView ? "animate-slide-up" : "opacity-0"}`}
                    style={{
                        fontFamily: 'Constantine',
                        animationDelay: '0.3s',
                        animationFillMode: 'both',
                    }}
                >
                    IN AIRLINE MAGAZINES
                </h2>

                <div className="flex justify-center mt-4 sm:mt-[20px]">
                    <img
                        src={vector6}
                        alt="Decorative line"
                        className={`w-[180px] sm:w-[260px] md:w-[300px] 
                            ${inView ? "animate-slide-up" : "opacity-0"}`}
                        style={{
                            animationDelay: '0.5s',
                            animationFillMode: 'both',
                        }}
                    />
                </div>
            </div>

            {/* Main content section - Mobile: stacked, Tablet+: overlapped */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:min-h-screen">
                {/* Mobile/Tablet Layout - Stacked */}
                <div className="lg:hidden flex flex-col items-center space-y-6 sm:space-y-8">
                    {/* Airplane */}
                    <div
                        className={`${inView ? "animate-slide-in-left" : "opacity-0"}`}
                        style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                    >
                        <img
                            src={Aeroplane1}
                            alt=""
                            className="w-[300px] sm:w-[400px] md:w-[500px] grayscale ml-[-30px]"
                        />
                    </div>

                    {/* Text section */}
                    <div
                        className={`text-center ${inView ? "animate-slide-up" : "opacity-0"}`}
                        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
                    >
                        <h1
                            className="text-white/40 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide"
                            style={{ fontFamily: 'Constantine' }}
                        >
                            <span className="text-white/40" style={{ fontFamily: 'Constantine' }}>
                                OVER
                            </span>
                        </h1>
                        <h2 className="text-white/40 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide">
                            <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                                2.5 CR
                            </span>
                            <br />
                            <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                                REACH
                            </span>
                        </h2>
                    </div>

                    {/* Air Magazine */}
                    <div
                        className={`${inView ? "animate-slide-up" : "opacity-0"}`}
                        style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
                    >
                        <img
                            src={AirMagazine}
                            alt=""
                            className="w-[120px] sm:w-[150px] md:w-[200px]"
                        />
                    </div>
                </div>

                {/* Desktop Layout - Original overlapped design */}
                <div className="hidden lg:flex lg:items-center lg:w-full lg:min-h-screen mt-[30px]">
                    <div
                        className={`${inView ? "animate-slide-in-left" : "opacity-0"} z-[1]`}
                        style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                    >
                        <img src={Aeroplane} alt="" className="w-[890px] xl:w-[1184.83px] grayscale mt-[-200px] ml-[-30px]" />
                    </div>

                    <div
                        className={`ml-[-360px] xl:ml-[-470px] mt-[-600px] xl:mt-[-760px] z-[0] ${inView ? "animate-slide-up" : "opacity-0"}`}
                        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
                    >
                        <h1
                            className="text-white/40 text-4xl lg:text-5xl font-semibold tracking-wide"
                            style={{ fontFamily: 'Constantine' }}
                        >
                            <span className="text-white/40" style={{ fontFamily: 'Constantine' }}>
                                OVER
                            </span>
                        </h1>
                        <h2 className="text-white/40 text-5xl xl:text-6xl font-semibold tracking-wide">
                            <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                                2.5 CR
                            </span>
                            <br />
                            <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                                REACH
                            </span>
                        </h2>
                    </div>

                    <div
                        className={`${inView ? "animate-slide-up" : "opacity-0"}`}
                        style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
                    >
                        <img src={AirMagazine} alt="" className="w-[200px] xl:w-[280px] mt-[-340px] ml-[90px]" />
                    </div>
                </div>
            </div>

            {/* Indigo section */}
            <div
                className={`flex items-center justify-center w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1209px] 
                    h-[50px] sm:h-[60px] md:h-[70px] lg:h-[85px] xl:h-[120px] 
                    mt-4 sm:mt-6 lg:mt-[-320px] mb-6 sm:mb-[30px] 
                    bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden px-4
                    ${inView ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: '1.3s', animationFillMode: 'both' }}
            >
                <img
                    src={Indigo}
                    alt=""
                    className="max-w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default AirLineMagazines;
