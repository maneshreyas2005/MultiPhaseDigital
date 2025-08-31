
import React from 'react';
import vector6 from '../assets/Vector6.png';
// import Founder1 from '../assets/Founder1.png';
import Founder1 from '../assets/Founders/AnubhavDubey.png';

// import Founder2 from '../assets/Founder2.png';
import Founder2 from '../assets/Founders/Mehul.png';

// import Founder3 from '../assets/Founder3.png';
// import Founder4 from '../assets/Founder4.png';
import Founder3 from '../assets/Founders/KartikVerma.png';
import Founder4 from '../assets/Founders/SameerSatyarth2.png';
import Staff4 from '../assets/StaffImages/Staff4.png';
import ManishPandey from '../assets/ManishPandey.png';
import DevendraPurohit from '../assets/Founders/DevendraPurohit.png';
import useInView from './UseInView';

const Founders = () => {
    const [ref, isInView] = useInView({ threshold: 0.3 });

    return (
        <div id="OurTeam"
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
                    <span className="text-white/40" style={{ fontFamily: 'Constantine' }}>
                        OUR
                    </span>
                </h1>
                <h2
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-2"
                    style={{ fontFamily: 'Constantine' }}
                >
                    BACKBONE
                </h2>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[160px] sm:w-[250px] md:w-[300px] lg:w-[400px] mt-2 sm:mt-5 mx-auto mb-4 sm:mb-5"
                />
            </div>

            {/* Desktop Layout (≥1024px) */}
            <div className="hidden lg:flex flex-col relative justify-center items-center  mt-[-4rem] bg-black px-4 sm:px-6 lg:px-8 overflow-hidden z-[0]">
                <div className='flex mt-[-3rem] gap-6 lg:gap-10 xl:gap-15 ml-7 absolute z-[1]'>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide  whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">MEHUL PUROHIT</span>
                        <br />
                        FOUNDER & CEO
                    </span>

                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-right md:ml-[20px] whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">DEVENDRA PUROHIT</span>
                        <br />
                        CO FOUNDER & CMO
                    </span>
                </div>
                <div className='flex gap-6 lg:gap-[14rem] xl:gap-[25rem] relative'>
                    <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                        <img src={Founder2} alt="Mehul Purohit" className="w-[320px] lg:w-[380px] xl:w-[420px]  h-auto rounded-lg object-contain grayscale" />

                    </div>
                    <div className={`flex items-center xl:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}>
                        <img src={DevendraPurohit} alt="Anubhav Dubey" className="w-[280px] lg:w-[340px] xl:w-[420px] h-auto rounded-lg object-contain" />
                    </div>
                </div>
                
                
            </div>
            <div className="hidden lg:flex flex-col relative justify-center items-center mt-6 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden  z-[0]">
                <div className='flex mt-[-3rem] gap-6 lg:gap-8 absolute'>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide  whitespace-normal ml-28">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">SAMEER SATYARTH</span>
                        <br />
                        VICE PRESIDENT
                    </span>

                    <span className="text-white/40 text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center ml-[80px] whitespace-normal z-[1]">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">KARTIK VERMA</span>
                        <br />
                        CONTENT PR HEAD
                    </span>
                </div>
                <div className='flex gap-6 lg:gap-[17rem] xl:gap-[23rem] relative'>
                    <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                        <img src={Founder4} alt="Sameer Satyarth" className="w-[280px] lg:w-[500px] xl:w-[600px] h-auto rounded-lg  object-contain " />

                    </div>
                    <div className={`flex items-center xl:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}>

                        <img src={Founder3} alt="Kartik Verma" className="w-[280px] lg:w-[340px] xl:w-[520px] h-auto rounded-lg object-contain grayscale" />
                    </div>
                </div>
                


            </div>
            {/* <div className="hidden w-full lg:flex relative justify-center items-center mt-6 bg-black px-4 sm:px-6 lg:px-8  z-[0]">
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

            </div> */}

            <div className="hidden lg:flex flex-col relative justify-center items-center mt-6 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden z-[0]">
                <div className='flex mt-[-3rem] gap-6 lg:gap-18 ml-7 absolute'>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide  whitespace-normal z-[1]">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">MANISH PANDEY</span>
                        <br />
                        MENTOR
                    </span>

                    <span className="text-white/40 text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center md:ml-[20px] whitespace-normal z-[1]">
                        <span className="text-white text-center">ANUBHAV DUBEY</span>
                        <br />
                        MENTOR
                    </span>
                </div>
                <div className='flex gap-6 lg:gap-[16rem] xl:gap-[27rem] relative'>
                    
                    <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                        <img src={ManishPandey} alt="Kartik Verma" className="w-[300px] lg:w-[400px] xl:w-[460px] mt-10 h-auto rounded-lg object-contain" />

                    </div>
                    <div className={`flex items-center xl:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}>

                        <img src={Founder1} alt="Anubhav Dubey" className="w-[350px] grayscale md:w-[350px] lg:w-[350px] xl:w-[410px]  h-auto rounded-lg object-contain" />
                    </div>
                    
                </div>



            </div>

            {/* Tablet & Mobile Layout (<1024px) */}
            <div className="flex lg:hidden flex-col justify-center  items-center gap-8 sm:gap-10 md:gap-12 mt-[-20px] bg-black px-2 sm:px-4 overflow-hidden z-[0]">
                
                <div
                    className={`flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-left' : ''}`}
                >
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">MEHUL PUROHIT</span>
                        
                        <br />
                        FOUNDER & CEO
                    </span>
                    <img
                        src={Founder2}
                        alt="Mehul Purohit"
                        className="w-[300px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0 grayscale"
                    />
                </div>
                {/* Founder 2 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row mt-[2rem] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={DevendraPurohit}
                        alt="Kartik Verma"
                        className="w-[300px] sm:w-[300px] md:w-[380px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">Devendra Purohit</span>

                        <br />
                        CO FOUNDER & CMO
                    </span>
                </div>
                {/* Founder 3 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row mt-[2rem] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder4}
                        alt="Anubhav Dubey"
                        className="w-[320px] sm:w-[320px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0 grayscale"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">Sameer Satyarth</span>

                        <br />
                        VICE PRESIDENT
                    </span>
                </div>
                {/* Founder 4 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row mt-[2rem] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder3}
                        alt="Kartik Verma"
                        className="w-[250px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0 grayscale"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">Kartik Verma</span>

                        <br />
                        CONTENT PR HEAD
                    </span>
                </div>
                {/* Founder 5 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row mt-[2rem] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={ManishPandey}
                        alt="Manish Pandey"
                        className="w-[270px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">MANISH PANDEY</span>
                        <br />
                        MENTOR
                    </span>
                </div>
                
                
                {/* Founder 6 */}
                <div
                    className={`flex flex-col justify-center sm:flex-row mt-[2rem] items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder1}
                        alt="Anubhav Dubey"
                        className="w-[250px] sm:w-[250px] md:w-[250px] h-auto rounded-lg object-contain flex-shrink-0 grayscale"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        <span className="text-white text-right text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center">ANUBHAV DUBEY</span>
                        <br />
                        MENTOR
                    </span>
                </div>
                
            </div>
        </div>
    );
};

export default Founders;