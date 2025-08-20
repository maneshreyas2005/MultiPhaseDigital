
// import React from 'react';
// import vector6 from '../assets/vector6.png';
// import useInView from './UseInView'; // <-- path to hook

// const OurServicesPage = () => {
//     const services = [
//         { number: "01", title: "Website Development" },
//         { number: "02", title: "Digital PR" },
//         { number: "03", title: "Cinema AD" },
//         { number: "04", title: "Award Shows" },
//         { number: "05", title: "Magazines" },
//         { number: "06", title: "Newspaper PR" },
//         { number: "07", title: "Blue Verification" },
//         { number: "08", title: "Digital Marketing" },
//         { number: "09", title: "Social Media Management" },
//         { number: "10", title: "Tv Advertisement" },
//         { number: "11", title: "Press Conference" },
//         { number: "12", title: "Podcast" },
//         { number: "13", title: "Biography Of Wikipedia/ IMDB" }
//     ];

//     const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

//     return (
//         <div
//             ref={sectionRef}
//             className="min-h-screen bg-black text-white p-8 md:p-12 lg:p-16"
//         >
//             {/* Heading */}
//             <div className={`flex flex-col text-center mb-12 ${sectionInView ? "animate-slide-up" : "opacity-0"}`}>
//                 <h1 className="text-4xl md:text-5xl font-semibold tracking-wide" style={{ fontFamily: 'Constantine' }}>
//                     <span className="text-gray-400">OUR SERVICES</span> <br />
//                     <span className="text-gray-300">WE ARE 360° PR COMPANY</span>
//                 </h1>
//                 <div className="relative w-[300px] md:w-[500px] mt-4 flex justify-center items-center mx-auto">
//                     <img src={vector6} alt="Decorative line" className="w-full" />
//                 </div>
//             </div>

//             {/* Services Grid */}
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16" style={{ fontFamily: 'Constantine' }}>
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="group cursor-pointer transition-all duration-300 ease-out"
//                         >
//                             <div className="space-y-3">
//                                 {/* Number */}
//                                 <div
//                                     className={`text-6xl md:text-7xl font-light tracking-wider transition-all duration-400
//                                         ${service.highlighted
//                                             ? 'bg-gradient-to-r from-[#FF738B] via-[#9116E7] to-[#1B192E] bg-clip-text text-transparent'
//                                             : 'text-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent'
//                                         }
//                                         ${sectionInView ? "animate-slide-up" : "opacity-0"}
//                                     `}
//                                     style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
//                                 >
//                                     {service.number}
//                                 </div>

//                                 {/* Title */}
//                                 <h3
//                                     className={`text-xl md:text-2xl font-bold leading-tight transition-all duration-300
//                                         ${service.highlighted
//                                             ? 'bg-gradient-to-r from-[#FF738B] via-[#9116E7] to-[#1B192E] bg-clip-text text-transparent'
//                                             : 'text-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent'
//                                         }
//                                         ${sectionInView ? "animate-slide-up" : "opacity-0"}
//                                     `}
//                                     style={{ animationDelay: `${index * 0.1 + 0.05}s`, animationFillMode: "both" }}
//                                 >
//                                     {service.title}
//                                 </h3>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurServicesPage;

import React from 'react';
import vector6 from '../assets/Vector6.png';
import useInView from './UseInView'; // <-- path to hook

const OurServicesPage = () => {
    const services = [
        { number: "01", title: "Digital PR" },
        { number: "02", title: "Podcast PR" },
        { number: "03", title: "Newspaper PR" },
        { number: "04", title: "Magazines" },
        { number: "05", title: "Offline Branding" },
        { number: "06", title: "Cinema AD" },
        { number: "07", title: "TV Ads" },
        { number: "08", title: "Influencer Marketing" },
        { number: "09", title: "Social Media Management" },
        { number: "10", title: "Digital Marketing" },
        { number: "11", title: "End To End Production" },
        { number: "12", title: "Social Media Management" },
        { number: "13", title: "Website Development" },
        { number: "14", title: "Biography Of Wikipedia/ IMDB" }
    ];

    const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={sectionRef}
            className="min-h-screen bg-black text-white flex flex-col justify-center items-center"
            style={{
                padding: 'clamp(2rem, 5vw, 4rem)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
            }}
        >
            {/* Heading */}
            <div
                className={`flex flex-col text-center ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
                style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
            >
                <h1
                    className="font-semibold tracking-wide"
                    style={{
                        fontFamily: 'Constantine',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        lineHeight: '1.2'
                    }}
                >
                    <span className="text-gray-400">OUR SERVICES</span> <br />
                    <span className="text-gray-300">WE ARE 360° PR COMPANY</span>
                </h1>
                <div
                    className="flex justify-center items-center mx-auto"
                    style={{
                        width: 'clamp(250px, 30vw, 500px)',
                        marginTop: 'clamp(1rem, 2vw, 2rem)'
                    }}
                >
                    <img src={vector6} alt="Decorative line" className="w-full" />
                </div>
            </div>

            {/* Services Grid */}
            <div
                className="w-full max-w-none mx-auto lg:ml-[2rem]"
                style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}
            >
                <div
                    className="grid grid-cols-3 md:grid-cols-4 w-full"
                    style={{
                        gap: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem)'
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer transition-all duration-300 ease-out flex flex-col"
                            
                        >
                            <div className="space-y-3"
                                onMouseEnter={(e) => {
                                    const numberEl = e.currentTarget.querySelector('.number');
                                    if (numberEl) numberEl.style.WebkitTextStroke = "0px transparent";
                                }}
                                onMouseLeave={(e) => {
                                    const numberEl = e.currentTarget.querySelector('.number');
                                    if (numberEl) numberEl.style.WebkitTextStroke = "0.5px #ffffff";
                                }}>
                                {/* Number */}
                                <div
                                    className={`number font-light tracking-wider transition-all duration-400 overflow-hidden
                                        ${service.highlighted
                                            ? 'bg-gradient-to-r from-[#FF738B] via-[#9116E7] to-[#1B192E] bg-clip-text text-transparent'
                                            : 'text-gray-600   group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text'
                                        }
                                        ${sectionInView ? "animate-slide-up" : "opacity-0"}
                                    `}
                                    style={{
                                        fontFamily: 'Constantine',
                                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                                        animationDelay: `${index * 0.1}s`,
                                        animationFillMode: "both",
                                        color: "transparent", /* Make inside transparent */
                                        WebkitTextStroke: "0.5px #ffffff", /* White outline */
                                    }}
                                    
                                >
                                    {service.number}
                                </div>

                                {/* Title */}
                                
                                {/* <h3
                                    className={`font-base md:font-lg  leading-tight transition-all duration-300 sm:mt-[-10px] md:mt-[-40px] lg:mt-[-42px] xl:mt-[-50px]   
                                        ${service.highlighted
                                            ? 'bg-gradient-to-r from-[#FF738B] via-[#9116E7] to-[#1B192E] bg-clip-text text-transparent'
                                            : 'text-white/80 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent'
                                        }
                                        ${sectionInView ? "animate-slide-up" : "opacity-0"}
                                    `}
                                    style={{
                                        fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                                        animationDelay: `${index * 0.1 + 0.05}s`,
                                        animationFillMode: "both"
                                    }}
                                >
                                    {service.title}
                                </h3> */}
                                <h3
                                    className={`
    text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl
    font-base md:font-lg leading-tight transition-all duration-300 
    sm:mt-[-10px] md:mt-[-40px] lg:mt-[-42px] xl:mt-[-50px]   
    ${service.highlighted
                                            ? 'bg-gradient-to-r from-[#FF738B] via-[#9116E7] to-[#1B192E] bg-clip-text text-transparent'
                                            : 'text-white/80 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent'
                                        }
    ${sectionInView ? "animate-slide-up" : "opacity-0"}
  `}
                                    style={{
                                        animationDelay: `${index * 0.1 + 0.05}s`,
                                        animationFillMode: "both"
                                    }}
                                >
                                    {service.title}
                                </h3>

                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServicesPage;