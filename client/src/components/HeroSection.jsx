// import React from 'react';
// import BackGroundVideo from '../assets/BackGroundVideo.webm';
// import ZeeMusic from '../assets/ZeeMusicCo 1.png';
// import JioStudios from '../assets/JioStudios.png';
// import OneLogo from '../assets/OneLogo.png';
// import MobilePremierLeague from '../assets/Mobile Premier League_logo 2.png';
// import PVRCINE from '../assets/PVRCINE.png';
// import MyGov from '../assets/myGov.png';
// import TSeries from '../assets/TSeries.png';
// import TRS from '../assets/TRS.png';
// import MensCricket from '../assets/MensCricketWorldCup.png';
// import IPL from '../assets/IPL.png';
// import StarSports from '../assets/StarSports.png';
// import RigiLogo from '../assets/RigiLogo.png';


// const HeroSection = () => {
//     const logos = [
//         ZeeMusic,
//         JioStudios,
//         OneLogo,
//         MobilePremierLeague,
//         PVRCINE,
//         MyGov,
//         TSeries,
//         TRS,
//         MensCricket,
//         IPL,
//         StarSports,
//         RigiLogo,
//     ];
//     return (
//         <div>
//             <div className="relative flex flex-col items-center justify-center text-white px-4 text-center ">

//                 {/* Top Subtitle */}
//                 <div className="mt-20 sm:mt-20">
//                     <p className="font-light text-lg sm:text-base md:text-xl text-white/60 capitalize">
//                         We Have Profile Client Base
//                     </p>
//                 </div>

//                 {/* Main Title */}
//                 <div className="flex flex-col mt-10">
//                     <p
//                         className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-[100px]"
//                         style={{ fontFamily: "'Libertinus Serif', serif", fontWeight: 400 }}
//                     >
//                         ASIA'S LEADING
//                     </p>
//                     <p
//                         className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] leading-tight"
//                         style={{ fontFamily: "'Libertinus Serif', serif", fontWeight: 400 }}
//                     >
//                         PR COMPANY
//                     </p>
//                 </div>

//                 {/* Bottom Subtitle */}
//                 <div className="mt-16 sm:mt-40 ">
//                     <p className="font-light text-sm sm:text-lg text-white/60 capitalize">
//                         Worked with
//                     </p>
//                 </div>
//             </div>
//             <div className="overflow-hidden bg-transparent w-full py-6">
//                 {/* This wrapper will pause animation on hover */}
//                 <div className="group relative">
//                     <div className="flex w-max animate-scroll space-x-12 group-hover:animate-scroll-pause">
//                         {logos.concat(logos).map((logo, index) => (
//                             <img
//                                 key={index}
//                                 src={logo}
//                                 alt={`logo-${index}`}
//                                 className={`h-10 sm:h-14 object-contain grayscale opacity-70 transition-transform duration-300 hover:scale-125 hover:opacity-100 cursor-pointer
//                             ${[MensCricket, IPL].includes(logo) ? 'w-[80px]' : 'w-auto'}`}
//                                 onClick={() => alert(`You clicked logo #${index + 1}`)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default HeroSection;

import ZeeMusic from '../assets/ZeeMusicCom1.png';
import JioStudios from '../assets/JioStudios.png';
import OneLogo from '../assets/OneLogo.png';
import MobilePremierLeague from '../assets/Mobile Premier League_logo 2.png';
import PVRCINE from '../assets/PVRCINE.png';
import MyGov from '../assets/myGov.png';
import TSeries from '../assets/TSeries.png';
import TRS from '../assets/TRS.png';
import MensCricket from '../assets/MensCricketWorldCup.png';
import IPL from '../assets/IPL.png';
import StarSports from '../assets/StarSports.png';
import RigiLogo from '../assets/RigiLogo2.png';
import vector4 from '../assets/Vector4.png';
import BackGroundVideo from '../assets/BackGroundVideo.webm';
import BackGroundVideo1 from '../assets/AsiabgVideo.mp4';
import G20IndiaLogo from '../assets/G20IndiaLogo.png';
import FiatPayLogo2 from '../assets/FiatPayLogo2.png';
import PatanjaliLogo from '../assets/PatanjaliLogo.png';
import RajasthanRoyalsLogo from '../assets/RajasthanRoyalsLogo.png';
import MumbaiIndians   from '../assets/MumbaiIndians.png';
import MaddockLogo from '../assets/MaddockLogo.png';
import Navbar from './Navbar';

const HeroSection = () => {
    const logos = [
        ZeeMusic,
        JioStudios,
        OneLogo,
        MobilePremierLeague,
        PVRCINE,
        MyGov,
        TSeries,
        TRS,
        MensCricket,
        IPL,
        StarSports,
        RigiLogo,
        G20IndiaLogo,
        MaddockLogo,
        MumbaiIndians,
        RajasthanRoyalsLogo,
        PatanjaliLogo,
        FiatPayLogo2
    ];

    return (
        <div id="homePage" className=" flex flex-col">
            <video
                autoPlay
                muted
                playsInline
                className={`absolute max-[500px]:hidden inset-0 w-full object-cover opacity-0 animate-fadeIn   max-[440px]:mt-10 max-[376px]:mt-[40px] `}
            >
                <source src={BackGroundVideo1} type="video/mp4" />
            </video>
            <Navbar className="w-full" />
            {/* Hero Content Section */}
            <div className="relative flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 text-center flex-1">
                {/* Top Subtitle */}
                <div className="mt-4 max-[500px]:mt-[180px] sm:mt-12 md:mt-19 lg:mt-25 xl:mt-40 ">
                    <p className="font-light sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/60 capitalize tracking-wide  lg:mb-[6px]">
                        We Have Profile Client Base
                    </p>
                </div>

                {/* Main Title */}
                <div className="flex flex-col  sm:space-y-4">
                    <h1
                        className="font-bold text-4xl sm:text-[3.6rem] md:text-6xl lg:text-[5.2rem] xl:text-9xl "
                        style={{ fontFamily: 'Constantine', fontWeight: 570 }}
                    >
                        ASIA'S LEADING
                    </h1>
                    <h2
                        className="font-bold mt-[-0.7rem] sm:mt-[-2rem] md:mt-[-2rem] lg:mt-[-2rem] xl:mt-[-2rem] text-[2.5rem] sm:text-[4rem] md:text-[4.3rem] lg:text-[6rem] xl:text-[9rem]"
                        style={{ fontFamily: 'Constantine', fontWeight: 570 }}
                    >
                        PR COMPANY
                    </h2>
                </div>

                {/* Bottom Subtitle */}
                <div className="mt-4 max-[500px]:mt-[180px] sm:mt-16 md:mt-18 lg:mt-20 xl:mt-40">
                    <p className="font-light text-sm sm:text-sm md:text-base lg:text-lg text-white/60 capitalize tracking-wide px-2">
                        Worked with
                    </p>
                </div>
            </div>

            {/* Logo Carousel Section */}
            <div className="overflow-hidden bg-transparent w-full py-3 sm:py-2 md:py-3 max-[500px]:mt-[10px] mt-auto">
                <div className="group relative">
                    <div className="flex w-max animate-scroll space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 group-hover:animate-scroll-pause">
                        {logos.concat(logos).map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`logo-${index}`}
                                className={`h-9 sm:h-8 md:h-10 lg:h-12 xl:h-14 object-contain grayscale opacity-70 transition-all duration-300 hover:scale-110 sm:hover:scale-125 hover:opacity-100 hover:grayscale-0 cursor-pointer
                                ${[MensCricket, IPL].includes(logo) ? 'w-[50px] sm:w-[60px] md:w-[70px] lg:w-[60px]' : 'w-auto'}`}
                                onClick={() => alert(`You clicked logo #${index + 1}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <img src={vector4} alt="" className='relative w-full' />
            </div>
        </div>
    );
};

export default HeroSection;