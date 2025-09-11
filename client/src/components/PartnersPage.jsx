import React from "react";
import vector6 from "../assets/Vector6.png";
import CountUp from "react-countup";
import Pandav from "../assets/Pandav30.png";
import Pandav2 from "../assets/Pandav30.png";
import useInView from "./UseInView"; // <-- path to hook

const PartnersPage = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  return (
    <div
      id="OurPartners"
      ref={sectionRef}
      className="relative w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6"
    >
      {/* Heading */}
      <div
        className={`w-full max-w-[556.07px] text-center mb-8 sm:mb-10 md:mb-12 ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0s", animationFillMode: "both" }}
      >
        <h1
          className="text-white/40 text-2xl sm:text-3xl md:text-4xl [@media(min-width:1190px)]:text-[2.5rem] lg:text-5xl font-semibold tracking-wide"
          style={{ fontFamily: "Constantine" }}
        >
          <span className="text-white" style={{ fontFamily: "Constantine" }}>
            OUR
          </span>
        </h1>
        <h2
          className="text-white/40 text-2xl [@media(min-width:1190px)]:text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mt-2"
          style={{
            fontFamily: "Constantine",
            animationDelay: "0.05s",
            animationFillMode: "both",
          }}
        >
          PARTNERS
        </h2>
        <img
          src={vector6}
          alt="Decorative line"
          className="w-[200px] sm:w-[240px] xl:w-[339px] [@media(min-width:1190px)]:w-[310px] mt-4 sm:mt-5 md:mt-[20px] mx-auto xl:ml-[8rem] sm:ml-[10rem] mb-4 sm:mb-5 md:mb-[20px]"
        />
        <span
          className={`font-light text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[100%] text-white/80 tracking-normal capitalize w-full max-w-[448px] h-auto md:h-[76px] mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          We Favour Increasing The <br /> Visibility Of The Brands
        </span>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-black overflow-hidden z-[0] gap-4 sm:gap-6 md:gap-[200px] lg:gap-[590px] xl:gap-[640px] mb-10">
        {/* Box 1 */}
        <div
          className={`group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 z-[0] ${sectionInView ? "animate-slide-up" : "opacity-0"} [@media(min-width:1304px)]:w-[280.91px] [@media(min-width:1304px)]:h-[280.91px] [@media(min-width:1164px)]:w-[240px] [@media(min-width:1164px)]:h-[240px] [@media(min-width:1190px)]:w-[260px] [@media(min-width:1190px)]:h-[260px] [@media(max-width:1023px)]:w-[260px] [@media(max-width:1023px)]:h-[260px] [@media(max-width:650px)]:w-[200px] [@media(max-width:650px)]:h-[200px] w-[200px] h-[200px]`}
          style={{
            animationDelay: "0.2s",
            animationFillMode: "both",
            backgroundColor: "#000000",
            boxShadow: "0px 3px 20px 0px #07070726 inset",
          }}
        >
          <div className="rounded-3xl bg-black flex flex-col justify-center items-center text-white text-center w-full h-full">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent"
              style={{ fontFamily: "Constantine" }}
            >
              {sectionInView ? (
                <CountUp end={7} duration={3} suffix="K+" />
              ) : (
                "0"
              )}
            </h2>
            <p className="font-light text-white/60 text-lg sm:text-2xl md:text-3xl mt-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent">
              Personal
              <br /> Branding <br />
              Completed
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className={`group relative inline-block overflow-hidden rounded-3xl p-[2px] sm:p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 z-[0] ${sectionInView ? "animate-slide-up" : "opacity-0"} [@media(min-width:1304px)]:w-[280.91px] [@media(min-width:1304px)]:h-[280.91px] [@media(min-width:1190px)]:w-[260px] [@media(min-width:1190px)]:h-[260px] [@media(min-width:1090px)]:w-[240px] [@media(min-width:1090px)]:h-[240px] [@media(max-width:1023px)]:w-[260px] [@media(max-width:1023px)]:h-[260px] [@media(max-width:650px)]:w-[200px] [@media(max-width:650px)]:h-[200px] w-[200px] h-[200px]`}
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <div className="rounded-3xl bg-black flex flex-col justify-center items-center text-white text-center w-full h-full">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent"
              style={{ fontFamily: "Constantine" }}
            >
              {sectionInView ? (
                <CountUp end={800} duration={2} suffix="+" />
              ) : (
                "0"
              )}
            </h2>
            <p className="font-light text-white/60 text-lg sm:text-2xl md:text-3xl mt-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent">
              Customers
              <br />
              Worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Partner Image */}
      <div
        className={`group  relative inline-block rounded-3xl md:ml-[30px] p-[2px] sm:p-[3.58px] z-[1] transform transition-transform duration-500 hover:scale-105 ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.4s", animationFillMode: "both" }}
      >
        <img
          src={Pandav}
          alt="Pandav Partner"
          className=" max-[769px]:hidden
            [@media(min-width:1304px)]:w-[1176.5px]
           [@media(min-width:1190px)]:w-[1187px]
            [@media(min-width:1024px)]:w-[940px]
            [@media(max-width:1023px)]:w-[990px] mt-[-10rem]
            [@media(max-width:767px)]:ml-[14px] mt-[-100px]
            w-[90%]
            h-auto
            [@media(min-width:1304px)]:mt-[-370px]
           [@media(min-width:1190px)]:mt-[-335px] 
            [@media(min-width:1024px)]:mt-[-300px]
             [@media(max-width:616px)]:mt-[-40px]
            mx-auto
          "
        />
        <img
          src={Pandav2}
          alt="Pandav Partner"
          className=" min-[769px]:hidden 
            [@media(min-width:1304px)]:w-[1276.5px]
           [@media(min-width:1190px)]:w-[1187px]
            [@media(min-width:1024px)]:w-[940px]
            [@media(max-width:1023px)]:w-[990px] mt-[-10rem]
            [@media(max-width:767px)]: mt-[-100px]
            w-[90%]
            h-auto
            [@media(min-width:1304px)]:mt-[-370px]
           [@media(min-width:1190px)]:mt-[-335px] 
            [@media(min-width:1024px)]:mt-[-300px]
             [@media(max-width:616px)]:mt-[-40px]
            mx-auto
          "
        />
      </div>
    </div>
  );
};

export default PartnersPage;
