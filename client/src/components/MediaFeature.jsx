// import React, { useRef, useState, useEffect } from 'react';
// import Blur from '../assets/Blur.jpg';
// import ZeeNews from '../assets/NewsChannels/ZEEnews.png';
// import ABP from '../assets/NewsChannels/ABP.png';
// import IndiaNews from '../assets/NewsChannels/IndiaNews.png';
// import NewsIndia from '../assets/NewsChannels/NewsIndiaa.png';
// import TimesNow from '../assets/NewsChannels/TimesNow.png';
// import CNBCnewsTV from '../assets/NewsChannels/CNBCnewsTV.png';
// import AAjTak from '../assets/NewsChannels/AAjTak.png';
// import vector6 from '../assets/Vector6.png';
// import NEWSchannelButton from '../assets/NEWSCHANNELBUTTON.png';

// const MediaFeature = () => {
//     const headingRef = useRef(null);
//     const logosRef1 = useRef(null);
//     const logosRef2 = useRef(null);
//     const buttonRef = useRef(null);
//     const [isHeadingVisible, setIsHeadingVisible] = useState(false);
//     const [isLogos1Visible, setIsLogos1Visible] = useState(false);
//     const [isLogos2Visible, setIsLogos2Visible] = useState(false);
//     const [isButtonVisible, setIsButtonVisible] = useState(false);

//     useEffect(() => {
//         const createObserver = (ref, setVisible) => {
//             const observer = new IntersectionObserver(
//                 ([entry]) => {
//                     if (entry.isIntersecting) {
//                         setVisible(true);
//                         observer.disconnect();
//                     }
//                 },
//                 { threshold: 0.3 }
//             );
//             if (ref.current) observer.observe(ref.current);
//             return () => observer.disconnect();
//         };

//         const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);
//         const cleanupLogos1 = createObserver(logosRef1, setIsLogos1Visible);
//         const cleanupLogos2 = createObserver(logosRef2, setIsLogos2Visible);
//         const cleanupButton = createObserver(buttonRef, setIsButtonVisible);

//         return () => {
//             cleanupHeading();
//             cleanupLogos1();
//             cleanupLogos2();
//             cleanupButton();
//         };
//     }, []);

//     return (
//         <div className=" w-full  bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
//             {/* Heading */}
//             <div ref={headingRef} className="text-center mb-8 sm:mb-10 md:mb-12">
//                 <h1
//                     className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide ${isHeadingVisible ? 'animate-fade-slide-up' : ''
//                         }`}
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     BE A <span className="text-white" style={{ fontFamily: 'Constantine' }}>BRAND AND GET FEATURED IN</span>
//                 </h1>
//                 <h2
//                     className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-2 ${isHeadingVisible ? 'animate-fade-slide-up' : ''
//                         }`}
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     TOP BRANDED NEWS, TV, PR MEDIA
//                 </h2>
//                 <img
//                     src={vector6}
//                     alt="Decorative line"
//                     className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px] mt-4  mx-auto"
//                 />
//             </div>

//             {/* Logo Grid 1 */}
//             <div ref={logosRef1} className="grid grid-cols-1  [@media(max-width:920px)]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8 animate-slide-up">
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
//                     <img
//                         src={ZeeNews}
//                         alt="Zee News"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos1Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos1Visible ? '0.2s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto animate-slide-up">
//                     <img
//                         src={AAjTak}
//                         alt="Aaj Tak"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos1Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos1Visible ? '0.4s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto animate-slide-up">
//                     <img
//                         src={CNBCnewsTV}
//                         alt="CNBC"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos1Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos1Visible ? '0.6s' : '0s' }}
//                     />
//                 </div>
//             </div>

//             {/* Logo Grid 2 */}
//             <div ref={logosRef2} className="grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2  md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 animate-slide-up">
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
//                     <img
//                         src={IndiaNews}
//                         alt="India TV"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.2s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto animate-slide-up">
//                     <img
//                         src={NewsIndia}
//                         alt="News 18 India"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.4s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto animate-slide-up">
//                     <img
//                         src={TimesNow}
//                         alt="Times Now"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.6s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto animate-slide-up">
//                     <img
//                         src={ABP}
//                         alt="ABP"
//                         className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-up' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.8s' : '0s' }}
//                     />
//                 </div>
//             </div>

