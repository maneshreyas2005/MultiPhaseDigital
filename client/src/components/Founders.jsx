// // import React from 'react';
// // import vector6 from '../assets/vector6.png'; // Adjust path as needed
// // import Founder1 from '../assets/Founder1.png'; // Adjust path as needed
// // import Founder2 from '../assets/Founder2.png'; // Adjust path as needed
// // import useInView from './UseInView'; // Adjust path as needed

// // const Founders = () => {
// //     const [ref, isInView] = useInView({ threshold: 0.3 });
// //     return (
// //         <div ref={ref} className='relative w-full bg-black flex flex-col items-center justify-center p-6 z-[1]'>
// //             <div className={`bg-black w-[556.07px] h-[139.27px] text-center mb-12 ${isInView ? 'animate-slide-up' : ''}`}>
// //                 <h1 className="text-white/40 text-4xl md:text-5xl font-semibold tracking-wide" style={{ fontFamily: 'Constantine' }}>
// //                     <span className='text-white' style={{ fontFamily: 'Constantine' }}>OUR</span>
// //                 </h1>
// //                 <h2 className="text-white/40 text-4xl md:text-5xl font-semibold tracking-wide mt-2" style={{ fontFamily: 'Constantine' }}>
// //                     FOUNDERS
// //                 </h2>
// //                 <img
// //                     src={vector6}
// //                     alt="Decorative line"
// //                     className="w-[400px] mt-[20px] md:w-[300px] mx-auto mb-[20px] "
// //                 />
// //             </div>
// //             <div className='relative flex justify-center items-center mt-[-48px] bg-black px-4 overflow-hidden z-[0]'>
// //                 <div className={`flex items-center mx-4 ${isInView ? 'animate-slide-in-right' : ''}`}>
// //                     <img src={Founder1} alt="Anubhav Dubey" className=' w-[500px] h-[600px] mt-[20px] ' />
// //                     <span className='text-white/40 text-2xl md:text-2xl font-semibold tracking-wide text-center'>ANUBHAV DUBEY<br />MENTOR</span>
// //                 </div>
// //                 <div className={`flex items-center relative ${isInView ? 'animate-slide-in-left' : ''}`}>
// //                     <span className='text-white/40 text-2xl md:text-2xl ml-[60px] font-semibold tracking-wide text-center'>MEHUL PUROHIT<br />FOUNDER & CEO</span>
// //                     <img src={Founder2} alt="Mehul Purohit" className='w-[570px] h-[600px] mt-[20px]' />
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Founders;
// import React from 'react';
// import vector6 from '../assets/vector6.png';
// import Founder1 from '../assets/Founder1.png';
// import Founder2 from '../assets/Founder2.png';
// import useInView from './UseInView';

// const Founders = () => {
//     const [ref, isInView] = useInView({ threshold: 0.3 });

//     return (
//         <div
//             ref={ref}
//             className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6 z-[1]"
//         >
//             {/* Heading */}
//             <div
//                 className={`bg-black text-center mb-8 sm:mb-12 max-w-full ${isInView ? 'animate-slide-up' : ''}`}
//             >
//                 <h1
//                     className="text-white/40 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide"
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     <span className="text-white" style={{ fontFamily: 'Constantine' }}>
//                         OUR
//                     </span>
//                 </h1>
//                 <h2
//                     className="text-white/40 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mt-2"
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     FOUNDERS
//                 </h2>
//                 <img
//                     src={vector6}
//                     alt="Decorative line"
//                     className="w-[250px] sm:w-[300px] md:w-[400px] mt-5 mx-auto mb-5"
//                 />
//             </div>

//             {/* Founder Images + Names */}
//             <div
//                 className="relative flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12 mt-[-20px] md:mt-[-48px] bg-black px-2 sm:px-4 overflow-hidden z-[0]"
//             >
//                 {/* Founder 1 */}
//                 <div
//                     className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}
//                 >
//                     <img
//                         src={Founder1}
//                         alt="Anubhav Dubey"
//                         className="w-[250px] sm:w-[350px] md:w-[500px] h-auto mt-4 rounded-lg object-contain"
//                     />
//                     <span className="text-white/40 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-center">
//                         ANUBHAV DUBEY
//                         <br />
//                         MENTOR
//                     </span>
//                 </div>

//                 {/* Founder 2 */}
//                 <div
//                     className={`flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}
//                 >
//                     <span className="text-white/40 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-center md:text-left">
//                         MEHUL PUROHIT
//                         <br />
//                         FOUNDER & CEO
//                     </span>
//                     <img
//                         src={Founder2}
//                         alt="Mehul Purohit"
//                         className="w-[250px] sm:w-[350px] md:w-[570px] h-auto mt-4 rounded-lg object-contain"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Founders;

// import React from 'react';
// import vector6 from '../assets/vector6.png';
// import Founder1 from '../assets/Founder1.png';
// import Founder2 from '../assets/Founder2.png';
// import useInView from './UseInView';

// const Founders = () => {
//     const [ref, isInView] = useInView({ threshold: 0.3 });

//     return (
//         <div
//             ref={ref}
//             className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6 z-[1]"
//         >
//             {/* Heading */}
//             <div
//                 className={`bg-black text-center mb-8 sm:mb-12 max-w-full ${isInView ? 'animate-slide-up' : ''}`}
//             >
//                 <h1
//                     className="text-white/40 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide"
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     <span className="text-white" style={{ fontFamily: 'Constantine' }}>
//                         OUR
//                     </span>
//                 </h1>
//                 <h2
//                     className="text-white/40 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mt-2"
//                     style={{ fontFamily: 'Constantine' }}
//                 >
//                     FOUNDERS
//                 </h2>
//                 <img
//                     src={vector6}
//                     alt="Decorative line"
//                     className="w-[250px] sm:w-[300px] md:w-[400px] mt-5 mx-auto mb-5"
//                 />
//             </div>

//             {/* Desktop Layout (>1024px) */}
//             <div className="hidden lg:flex relative justify-center items-center mt-[-48px] bg-black px-4 overflow-hidden z-[0]">
//                 <div className={`flex items-center mx-4 ${isInView ? 'animate-slide-in-right' : ''}`}>
//                     <img src={Founder1} alt="Anubhav Dubey" className="w-[500px] h-[600px] mt-[20px]" />
//                     <span className="text-white/40 text-2xl font-semibold tracking-wide text-center">
//                         ANUBHAV DUBEY
//                         <br />
//                         MENTOR
//                     </span>
//                 </div>
//                 <div className={`flex items-center relative ${isInView ? 'animate-slide-in-left' : ''}`}>
//                     <span className="text-white/40 text-2xl ml-[60px] font-semibold tracking-wide text-center">
//                         MEHUL PUROHIT
//                         <br />
//                         FOUNDER & CEO
//                     </span>
//                     <img src={Founder2} alt="Mehul Purohit" className="w-[570px] h-[600px] mt-[20px]" />
//                 </div>
//             </div>

//             {/* Tablet & Mobile Layout (≤1024px) */}
//             <div className="flex lg:hidden flex-col justify-center items-center gap-8 sm:gap-12 mt-[-20px] bg-black px-2 sm:px-4 overflow-hidden z-[0]">
//                 {/* Founder 1 */}
//                 <div
//                     className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
//                 >
//                     <img
//                         src={Founder1}
//                         alt="Anubhav Dubey"
//                         className="w-[250px] sm:w-[300px] md:w-[400px] h-auto mt-4 rounded-lg object-contain flex-shrink-0"
//                     />
//                     <span className="text-white/40 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide whitespace-normal">
//                         ANUBHAV DUBEY
//                         <br />
//                         MENTOR
//                     </span>
//                 </div>

//                 {/* Founder 2 */}
//                 <div
//                     className={`flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-left' : ''}`}
//                 >
//                     <span className="text-white/40 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide whitespace-normal">
//                         MEHUL PUROHIT
//                         <br />
//                         FOUNDER & CEO
//                     </span>
//                     <img
//                         src={Founder2}
//                         alt="Mehul Purohit"
//                         className="w-[250px] sm:w-[300px] md:w-[420px] h-auto mt-4 rounded-lg object-contain flex-shrink-0"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Founders;
import React from 'react';
import vector6 from '../assets/Vector6.png';
import Founder1 from '../assets/Founder1.png';
import Founder2 from '../assets/Founder2.png';
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
                    className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] mt-4 sm:mt-5 mx-auto mb-4 sm:mb-5"
                />
            </div>

            {/* Desktop Layout (≥1024px) */}
            <div className="hidden lg:flex relative justify-center items-center gap-6 lg:gap-8 xl:gap-12 mt-[-48px] bg-black px-4 sm:px-6 lg:px-8 overflow-hidden z-[0]">
                <div className={`flex items-center gap-4 lg:gap-6 ${isInView ? 'animate-slide-in-right' : ''}`}>
                    <img src={Founder1} alt="Anubhav Dubey" className="w-[280px] lg:w-[350px] xl:w-[400px] h-auto rounded-lg object-contain" />
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>
                </div>
                <div className={`flex items-center xl:gap-6 ${isInView ? 'animate-slide-in-left' : ''}`}>
                    <span className="text-white/40 text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide text-center md:ml-[20px] whitespace-normal">
                        MEHUL PUROHIT
                        <br />
                        FOUNDER & CEO
                    </span>
                    <img src={Founder2} alt="Mehul Purohit" className="w-[320px] lg:w-[370px] xl:w-[420px] h-auto rounded-lg object-contain" />
                </div>
            </div>

            {/* Tablet & Mobile Layout (<1024px) */}
            <div className="flex lg:hidden flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12 mt-[-20px] bg-black px-2 sm:px-4 overflow-hidden z-[0]">
                {/* Founder 1 */}
                <div
                    className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-right' : ''}`}
                >
                    <img
                        src={Founder1}
                        alt="Anubhav Dubey"
                        className="w-[200px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        ANUBHAV DUBEY
                        <br />
                        MENTOR
                    </span>
                </div>

                {/* Founder 2 */}
                <div
                    className={`flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-6 flex-wrap text-center sm:text-left ${isInView ? 'animate-slide-in-left' : ''}`}
                >
                    <span className="text-white/40 text-base sm:text-lg md:text-xl font-semibold tracking-wide whitespace-normal">
                        MEHUL PUROHIT
                        <br />
                        FOUNDER & CEO
                    </span>
                    <img
                        src={Founder2}
                        alt="Mehul Purohit"
                        className="w-[200px] sm:w-[250px] md:w-[350px] h-auto rounded-lg object-contain flex-shrink-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Founders;