
import React from 'react';
import vector6 from '../assets/Vector6.png';
import Aeroplane from '../assets/Airplane.png';
import Aeroplane1 from '../assets/aeroplane2.png';
import Airplane3 from '../assets/Airplane3.png';
import AirMagazine from '../assets/AirMagazine.png';
import Indigo from '../assets/Indigoandmore.png';
import useInView from './UseInView';
import helloMyanmar from '../assets/helloMyanmar.png';
import namaste from '../assets/namaste.png';
import Vistara from '../assets/Vistara.jpg';
import spiceRoute from '../assets/spiceRoute.jpg';

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
                    className={`text-white/40 text-xl sm:text-3xl md:text-4xl font-semibold tracking-wide 
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
                    className={`text-white/40 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide mt-2 
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
                    {/* Text section */}
                    <div
                        className={`text-center ${inView ? "animate-slide-up" : "opacity-0"} z-[1] ml-34 `}
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
                    {/* Airplane */}
                    <div
                        className={`${inView ? "animate-slide-up" : "opacity-0"} `}
                        style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                    >
                        <img
                            src={Airplane3}
                            alt=""
                            className=" -ml-10 mt-[-9rem] "
                        />
                    </div>



                    {/* Air Magazine */}
                    <div
                        className={`${inView ? "animate-slide-up" : "opacity-0"}  grid grid-cols-2  gap-4 mt-4`}
                        style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
                    >
                        {/* <img
                            src={AirMagazine}
                            alt=""
                            className="w-[120px] sm:w-[150px] md:w-[200px]"
                        /> */}

                        <div 
                            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                            <img
                                src={helloMyanmar}
                                alt="India TV"
                                className="object-contain w-[120px]"
                            />
                        </div>
                        <div
                            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                            <img
                                src={namaste}
                                alt="News 18 India"
                                className="object-contain w-[120px] "
                            />
                        </div>
                        <div
                            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                            <img
                                src={Vistara}
                                alt="Times Now"
                                className="object-contain w-[120px]"
                            />
                        </div>
                        <div
                            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                            <img
                                src={spiceRoute}
                                alt="ABP"
                                className="object-contain w-[120px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Original overlapped design */}
                <div className="hidden lg:flex lg:items-center lg:w-full lg:min-h-screen mt-[70px]">
                    <div
                        className={`${inView ? "animate-slide-up" : "opacity-0"} z-[1]`}
                        style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                    >
                        <img src={Airplane3} alt="" className="w-[890px] lg:w-[960px] xl:w-[1184.83px] grayscale mt-[-146px] ml-[-30px] " />
                    </div>

                    <div
                        className={`ml-[-360px] md:ml-[-320px] xl:ml-[-24rem] md:mt-[-33rem] xl:mt-[-38rem]  z-[0] ${inView ? "animate-slide-up" : "opacity-0"}`}
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
                                3.5 CR
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
                        <img src={AirMagazine} alt="" className="w-[200px] xl:w-[280px] md:mt-[-20rem] xl:mt-[-28rem] ml-[60px]" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AirLineMagazines;
