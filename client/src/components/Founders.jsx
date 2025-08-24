
import React from 'react';
import vector6 from '../assets/Vector6.png';
import Founder1 from '../assets/Founder1.png';
import Founder2 from '../assets/Founder2.png';
import Staff4 from '../assets/StaffImages/Staff4.png';
import useInView from './UseInView';

const Founders = () => {
    const [ref, isInView] = useInView({ threshold: 0.3 });

    return (
        <div
            ref={ref}
            className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 z-[1]"
        >
            {/* Heading */}
            <div
                className={`bg-black text-center mb-8 sm:mb-12 lg:mb-16 max-w-full ${isInView ? 'animate-slide-up' : ''}`}
            >
                <h1
                    className="text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide"
                    style={{ fontFamily: 'Constantine' }}
                >
                    <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                        OUR
                    </span>
                </h1>
                <h2
                    className="text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-2"
                    style={{ fontFamily: 'Constantine' }}
                >
                    FOUNDERS
                </h2>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[160px] sm:w-[250px] md:w-[300px] lg:w-[400px] mt-2 sm:mt-5 mx-auto mb-4 sm:mb-5"
                />
            </div>

            {/* Desktop Layout (≥1024px) */}
            <div className="hidden lg:flex flex-col relative justify-center items-center  mt-[-4rem] bg-black px-4 sm:px-6 lg:px-8 overflow-hidden z-[0]">
                <div className='flex mt-[-3rem] gap-6 lg:gap-10 absolute'>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide  whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>

                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center md:ml-[20px] whitespace-normal">
                        MEHUL PUROHIT
                        <br />
                        FOUNDER & CEO
                    </span>
                </div>
                <div className='flex gap-6 lg:gap-[14rem] xl:gap-[22rem] relative'>
                    <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                        <img src={Founder1} alt="Anubhav Dubey" className="w-[280px] lg:w-[340px] xl:w-[400px] h-auto rounded-lg object-contain" />

                    </div>
                    <div className={`flex items-center xl:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}>

                        <img src={Founder2} alt="Mehul Purohit" className="w-[320px] lg:w-[400px] xl:w-[460px] h-auto rounded-lg object-contain" />
                    </div>
                </div>
                
                
            </div>
            <div className="hidden lg:flex flex-col relative justify-center items-center mt-6 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden z-[0]">
                <div className='flex mt-[-3rem] gap-6 lg:gap-10 absolute'>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide  whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>

                    <span className="text-white/40 text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center md:ml-[20px] whitespace-normal z-[1]">
                        Manish Pandey
                        <br />
                        Mentor
                    </span>
                </div>
                <div className='flex gap-6 lg:gap-[16rem] xl:gap-[27rem] relative'>
                    <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                        <img src={Founder1} alt="Anubhav Dubey" className="w-[280px] lg:w-[340px] xl:w-[400px] h-auto rounded-lg object-contain" />

                    </div>
                    <div className={`flex items-center xl:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}>

                        <img src={Staff4} alt="Manish Pandey" className="w-[300px] lg:w-[400px] xl:w-[440px]  h-auto rounded-lg object-contain" />
                    </div>
                </div>
                


            </div>
            <div className="hidden w-full lg:flex relative justify-center items-center mt-6 bg-black px-4 sm:px-6 lg:px-8  z-[0]">
                <div className='flex mt-[-3rem] lg:ml-20 gap-6 lg:gap-10 absolute'>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl lg:ml-100 font-semibold tracking-wide  whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>
                </div>
                <div className='flex gap-6 lg:gap-[16rem] xl:gap-[27rem] relative'>
                    <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                        <img src={Founder1} alt="Anubhav Dubey" className="w-[280px] lg:w-[340px] xl:w-[400px] h-auto rounded-lg object-contain" />

                    </div>
                </div>

            </div>

            {/* Tablet & Mobile Layout (<1024px) */}
            <div className="flex lg:hidden flex-col justify-center  items-center gap-8 sm:gap-10 md:gap-12 mt-[-20px] bg-black px-2 sm:px-4 overflow-hidden z-[0]">
                
                <div
                    className={`flex flex-col-reverse h-[67vh] sm:flex-row items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-left' : ''}`}
                >
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        MEHUL PUROHIT
                        <br />
                        FOUNDER & CEO
                    </span>
                    <img
                        src={Founder2}
                        alt="Mehul Purohit"
                        className="w-[300px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                </div>
                {/* Founder 2 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row h-[100vh] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder1}
                        alt="Anubhav Dubey"
                        className="w-[270px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>
                </div>
                {/* Founder 3 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row h-[70vh] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Staff4}
                        alt="Manish Pandey"
                        className="w-[270px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        MANISH PANDEY
                        <br />
                        MENTOR
                    </span>
                </div>
                
                {/* Founder 4 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row h-[80vh] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder1}
                        alt="Anubhav Dubey"
                        className="w-[270px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>
                </div>
                {/* Founder 5 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row h-[80vh] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder1}
                        alt="Anubhav Dubey"
                        className="w-[270px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>
                </div>
                
            </div>
        </div>
    );
};

export default Founders;