//             {/* Button */}
//             <div ref={buttonRef} className="flex items-center justify-center animate-slide-up">
//                 <button
//                     className={`relative px-6 sm:px-8 py-3 sm:py-4 w-[200px] sm:w-[250px] md:w-[300px] rounded-full mb-4 sm:mb-5 bg-black text-white font-medium text-base sm:text-lg tracking-wide hover:scale-105 transition-transform duration-200 ${isButtonVisible ? 'animate-scale-up' : ''
//                         }`}
//                 >
//                     {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1B192E] via-[#9116E7] to-[#FF738B] p-[2px]">
//                         <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
//                             <span className="text-gray-200 ">+20 NEWS CHANNELS</span>
//                         </div>
//                     </div> */}
//                     <img src={NEWSchannelButton} alt="" className='absolute mt-[-10px] animate-slide-up'/>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MediaFeature;


import React, { useRef, useState, useEffect } from 'react';
import Blur from '../assets/Blur.jpg';
import ZeeNews from '../assets/NewsChannels/ZEEnews.png';
import ABP from '../assets/NewsChannels/ABP.png';
import IndiaNews from '../assets/NewsChannels/IndiaNews.png';
import NewsIndia from '../assets/NewsChannels/NewsIndiaa.png';
import TimesNow from '../assets/NewsChannels/TimesNow.png';
import CNBCnewsTV from '../assets/NewsChannels/CNBCnewsTV.png';
import AAjTak from '../assets/NewsChannels/AAjTak.png';
import vector6 from '../assets/Vector6.png';
import NEWSchannelButton from '../assets/NEWSchannelButton.png';

const MediaFeature = () => {
    const headingRef = useRef(null);
    const logosRef1 = useRef(null);
    const logosRef2 = useRef(null);
    const buttonRef = useRef(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [isLogos1Visible, setIsLogos1Visible] = useState(false);
    const [isLogos2Visible, setIsLogos2Visible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

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
        const cleanupLogos1 = createObserver(logosRef1, setIsLogos1Visible);
        const cleanupLogos2 = createObserver(logosRef2, setIsLogos2Visible);
        const cleanupButton = createObserver(buttonRef, setIsButtonVisible);

        return () => {
            cleanupHeading();
            cleanupLogos1();
            cleanupLogos2();
            cleanupButton();
        };
    }, []);

    return (
        <div className="w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Heading */}
            <div ref={headingRef} className="text-center mb-8 sm:mb-10 md:mb-12">
                <h1
                    className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide ${isHeadingVisible ? 'animate-fade-slide-up' : ''}`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    BE A <span className="text-white" style={{ fontFamily: 'Constantine' }}>BRAND AND GET FEATURED IN</span>
                </h1>
                <h2
                    className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-2 ${isHeadingVisible ? 'animate-fade-slide-up' : ''}`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    TOP BRANDED NEWS, TV, PR MEDIA
                </h2>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px] mt-4 mx-auto"
                />
            </div>

            {/* Logo Grid 1 */}
            <div ref={logosRef1} className="grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8">
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos1Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos1Visible ? '0.2s' : '0s' }}
                >
                    <img
                        src={ZeeNews}
                        alt="Zee News"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos1Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos1Visible ? '0.4s' : '0s' }}
                >
                    <img
                        src={AAjTak}
                        alt="Aaj Tak"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos1Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos1Visible ? '0.6s' : '0s' }}
                >
                    <img
                        src={CNBCnewsTV}
                        alt="CNBC"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
            </div>

            {/* Logo Grid 2 */}
            <div ref={logosRef2} className="grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12">
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos2Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos2Visible ? '0.2s' : '0s' }}
                >
                    <img
                        src={IndiaNews}
                        alt="India TV"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos2Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos2Visible ? '0.4s' : '0s' }}
                >
                    <img
                        src={NewsIndia}
                        alt="News 18 India"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos2Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos2Visible ? '0.6s' : '0s' }}
                >
                    <img
                        src={TimesNow}
                        alt="Times Now"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
                <div
                    className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${isLogos2Visible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: isLogos2Visible ? '0.8s' : '0s' }}
                >
                    <img
                        src={ABP}
                        alt="ABP"
                        className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
                    />
                </div>
            </div>

            {/* Button */}
            <div ref={buttonRef} className="flex items-center justify-center">
                <button
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 w-[200px] sm:w-[250px] md:w-[300px] rounded-full mb-4 sm:mb-5 bg-black text-white font-medium text-base sm:text-lg tracking-wide hover:scale-105 transition-transform duration-200 ${isButtonVisible ? 'animate-scale-up' : ''}`}
                >
                    <img src={NEWSchannelButton} alt="" className="absolute mt-[-10px]" />
                </button>
            </div>
        </div>
    );
};

export default MediaFeature;