// import React from 'react';
// import vector6 from '../assets/Vector6.png';
// import { useEffect, useRef, useState } from 'react';
// import CountUp from 'react-countup';
// import useInView from './UseInView';

// const Locations = () => {
//     const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
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
//         <div
//             ref={sectionRef}
//             className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6"
//         >
//             <style>
//                 {`
//                     .backface-hidden {
//                         backface-visibility: hidden;
//                     }
//                     .transform-style-3d {
//                         transform-style: preserve-3d;
//                     }
//                     .rotate-y-180 {
//                         transform: rotateY(180deg);
//                     }
//                 `}
//             </style>
//             <div
//                 className={`w-full max-w-[556.07px] text-center mb-8 sm:mb-10 md:mb-12 ${sectionInView ? 'animate-slide-up' : 'opacity-0'}`}
//                 style={{ animationDelay: '0s', animationFillMode: 'both' }}
//             >
//                 <h1
//                     className="text-white/40 text-2xl sm:text-3xl md:text-4xl [@media(min-width:1190px)]:text-[2.5rem] lg:text-5xl font-semibold tracking-wide"
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     <span className="text-white/40" style={{ fontFamily: 'Constantine' }}>
//                         OUR
//                     </span>
//                 </h1>
//                 <h2
//                     className="text-white text-2xl [@media(min-width:1190px)]:text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-2"
//                     style={{ fontFamily: 'Constantine', animationDelay: '0.05s', animationFillMode: 'both' }}
//                 >
//                     LOCATIONS
//                 </h2>
//                 <img
//                     src={vector6}
//                     alt="Decorative line"
//                     className="w-[200px] sm:w-[240px] xl:w-[339px] [@media(min-width:1190px)]:w-[310px] mt-4 sm:mt-5 md:mt-[20px] mx-auto xl:ml-[8rem] sm:ml-[10rem] mb-4 sm:mb-5 md:mb-[20px]"
//                 />
//             </div>
//             <div
//                 ref={statsRef}
//                 className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[80px] justify-center items-center bg-black px-2 sm:px-4 py-4 sm:py-6 overflow-hidden`}
//             >
//                 {[
//                     { label: "Mumbai", address: "123 ABC Street, Mumbai, MH 400001" },
//                     { label: "Noida", address: "456 XYZ Road, Noida, UP 201301" }
//                 ].map((stat, i) => (
//                     <div
//                         key={i}
//                         className={`group relative inline-block rounded-[1rem] min-[500px]:rounded-[3rem] p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 ${isStatsVisible ? 'animate-slide-up' : 'opacity-0'}`}
//                         style={{
//                             animationDelay: `${i * 0.2}s`,
//                             perspective: '1000px'
//                         }}
//                     >
//                         <div className="relative w-[180px] sm:w-[180px] md:w-[200px] lg:w-[250px] xl:w-[280px] 2xl:w-[300px] aspect-square transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
//                             <div className="absolute inset-0 rounded-[1rem] min-[500px]:rounded-[3rem] bg-black flex flex-col justify-center items-center text-white text-center backface-hidden" style={{
//                                 backgroundColor: '#000000',
//                                 boxShadow: '0px 3px 15px 0px #FFFFFF26 inset'
//                             }}>
//                                 <p className="font-bold text-md xs:text-sm sm:text-base md:text-lg lg:text-3xl xl:text-3xl whitespace-pre-line mt-1 sm:mt-2" style={{ fontFamily: 'Constantine' }}>
//                                     {stat.label}
//                                 </p>
//                             </div>
//                             <div className="absolute inset-0 rounded-[1rem] min-[500px]:rounded-[3rem] bg-black flex flex-col justify-center items-center text-white text-center backface-hidden rotate-y-180" style={{
//                                 backgroundColor: '#000000',
//                                 boxShadow: '0px 3px 15px 0px #FFFFFF26 inset'
//                             }}>
//                                 <p className="font-light text-sm xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-xl whitespace-pre-line px-4" style={{ fontFamily: 'Constantine' }}>
//                                     {stat.address}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div
//                 ref={statsRef}
//                 className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[80px] justify-center items-center bg-black px-2 sm:px-4 py-4 sm:py-6 overflow-hidden mb-4 sm:mb-6 lg:mb-8`}
//             >
//                 {[
//                     { label: "Jaipur", address: "789 PQR Avenue, Jaipur, RJ 302001" },
//                     { label: "Chandigarh", address: "101 DEF Lane, Chandigarh, CH 160017" },
//                     { label: "Surat", address: "321 GHI Road, Surat, GJ 395007" }
//                 ].map((stat, i) => (
//                     <div
//                         key={i}
//                         className={`group relative inline-block rounded-[1rem] min-[500px]:rounded-[3rem] p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 ${isStatsVisible ? 'animate-slide-up' : 'opacity-0'}`}
//                         style={{
//                             animationDelay: `${i * 0.2}s`,
//                             perspective: '1000px'
//                         }}
//                     >
//                         <div className="relative w-[180px] sm:w-[180px] md:w-[200px] lg:w-[250px] xl:w-[280px] 2xl:w-[300px] aspect-square transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
//                             <div className="absolute inset-0 rounded-[1rem] min-[500px]:rounded-[3rem] bg-black flex flex-col justify-center items-center text-white text-center backface-hidden" style={{
//                                 backgroundColor: '#000000',
//                                 boxShadow: '0px 3px 15px 0px #FFFFFF26 inset'
//                             }}>
//                                 <p className="font-light text-md xs:text-sm sm:text-base md:text-lg lg:text-3xl xl:text-3xl whitespace-pre-line mt-1 sm:mt-2" style={{ fontFamily: 'Constantine' }}>
//                                     {stat.label}
//                                 </p>
//                             </div>
//                             <div className="absolute inset-0 rounded-[1rem] min-[500px]:rounded-[3rem] bg-black flex flex-col justify-center items-center text-white text-center backface-hidden rotate-y-180" style={{
//                                 backgroundColor: '#000000',
//                                 boxShadow: '0px 3px 15px 0px #FFFFFF26 inset'
//                             }}>
//                                 <p className="font-light text-sm xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-xl whitespace-pre-line px-4" style={{ fontFamily: 'Constantine' }}>
//                                     {stat.address}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Locations;

import React, { useEffect, useRef, useState } from "react";
import vector6 from "../assets/Vector6.png";
import useInView from "./UseInView";

const Locations = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const statsRef = useRef(null);
  const headingRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => observer.disconnect();
    };

    const cleanupStats = createObserver(statsRef, setIsStatsVisible);
    const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);

    return () => {
      cleanupStats();
      cleanupHeading();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-black grid grid-cols-1 items-center justify-items-center p-4 sm:p-6"
    >
      {/* Heading Section */}
      <div
        ref={headingRef}
        className={`w-full max-w-[556.07px] text-center mb-8 sm:mb-10 md:mb-12 ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0s", animationFillMode: "both" }}
      >
        <h1
          className="text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.75rem] font-semibold tracking-wide"
          style={{ fontFamily: "Constantine" }}
        >
          <span className="text-white/40">OUR</span>
        </h1>
        <h2
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.75rem] font-semibold tracking-wide mt-2"
          style={{
            fontFamily: "Constantine",
            animationDelay: "0.05s",
            animationFillMode: "both",
          }}
        >
          LOCATIONS
        </h2>
        <img
          src={vector6}
          alt="Decorative line"
          className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] xl:w-[339px] mt-4 sm:mt-5 md:mt-6 mx-auto mb-4 sm:mb-5 md:mb-6"
        />
      </div>

      {/* Locations Grid - First Row */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center w-full max-w-[1200px] px-2 sm:px-4 py-4 sm:py-6 mb-4 sm:mb-6 lg:mb-8`}
      >
        {[{ label: "Mumbai" }, { label: "Bengaluru" }, { label: "Noida" }].map(
          (stat, i) => (
            <div
              key={i}
              className={`group relative inline-block rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 ${isStatsVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div
                className="rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] bg-black w-[160px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-[230px] xl:w-[260px] aspect-square grid place-items-center text-white text-center"
                style={{
                  backgroundColor: "#000000",
                  boxShadow: "0px 3px 15px 0px #FFFFFF26 inset",
                }}
              >
                <p
                  className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl whitespace-pre-line px-4"
                  style={{ fontFamily: "Constantine" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Locations Grid - Second Row */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center w-full max-w-[1200px] px-2 sm:px-4 py-4 sm:py-6 mb-4 sm:mb-6 lg:mb-8`}
      >
        {[{ label: "Jaipur" }, { label: "Chandigarh" }, { label: "Surat" }].map(
          (stat, i) => (
            <div
              key={i}
              className={`group relative inline-block rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 ${isStatsVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div
                className="rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] bg-black w-[160px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-[230px] xl:w-[260px] aspect-square grid place-items-center text-white text-center"
                style={{
                  backgroundColor: "#000000",
                  boxShadow: "0px 3px 15px 0px #FFFFFF26 inset",
                }}
              >
                <p
                  className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl whitespace-pre-line px-4"
                  style={{ fontFamily: "Constantine" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Locations;
