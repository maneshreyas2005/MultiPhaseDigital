
// import React from 'react';
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

// const logos = [
//     ZeeMusic,
//     JioStudios,
//     OneLogo,
//     MobilePremierLeague,
//     PVRCINE,
//     MyGov,
//     TSeries,
//     TRS,
//     MensCricket,
//     IPL,
//     StarSports,
//     RigiLogo,
// ];

// const LogoScroller = () => {
//     return (
//         <div className="overflow-hidden bg-transparent w-full py-6">
//             {/* This wrapper will pause animation on hover */}
//             <div className="group relative">
//                 <div className="flex w-max animate-scroll space-x-12 group-hover:animate-scroll-pause">
//                     {logos.concat(logos).map((logo, index) => (
//                         <img
//                             key={index}
//                             src={logo}
//                             alt={`logo-${index}`}
//                             className={`h-10 sm:h-14 object-contain grayscale opacity-70 transition-transform duration-300 hover:scale-125 hover:opacity-100 cursor-pointer
//                 ${[MensCricket, IPL].includes(logo) ? 'w-[80px]' : 'w-auto'}`}
//                             onClick={() => alert(`You clicked logo #${index + 1}`)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LogoScroller;

import React from 'react';
import ZeeMusic from '../assets/ZeeMusicCo 1.png';
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
import RigiLogo from '../assets/RigiLogo.png';

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
];

const LogoScroller = () => {
    return (
        <div className="overflow-hidden bg-transparent w-full py-4 sm:py-6 md:py-8 lg:py-10">
            {/* This wrapper will pause animation on hover */}
            <div className="group relative">
                <div className="flex w-max animate-scroll space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 group-hover:animate-scroll-pause">
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`logo-${index}`}
                            className={`h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 object-contain grayscale opacity-60 sm:opacity-70 transition-all duration-300 hover:scale-110 sm:hover:scale-125 hover:opacity-100 hover:grayscale-0 cursor-pointer
                                ${[MensCricket, IPL].includes(logo)
                                    ? 'w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]'
                                    : 'w-auto'
                                }`}
                            onClick={() => alert(`You clicked logo #${index + 1}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoScroller;