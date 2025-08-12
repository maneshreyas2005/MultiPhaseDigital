import React, { useRef, useState, useEffect } from 'react';
import Blur from '../assets/Blur.jpg';
import ZeeNews from '../assets/NewsChannels/ZeeNews.png';
import ABP from '../assets/NewsChannels/ABP.png';
import IndiaNews from '../assets/NewsChannels/IndiaNews.png';
import NewsIndia from '../assets/NewsChannels/NewsIndiaa.png';
import TimesNow from '../assets/NewsChannels/TimesNow.png';
import CNBCnewsTV from '../assets/NewsChannels/CNBCnewsTV.png';
import AAjTak from '../assets/NewsChannels/AAjTak.png';
import vector6 from '../assets/vector6.png';

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
        <div className=" w-full  bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Heading */}
            <div ref={headingRef} className="text-center mb-8 sm:mb-10 md:mb-12">
                <h1
                    className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide ${isHeadingVisible ? 'animate-fade-slide-up' : ''
                        }`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    BE A <span className="text-white" style={{ fontFamily: 'Constantine' }}>BRAND AND GET FEATURED IN</span>
                </h1>
                <h2
                    className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-2 ${isHeadingVisible ? 'animate-fade-slide-up' : ''
                        }`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    TOP BRANDED NEWS, TV, PR MEDIA
                </h2>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px] mt-4 sm:mt-5 md:mt-6 mx-auto"
                />
            </div>

            {/* Logo Grid 1 */}
            <div ref={logosRef1} className="grid grid-cols-1  [@media(max-width:920px)]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8">
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={ZeeNews}
                        alt="Zee News"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos1Visible ? 'animate-slide-in-left' : ''
                            }`}
                        style={{ animationDelay: isLogos1Visible ? '0.2s' : '0s' }}
                    />
                </div>
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={AAjTak}
                        alt="Aaj Tak"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos1Visible ? 'animate-slide-in-left' : ''
                            }`}
                        style={{ animationDelay: isLogos1Visible ? '0.4s' : '0s' }}
                    />
                </div>
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={CNBCnewsTV}
                        alt="CNBC"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos1Visible ? 'animate-slide-in-left' : ''
                            }`}
                        style={{ animationDelay: isLogos1Visible ? '0.6s' : '0s' }}
                    />
                </div>
            </div>

            {/* Logo Grid 2 */}
            <div ref={logosRef2} className="grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2  md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12">
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={IndiaNews}
                        alt="India TV"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
                            }`}
                        style={{ animationDelay: isLogos2Visible ? '0.2s' : '0s' }}
                    />
                </div>
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={NewsIndia}
                        alt="News 18 India"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
                            }`}
                        style={{ animationDelay: isLogos2Visible ? '0.4s' : '0s' }}
                    />
                </div>
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={TimesNow}
                        alt="Times Now"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
                            }`}
                        style={{ animationDelay: isLogos2Visible ? '0.6s' : '0s' }}
                    />
                </div>
                <div className="bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto">
                    <img
                        src={ABP}
                        alt="ABP"
                        className={`object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
                            }`}
                        style={{ animationDelay: isLogos2Visible ? '0.8s' : '0s' }}
                    />
                </div>
            </div>

            {/* Button */}
            <div ref={buttonRef} className="flex items-center justify-center">
                <button
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 w-[200px] sm:w-[250px] md:w-[300px] rounded-full mb-4 sm:mb-5 bg-black text-white font-medium text-base sm:text-lg tracking-wide hover:scale-105 transition-transform duration-200 ${isButtonVisible ? 'animate-scale-up' : ''
                        }`}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1B192E] via-[#9116E7] to-[#FF738B] p-[2px]">
                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                            <span className="text-gray-200">+20 NEWS CHANNELS</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default MediaFeature;

// import React, { useRef, useState, useEffect } from 'react';
// import Blur from '../assets/Blur.jpg';
// import ZeeNews from '../assets/NewsChannels/ZeeNews.png';
// import ABP from '../assets/NewsChannels/ABP.png';
// import IndiaNews from '../assets/NewsChannels/IndiaNews.png';
// import NewsIndia from '../assets/NewsChannels/NewsIndiaa.png';
// import TimesNow from '../assets/NewsChannels/TimesNow.png';
// import CNBCnewsTV from '../assets/NewsChannels/CNBCnewsTV.png';
// import AAjTak from '../assets/NewsChannels/AAjTak.png';
// import vector6 from '../assets/vector6.png';

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
//         <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24">
//             {/* Heading */}
//             <div ref={headingRef} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-6xl">
//                 <h1
//                     className={`text-white/40 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-wide leading-tight ${isHeadingVisible ? 'animate-fade-slide-up' : ''
//                         }`}
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     BE A <span className="text-white" style={{ fontFamily: 'Constantine' }}>BRAND AND GET FEATURED IN</span>
//                 </h1>
//                 <h2
//                     className={`text-white/40 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-wide mt-2 sm:mt-3 md:mt-4 leading-tight ${isHeadingVisible ? 'animate-fade-slide-up' : ''
//                         }`}
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     TOP BRANDED NEWS, TV, PR MEDIA
//                 </h2>
//                 <img
//                     src={vector6}
//                     alt="Decorative line"
//                     className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px] mt-4 sm:mt-6 md:mt-8 mx-auto"
//                 />
//             </div>

//             {/* Logo Grid 1 - Top Row */}
//             <div ref={logosRef1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-7xl w-full">
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <img
//                         src={ZeeNews}
//                         alt="Zee News"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos1Visible ? 'animate-slide-in-left' : ''
//                             }`}
//                         style={{ animationDelay: isLogos1Visible ? '0.2s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <img
//                         src={AAjTak}
//                         alt="Aaj Tak"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos1Visible ? 'animate-slide-in-left' : ''
//                             }`}
//                         style={{ animationDelay: isLogos1Visible ? '0.4s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
//                     <img
//                         src={CNBCnewsTV}
//                         alt="CNBC"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos1Visible ? 'animate-slide-in-left' : ''
//                             }`}
//                         style={{ animationDelay: isLogos1Visible ? '0.6s' : '0s' }}
//                     />
//                 </div>
//             </div>

//             {/* Logo Grid 2 - Bottom Row */}
//             <div ref={logosRef2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-7xl w-full">
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <img
//                         src={IndiaNews}
//                         alt="India TV"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.2s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <img
//                         src={NewsIndia}
//                         alt="News 18 India"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.4s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <img
//                         src={TimesNow}
//                         alt="Times Now"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.6s' : '0s' }}
//                     />
//                 </div>
//                 <div className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-[110px] sm:h-[125px] md:h-[140px] lg:h-[155px] xl:h-[170px] 2xl:h-[185px] flex items-center justify-center rounded-xl sm:rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
//                     <img
//                         src={ABP}
//                         alt="ABP"
//                         className={`object-contain w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] 2xl:h-[130px] ${isLogos2Visible ? 'animate-slide-in-right' : ''
//                             }`}
//                         style={{ animationDelay: isLogos2Visible ? '0.8s' : '0s' }}
//                     />
//                 </div>
//             </div>

//             {/* Button */}
//             <div ref={buttonRef} className="flex items-center justify-center w-full">
//                 <button
//                     className={`relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[320px] rounded-full bg-black text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl tracking-wide hover:scale-105 transition-all duration-300 ${isButtonVisible ? 'animate-scale-up' : ''
//                         }`}
//                 >
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1B192E] via-[#9116E7] to-[#FF738B] p-[2px]">
//                         <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
//                             <span className="text-gray-200 font-medium">+20 NEWS CHANNELS</span>
//                         </div>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MediaFeature;