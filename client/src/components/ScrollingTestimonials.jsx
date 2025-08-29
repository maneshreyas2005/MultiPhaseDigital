
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import vector6 from '../assets/Vector6.png';
import whiteGridBackGround from '../assets/whiteGridBackground.png';
import astroarunpandit2 from '../assets/astroarunpandit2.jpg';
import JLogo from '../assets/JLogo.jpg';
import AgatsyaShah from '../assets/AgatsyaShah.jpg';
import SammarVerma from '../assets/SammarVerma.jpg';
import JaiSingh from '../assets/JaiSingh.jpg';
import JeetShah from '../assets/JeetShah.jpg';
import AanchalAgarwal from '../assets/AanchalAgarwal.jpg';
import RanveerAllahbadia from '../assets/RanveerAllahbadia.jpg';
import YashVardhanSwami from '../assets/YashVardhanSwami.jpg';

// const testimonials = [
//     {
//         id: 1,
//         text: "Their editing gave my brand a fresh, professional look. My audience noticed the difference immediately!",
//         name: "Chris Evans",
//         role: "Fitness Coach",
//         avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 2,
//         text: "The attention to detail and creative vision transformed our content completely. Outstanding results!",
//         name: "Sarah Johnson",
//         role: "Content Creator",
//         avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 3,
//         text: "Professional service with incredible turnaround time. They understood exactly what we needed.",
//         name: "Michael Chen",
//         role: "Marketing Director",
//         avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 4,
//         text: "Game-changing quality that elevated our brand presence across all platforms. Highly recommended!",
//         name: "Emma Davis",
//         role: "Brand Manager",
//         avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 5,
//         text: "Their creative expertise brought our vision to life beyond our expectations. Simply amazing work!",
//         name: "David Wilson",
//         role: "YouTuber",
//         avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 6,
//         text: "Exceptional attention to detail and lightning-fast delivery. They've become our go-to team!",
//         name: "Lisa Anderson",
//         role: "Podcast Host",
//         avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 7,
//         text: "The quality and creativity exceeded all our expectations. Our engagement rates soared!",
//         name: "Ryan Martinez",
//         role: "Social Media Manager",
//         avatar: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     },
//     {
//         id: 8,
//         text: "Professional, reliable, and incredibly talented. They transformed our entire content strategy.",
//         name: "Jennifer Taylor",
//         role: "Business Owner",
//         avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
//         rating: 5
//     }
// ];
const testimonials = [
    {
        id: 1,
        text: "Our spiritual community has grown authentically, reaching souls we never thought possible. Truly grateful.",
        name: "Arun Tiwari ",
        role: "Astro Arun Pandit",
        avatar: astroarunpandit2, // replace with real avatar
        rating: 5
    },
    {
        id: 2,
        text: "They understood our vision, and the organic growth of our podcast has been phenomenal.",
        name: "Ranveer Allahbadia",
        role: "TRS & Beerbiceps",
        avatar: RanveerAllahbadia,
        rating: 5
    },
    {
        id: 3,
        text: "Our fitness family has expanded beyond our wildest dreams. The growth feels so real.",
        name: "Yash Vardhan Swami",
        role: "Trained by YVS",
        avatar: YashVardhanSwami,
        rating: 5
    },
    {
        id: 4,
        text: "My content is now reaching a much wider audience, and the engagement is incredible.",
        name: "Aanchal Agarwal",
        role: "Content Creator",
        avatar: AanchalAgarwal,
        rating: 5
    },
    {
        id: 5,
        text: "My audience has grown so much, and it's amazing to see the #AGfam expanding.",
        name: "Agasthya Shah",
        role: "Actor & Content Creator",
        avatar: AgatsyaShah,
        rating: 5
    },
    {
        id: 6,
        text: "From small rooms to sold-out auditoriums, our stories are now reaching thousands more.",
        name: "Jai Singh",
        role: "Storyteller",
        avatar: JaiSingh,
        rating: 5
    },
    {
        id: 7,
        text: "Folk Media's reach and impact have grown tremendously, all thanks to their incredible work.",
        name: "Sammar Verma",
        role: "Folk Media",
        avatar: SammarVerma,
        rating: 5
    },
    {
        id: 8,
        text: "My ability to help others grow their Instagram presence has scaled immensely.",
        name: "Jitendra Choudhary",
        role: "Instagram Coach",
        avatar: JLogo ,
        rating: 5
    },
    {
        id: 9,
        text: "My voice in the crypto space is now reaching a much larger, engaged audience.",
        name: "Jeet Shah ",
        role: "Crypto Influencer",
        avatar: JeetShah,
        rating: 5
    },
    {
        id: 10,
        text: "The Crypto Talks community has seen incredible organic growth, and I couldn't be happier.",
        name: "Budhil Vyas (Crypto & Wealth)",
        role: "Crypto Educator",
        avatar: "https://yt3.googleusercontent.com/WnlWunw9T-GDfXkOJmdrHPZ03BwQqULf6hJrd_VQ8kadTimm5Y34-8Cz6a27I5yAWN0_3iYSQ4M=s120-c-k-c0x00ffffff-no-rj",
        rating: 5
    },
    {
        id: 11,
        text: "Their insights have been invaluable in driving authentic and sustainable brand growth for us.",
        name: "Aditya Gupta",
        role: "GM Patanjali Foods",
        avatar: "https://yt3.googleusercontent.com/9GYCn_PuL97R-A0OjzO7ykK5rX_KCm7lXLJ7cA6i3rvBvlpszIo-oFe3xp-UJ2eNUqVZEHXgbw=s120-c-k-c0x00ffffff-no-rj",
        rating: 5
    }
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="relative bg-transparent rounded-[2rem] p-6 mb-6 border border-gray-700/30 shadow-2xl 
                        transition-all duration-300 hover:scale-95 hover:rounded-[3rem] hover:shadow-purple-500/20 
                        hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-700/70 group 
                        w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">

            <div className="absolute -bottom-4 -right-[0.1rem] md:-bottom-9 md:-right-1 
                            text-[5rem] md:text-[10rem] text-blue-500/20 font-serif font-bold tracking-tighter">
                ,,
            </div>

            <div className="relative z-10 rounded-[4rem] ">
                <p className="text-gray-300 xl:mt-[2rem] w-full sm:w-[90%] md:w-[95%] 
                               sm:text-sm md:text-base xl:text-xl leading-relaxed 
                               md:mb-3 xl:mb-6 group-hover:text-white transition-colors duration-300">
                    {testimonial.text}
                </p>

                <div className="flex justify-center items-center gap-3 ">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-14 md:h-14 xl:w-20 xl:h-20 rounded-full object-cover 
                                   ring-2 ring-purple-500/30 group-hover:ring-purple-400/50 transition-all duration-300"
                    />
                    <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-blue-100 transition-colors duration-300">
                            {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                <div className="flex gap-1 mt-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400 group-hover:scale-95 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-purple-600/0 
                            group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-purple-600/10 
                            transition-all duration-500"></div>
        </div>
    );
};

const ScrollingColumn = ({ testimonials, direction, speed }) => {
    const [isHovered, setIsHovered] = useState(false);

    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex flex-col ${isHovered ? '' : direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'
                    }`}
                style={{
                    animationDuration: `${speed}s`,
                    animationPlayState: isHovered ? 'paused' : 'running',
                }}
            >
                {doubledTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

const ScrollingTestimonials = () => {
    const leftColumn = testimonials.slice(0, 11);
    const middleColumn = testimonials.slice(4, 8);
    const rightColumn = testimonials.slice(8, 11);

    return (
        <div id="Testimonial" className="relative min-h-screen bg-black py-10 px-8 md:py-20 md:px-30 lg:mt-[-7rem] overflow-hidden"
            style={{}}>
            <div className="max-w-7xl mx-auto">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-screen"
                    style={{
                        backgroundImage: `url(${whiteGridBackGround})`,
                        mixBlendMode: "screen", // keeps white visible, removes black
                        opacity: 0.2,
                    }}
                />

                {/* Purple vignette effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Big centered radial purple glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(140,35,180,0.25)_0%,_rgba(0,0,0,1)_70%)]"></div>
                </div>

                <div className="relative z-10 flex flex-col gap-[10px] items-center">
                    <h1
                        className="flex flex-col items-center text-white text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold"
                        style={{ fontFamily: 'Constantine' }}
                    >
                        <span className="text-center xl:mt-[-50px]">CLIENT REVIEWS</span>
                        <span className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mt-2 sm:mt-1 md:mt-[10px] lg:mt-[20px] lg:ml-[36px] xl:mt-[10px]">
                            WE WORKED HARD TO SATISFY OUR CLIENTS
                        </span>
                    </h1>

                    <img
                        src={vector6}
                        alt="Decorative line"
                        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] mb-8"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-[1] h-screen">
                    {/* Column 1 → always visible */}
                    <ScrollingColumn
                        testimonials={leftColumn}
                        direction="up"
                        speed={30}
                    />

                    {/* Column 2 → hidden on 1-col, visible from sm: (≥640px) */}
                    <div className="hidden sm:block">
                        <ScrollingColumn
                            testimonials={middleColumn}
                            direction="down"
                            speed={20}
                        />
                    </div>

                    {/* Column 3 → hidden on 1 & 2 cols, visible from lg: (≥1024px) */}
                    <div className="hidden lg:block">
                        <ScrollingColumn
                            testimonials={rightColumn}
                            direction="up"
                            speed={8}
                        />
                    </div>
                </div>

            </div>

            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default ScrollingTestimonials;