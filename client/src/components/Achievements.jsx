import React from 'react'
import vector6 from '../assets/Vector6.png';
import useInView from './UseInView';
import Award1 from '../assets/Award1.png';
import Award2 from '../assets/Award2.png';
import Award3 from '../assets/Award3.png';
import Award4 from '../assets/Award4.png';
import Award5 from '../assets/Award5.png';
import Award6 from '../assets/Award6.png';
import Award7 from '../assets/Award7.png';



const Achievements = () => {
    const [ref, isInView] = useInView({ threshold: 0.3 });

    return (
        <div id='OurPresence' className='bg-black w-full flex flex-col items-center justify-center'>
            {/* Heading */}
            <div
                className={`mt-5 text-center mb-8 sm:mb-12 lg:mb-16 max-w-full ${isInView ? 'animate-slide-up' : ''}`}
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
                    ACHIEVEMENTS
                </h2>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[160px] sm:w-[250px] md:w-[300px] lg:w-[400px] mt-2 sm:mt-5 mx-auto"
                />
            </div>

            <div className="w-full bg-black grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-6 lg:gap-10 place-items-center">
                <img src={Award1} alt="Award 1" />
                <img src={Award2} alt="Award 2" />
                <img src={Award3} alt="Award 3" />
                <img src={Award4} alt="Award 4" />
                <img src={Award5} alt="Award 5" />
                <img src={Award6} alt="Award 6" />
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <img src={Award7} alt="" className=' mt-6 px-4 md:px-50 mb-4' />
            </div>


        </div>
    )
}

export default Achievements