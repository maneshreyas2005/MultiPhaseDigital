// // import React from 'react';
// // import vector6 from '../assets/vector6.png';
// // import CountUp from 'react-countup';
// // import { useRef, useState, useEffect } from 'react';
// // import Pandav from '../assets/Pandav.png';

// // const PartnersPage = () => {
// //     const statsRef = useRef(null);
// //     const headingRef = useRef(null);
// //     const imagesRef = useRef(null);
// //     const [isStatsVisible, setIsStatsVisible] = useState(false);
// //     const [isHeadingVisible, setIsHeadingVisible] = useState(false);
// //     const [isImagesVisible, setIsImagesVisible] = useState(false);

// //     useEffect(() => {
// //         const createObserver = (ref, setVisible) => {
// //             const observer = new IntersectionObserver(
// //                 ([entry]) => {
// //                     if (entry.isIntersecting) {
// //                         setVisible(true);
// //                         observer.disconnect();
// //                     }
// //                 },
// //                 { threshold: 0.3 }
// //             );

// //             if (ref.current) {
// //                 observer.observe(ref.current);
// //             }

// //             return () => observer.disconnect();
// //         };

// //         const cleanupStats = createObserver(statsRef, setIsStatsVisible);
// //         const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);
// //         const cleanupImages = createObserver(imagesRef, setIsImagesVisible);

// //         return () => {
// //             cleanupStats();
// //             cleanupHeading();
// //             cleanupImages();
// //         };
// //     }, []);

// //     return (
// //         <div className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6">
// //             <div ref={headingRef} className="w-full max-w-[556.07px] text-center mb-8 sm:mb-10 md:mb-12">
// //                 <h1
// //                     className={`text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide ${isHeadingVisible ? 'animate-fade-slide-up' : ''
// //                         }`}
// //                     style={{ fontFamily: 'Constantine' }}
// //                 >
// //                     <span className="text-white" style={{ fontFamily: 'Constantine' }}>
// //                         OUR
// //                     </span>
// //                 </h1>
// //                 <h2
// //                     className={`text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-2 ${isHeadingVisible ? 'animate-fade-slide-up' : ''
// //                         }`}
// //                     style={{ fontFamily: 'Constantine' }}
// //                 >
// //                     PARTNERS
// //                 </h2>
// //                 <img
// //                     src={vector6}
// //                     alt="Decorative line"
// //                     className="w-[250px] sm:w-[300px] md:w-[339px] mt-4 sm:mt-5 md:mt-[20px] mx-auto md:ml-[4rem] lg:ml-[7rem] mb-4 sm:mb-5 md:mb-[20px]"
// //                 />
// //                 <span
// //                     className={`font-light text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[100%] text-white/80 tracking-normal capitalize w-full max-w-[448px] h-auto md:h-[76px] mx-auto ${isHeadingVisible ? 'animate-fade-slide-up' : ''
// //                         }`}
// //                 >
// //                     We Favour Increasing The <br /> Visibility Of The Brands
// //                 </span>
// //             </div>
// //             <div
// //                 ref={statsRef}
// //                 className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-[680px] mt-6 sm:mt-8 md:mt-[50px] justify-center items-center bg-black px-4 sm:px-6 overflow-hidden z-[0]"
// //             >
// //                 <div
// //                     className={`group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border transform transition-transform z-[0] duration-500 hover:scale-105 ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'
// //                         }`}
// //                     style={{ animationDelay: '0.4s' }}
// //                 >
// //                     <div className="rounded-3xl bg-black w-[200px] sm:w-[240px] md:w-[280.91px] h-[200px] sm:h-[240px] md:h-[280.91px] flex flex-col justify-center items-center text-white min-w-[150px] text-center">
// //                         <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
// //                             {isStatsVisible ? <CountUp end={7} duration={3} suffix="K+" /> : '0'}
// //                         </h2>
// //                         <p className="text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 md:mt-[10px]">
// //                             PR works<br />Completed
// //                         </p>
// //                     </div>
// //                 </div>
// //                 <div
// //                     className={`group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border z-[0] transform transition-transform duration-500 hover:scale-105 ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'
// //                         }`}
// //                     style={{ animationDelay: '0.2s' }}
// //                 >
// //                     <div className="rounded-3xl bg-black w-[200px] sm:w-[240px] md:w-[280.91px] h-[200px] sm:h-[240px] md:h-[280.91px] flex flex-col justify-center items-center text-white min-w-[150px] text-center">
// //                         <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
// //                             {isStatsVisible ? <CountUp end={800} duration={2} suffix="+" /> : '0'}
// //                         </h2>
// //                         <p className="text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 md:mt-[10px]">
// //                             Customers<br />Worldwide
// //                         </p>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div
// //                 ref={imagesRef}
// //                 className={`group relative inline-block rounded-3xl p-[2px] sm:p-[3.58px] z-[1] transform transition-transform duration-500 hover:scale-105 ${isImagesVisible ? 'animate-slide-up' : 'opacity-0'
// //                     }`}
// //                 style={{ animationDelay: '0.2s' }}
// //             >
// //                 <img
// //                     src={Pandav}
// //                     alt="Pandav Partner"
// //                     className="relative w-[640px] sm:w-[960px] md:w-[1279.5px] h-[305px] sm:h-[458px] md:h-[610.58px] z-[1] mt-[-185px] sm:mt-[-278px] md:mt-[-370px] ml-4 sm:ml-6 md:ml-[35px]"
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default PartnersPage;

import React, { useRef, useState, useEffect } from 'react';
import vector6 from '../assets/Vector6.png';
import CountUp from 'react-countup';
import Pandav from '../assets/Pandav.png';

const PartnersPage = () => {
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

    return (
        <div className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6">

            {/* Heading */}
            <div
                ref={headingRef}
                className="w-full max-w-[556.07px] text-center mb-8 sm:mb-10 md:mb-12"
            >
                <h1
                    className={`text-white/40 text-2xl sm:text-3xl md:text-4xl [@media(min-width:1190px)]:text-[2.5rem] lg:text-5xl font-semibold tracking-wide ${isHeadingVisible ? 'animate-fade-slide-up' : ''
                        }`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                        OUR
                    </span>
                </h1>
                <h2
                    className={`text-white/40 text-2xl [@media(min-width:1190px)]:text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-2 ${isHeadingVisible ? 'animate-fade-slide-up' : ''
                        }`}
                    style={{ fontFamily: 'Constantine' }}
                >
                    PARTNERS
                </h2>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[200px] sm:w-[240px]  xl:w-[339px] [@media(min-width:1190px)]:w-[310px] mt-4 sm:mt-5 md:mt-[20px] mx-auto xl:ml-[8rem] sm:ml-[10rem] mb-4 sm:mb-5 md:mb-[20px]"
                />
                <span
                    className={`font-light text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[100%] text-white/80 tracking-normal capitalize w-full max-w-[448px] h-auto md:h-[76px] mx-auto ${isHeadingVisible ? 'animate-fade-slide-up' : ''
                        }`}
                >
                    We Favour Increasing The <br /> Visibility Of The Brands
                </span>
            </div>

            {/* Stats */}
            <div
                ref={statsRef}
                className="
          flex flex-col md:flex-row justify-center items-center bg-black overflow-hidden z-[0]
          gap-4 sm:gap-6 md:gap-[200px] lg:gap-[590px] xl:gap-[640px]
          mt-6 sm:mt-8 md:mt-[50px]
        "
            >
                {/* Box 1 */}
                <div
                    className={`
            group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border
            transform transition-transform duration-500 hover:scale-105 z-[0]
            ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'}
            [@media(min-width:1304px)]:w-[280.91px] [@media(min-width:1304px)]:h-[280.91px]
            [@media(min-width:1164px)]:w-[240px] [@media(min-width:1164px)]:h-[240px]
           [@media(min-width:1190px)]:w-[260px] [@media(min-width:1190px)]:h-[260px]
            [@media(max-width:1023px)]:w-[260px] [@media(max-width:1023px)]:h-[260px]
            [@media(max-width:650px)]:w-[220px] [@media(max-width:650px)]:h-[220px]
            w-[200px] h-[200px]
          `}
                    style={{ animationDelay: '0.4s' }}
                >
                    <div className="rounded-3xl bg-black flex flex-col justify-center items-center text-white text-center w-full h-full">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            {isStatsVisible ? <CountUp end={7} duration={3} suffix="K+" /> : '0'}
                        </h2>
                        <p className="text-lg sm:text-xl md:text-1xl mt-2">PR works<br />Completed</p>
                    </div>
                </div>

                {/* Box 2 */}
                <div
                    className={`
            group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border
            transform transition-transform duration-500 hover:scale-105 z-[0]
            ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'}
            [@media(min-width:1304px)]:w-[280.91px] [@media(min-width:1304px)]:h-[280.91px]
           [@media(min-width:1190px)]:w-[260px] [@media(min-width:1190px)]:h-[260px]
            [@media(min-width:1090px)]:w-[240px] [@media(min-width:1090px)]:h-[240px]
            [@media(max-width:1023px)]:w-[260px] [@media(max-width:1023px)]:h-[260px]
            [@media(max-width:650px)]:w-[220px] [@media(max-width:650px)]:h-[220px]
            
            w-[200px] h-[200px]
          `}
                    style={{ animationDelay: '0.2s' }}
                >
                    <div className="rounded-3xl bg-black flex flex-col justify-center items-center text-white text-center w-full h-full">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            {isStatsVisible ? <CountUp end={800} duration={2} suffix="+" /> : '0'}
                        </h2>
                        <p className="text-lg sm:text-xl md:text-1xl mt-2">Customers<br />Worldwide</p>
                    </div>
                </div>
            </div>

            {/* Partner Image */}
            <div
                ref={imagesRef}
                className={`group relative inline-block rounded-3xl md:ml-[30px]  p-[2px] sm:p-[3.58px] z-[1] transform transition-transform duration-500 hover:scale-105 ${isImagesVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                style={{ animationDelay: '0.2s' }}
            >
                <img
                    src={Pandav}
                    alt="Pandav Partner"
                    className="
            [@media(min-width:1304px)]:w-[1279.5px]
           [@media(min-width:1190px)]:w-[1187px]
            [@media(min-width:1024px)]:w-[940px]
            [@media(max-width:1023px)]:w-[990px]
            [@media(max-width:500px)]:ml-[17px]
            w-[90%]
            h-auto
            [@media(min-width:1304px)]:mt-[-370px]
           [@media(min-width:1190px)]:mt-[-335px] 
            [@media(min-width:1024px)]:mt-[-300px]
            
            mx-auto
          "
                />
            </div>
        </div>
    );
};

export default PartnersPage;

// import React, { useRef, useState, useEffect } from 'react';
// import vector6 from '../assets/vector6.png';
// import CountUp from 'react-countup';
// import Pandav from '../assets/Pandav.png';

// const PartnersPage = () => {
//     const statsRef = useRef(null);
//     const headingRef = useRef(null);
//     const imagesRef = useRef(null);
//     const [isStatsVisible, setIsStatsVisible] = useState(false);
//     const [isHeadingVisible, setIsHeadingVisible] = useState(false);
//     const [isImagesVisible, setIsImagesVisible] = useState(false);

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

//             if (ref.current) {
//                 observer.observe(ref.current);
//             }

//             return () => observer.disconnect();
//         };

//         const cleanupStats = createObserver(statsRef, setIsStatsVisible);
//         const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);
//         const cleanupImages = createObserver(imagesRef, setIsImagesVisible);

//         return () => {
//             cleanupStats();
//             cleanupHeading();
//             cleanupImages();
//         };
//     }, []);

//     return (
//         <div className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6">

//             {/* Heading */}
//             <div
//                 ref={headingRef}
//                 className="w-full max-w-[556.07px] text-center mb-8 sm:mb-10 md:mb-12"
//             >
//                 <h1
//                     className={`text-white/40 
//             text-2xl sm:text-3xl md:text-4xl 
//             [@media(min-width:1190px)]:text-[2.5rem] 
//             [@media(min-width:1304px)]:text-5xl
//             font-semibold tracking-wide
//             ${isHeadingVisible ? 'animate-fade-slide-up' : ''}
//           `}
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     <span className="text-white">OUR</span>
//                 </h1>
//                 <h2
//                     className={`text-white/40 
//             text-2xl sm:text-3xl md:text-4xl 
//             [@media(min-width:1190px)]:text-[2.5rem] 
//             [@media(min-width:1304px)]:text-5xl
//             font-semibold tracking-wide mt-2
//             ${isHeadingVisible ? 'animate-fade-slide-up' : ''}
//           `}
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     PARTNERS
//                 </h2>
//                 <img
//                     src={vector6}
//                     alt="Decorative line"
//                     className="
//             w-[250px] sm:w-[300px] md:w-[280px]
//             [@media(min-width:1190px)]:w-[310px]
//             [@media(min-width:1304px)]:w-[339px]
//             mt-4 sm:mt-5 md:mt-[20px] mx-auto
//             md:ml-[4rem] lg:ml-[7rem] mb-4 sm:mb-5 md:mb-[20px]
//           "
//                 />
//                 <span
//                     className={`font-light 
//             text-xl sm:text-2xl md:text-[28px] 
//             [@media(min-width:1190px)]:text-[30px] 
//             [@media(min-width:1304px)]:text-[32px]
//             leading-tight text-white/80 tracking-normal capitalize 
//             w-full max-w-[448px] h-auto md:h-[76px] mx-auto
//             ${isHeadingVisible ? 'animate-fade-slide-up' : ''}
//           `}
//                 >
//                     We Favour Increasing The <br /> Visibility Of The Brands
//                 </span>
//             </div>

//             {/* Stats */}
//             <div
//                 ref={statsRef}
//                 className="
//           flex flex-col md:flex-row justify-center items-center bg-black overflow-hidden z-[0]
//           gap-4 sm:gap-6 md:gap-[100px] [@media(min-width:1304px)]:gap-[200px] [@media(min-width:1600px)]:gap-[680px]
//           mt-6 sm:mt-8 md:mt-[50px]
//         "
//             >
//                 {/* Box 1 */}
//                 <div
//                     className={`
//             group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border 
//             transform transition-transform duration-500 hover:scale-105 z-[0]
//             ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'}
//             [@media(min-width:1304px)]:w-[280.91px] [@media(min-width:1304px)]:h-[280.91px]
//             [@media(min-width:1190px)]:w-[260px] [@media(min-width:1190px)]:h-[260px]
//             [@media(min-width:1024px)]:w-[230px] [@media(min-width:1024px)]:h-[230px]
//             w-[200px] h-[200px]
//           `}
//                     style={{ animationDelay: '0.4s' }}
//                 >
//                     <div className="rounded-3xl bg-black flex flex-col justify-center items-center text-white text-center w-full h-full">
//                         <h2 className="
//               text-4xl sm:text-5xl md:text-6xl
//               [@media(min-width:1190px)]:text-[3.2rem]
//               [@media(min-width:1304px)]:text-6xl
//               font-bold
//             ">
//                             {isStatsVisible ? <CountUp end={7} duration={3} suffix="K+" /> : '0'}
//                         </h2>
//                         <p className="text-lg sm:text-xl md:text-2xl mt-2">PR works<br />Completed</p>
//                     </div>
//                 </div>

//                 {/* Box 2 */}
//                 <div
//                     className={`
//             group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border 
//             transform transition-transform duration-500 hover:scale-105 z-[0]
//             ${isStatsVisible ? 'animate-slide-in' : 'opacity-0'}
//             [@media(min-width:1304px)]:w-[280.91px] [@media(min-width:1304px)]:h-[280.91px]
//             [@media(min-width:1190px)]:w-[260px] [@media(min-width:1190px)]:h-[260px]
//             [@media(min-width:1024px)]:w-[230px] [@media(min-width:1024px)]:h-[230px]
//             w-[200px] h-[200px]
//           `}
//                     style={{ animationDelay: '0.2s' }}
//                 >
//                     <div className="rounded-3xl bg-black flex flex-col justify-center items-center text-white text-center w-full h-full">
//                         <h2 className="
//               text-4xl sm:text-5xl md:text-6xl
//               [@media(min-width:1190px)]:text-[3.2rem]
//               [@media(min-width:1304px)]:text-6xl
//               font-bold
//             ">
//                             {isStatsVisible ? <CountUp end={800} duration={2} suffix="+" /> : '0'}
//                         </h2>
//                         <p className="text-lg sm:text-xl md:text-2xl mt-2">Customers<br />Worldwide</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Partner Image */}
//             <div
//                 ref={imagesRef}
//                 className={`group relative inline-block rounded-3xl p-[2px] sm:p-[3.58px] z-[1] transform transition-transform duration-500 hover:scale-105 ${isImagesVisible ? 'animate-slide-up' : 'opacity-0'
//                     }`}
//                 style={{ animationDelay: '0.2s' }}
//             >
//                 <img
//                     src={Pandav}
//                     alt="Pandav Partner"
//                     className="
//             [@media(min-width:1304px)]:w-[1279.5px]
//             [@media(min-width:1190px)]:w-[1050px]
//             [@media(min-width:1024px)]:w-[900px]
//             w-[90%]
//             h-auto
//             [@media(min-width:1304px)]:mt-[-370px]
//             [@media(min-width:1190px)]:mt-[-340px]
//             [@media(min-width:1024px)]:mt-[-300px]
//             mt-[-185px]
//             mx-auto
//           "
//                 />
//             </div>
//         </div>
//     );
// };

// export default PartnersPage;
