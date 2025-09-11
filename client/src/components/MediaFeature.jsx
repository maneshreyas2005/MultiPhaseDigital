import React from "react";
import Blur from "../assets/Blur.jpg";
import ZeeNews from "../assets/NewsChannels/ZEEnews.png";
import ABP from "../assets/NewsChannels/ABP.png";
import IndiaNews from "../assets/NewsChannels/IndiaNews.png";
import NewsIndia from "../assets/NewsChannels/NewsIndiaa.png";
import TimesNow from "../assets/NewsChannels/TimesNow.png";
import CNBCnewsTV from "../assets/NewsChannels/CNBCnewsTV.png";
import AAjTak from "../assets/NewsChannels/AAjTak.png";
import vector6 from "../assets/Vector6.png";
import NEWSchannelButton from "../assets/NEWSCHANNELBUTTON.png";
import useInView from "./UseInView"; // <-- path to hook

const MediaFeature = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
    >
      {/* Heading */}
      <div
        className={`text-center mt-4 mb-8 sm:mb-10 md:mb-12 ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0s", animationFillMode: "both" }}
      >
        <h1
          className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent`}
          style={{ fontFamily: "Constantine" }}
        >
          BE A{" "}
          <span className="text-white" style={{ fontFamily: "Constantine" }}>
            BRAND AND GET FEATURED IN
          </span>
        </h1>
        <h2
          className={`text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#FF738B] group-hover:via-[#9116E7] group-hover:to-[#1B192E] group-hover:bg-clip-text group-hover:text-transparent ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{
            fontFamily: "Constantine",
            animationDelay: "0.1s",
            animationFillMode: "both",
          }}
        >
          TOP BRANDED NEWS, TV, PR MEDIA
        </h2>
        <img
          loading="eager"
          src={vector6}
          alt="Decorative line"
          className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px] mt-4 mx-auto"
        />
      </div>

      {/* Logo Grid 1 */}
      <div className="max-[920px]:hidden grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8">
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={ZeeNews}
            alt="Zee News"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={AAjTak}
            alt="Aaj Tak"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={CNBCnewsTV}
            alt="CNBC"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
      </div>

      {/* Logo Grid for mobile */}
      <div className="min-[920px]:hidden grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8">
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={ZeeNews}
            alt="Zee News"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={AAjTak}
            alt="Aaj Tak"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={CNBCnewsTV}
            alt="CNBC"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={IndiaNews}
            alt="India TV"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={NewsIndia}
            alt="News 18 India"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={TimesNow}
            alt="Times Now"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={ABP}
            alt="ABP"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`group relative inline-block w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] rounded-2xl mx-auto 
    ${sectionInView ? "animate-slide-up" : "opacity-0"} p-[3.5px] gradient-border transform transition-transform duration-500 hover:scale-105`}
        >
          <div
            className={`flex items-center justify-center bg-black w-full h-full rounded-2xl ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
            style={{
              animationDelay: "0.8s",
              animationFillMode: "both",
              boxShadow: "0px 3px 15px 0px #FFFFFF26 inset",
            }}
          >
            <p className="text-white font-semibold text-sm sm:text-lg md:text-xl">
              +20 News Channels
            </p>
          </div>
        </div>

        {/* <div className={`group relative inline-block w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px]  rounded-2xl mx-auto ${sectionInView ? 'animate-slide-up' : 'opacity-0'} p-[3.58px] gradient-border transform transition-transform duration-500 hover:scale-105 
                        `}>
                    <div className="w-[144px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px]  rounded-2xl mx-auto  aspect-square flex flex-col justify-center items-center text-white text-center overflow-hidden " style={{
                        backgroundColor: '#000000',
                        boxShadow: '0px 3px 15px 0px #FFFFFF26 inset',
                    }}>

                        <p className="font-light text-md xs:text-sm sm:text-base md:text-lg lg:text-3xl xl:text-3xl whitespace-pre-line mt-1 sm:mt-2">
                            +20 News Channels
                        </p>
                    </div>
                </div> */}
      </div>
      {/* Logo Grid 2 */}
      <div className="max-[920px]:hidden grid grid-cols-1 [@media(max-width:920px)]:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12">
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={IndiaNews}
            alt="India TV"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={NewsIndia}
            alt="News 18 India"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={TimesNow}
            alt="Times Now"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
        <div
          className={`bg-white w-[150px] sm:w-[180px] md:w-[211.4px] h-[120px] sm:h-[140px] md:h-[163.5px] flex items-center justify-center rounded-2xl mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <img
            loading="eager"
            src={ABP}
            alt="ABP"
            className="object-contain w-[80px] sm:w-[100px] md:w-[120.34px] h-[120px] sm:h-[140px] md:h-[180.34px]"
          />
        </div>
      </div>

      {/* Button */}
      <div
        className={`max-[920px]:hidden flex items-center justify-center ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.9s", animationFillMode: "both" }}
      >
        <button className="relative px-6 sm:px-8 py-3 sm:py-4 w-[200px] sm:w-[250px] md:w-[300px] rounded-full mb-4 sm:mb-5 bg-black text-white font-medium text-base sm:text-lg tracking-wide hover:scale-105 transition-transform duration-200">
          <img
            loading="eager" src={NEWSchannelButton} alt="" className="absolute mt-[-10px]" />
        </button>
      </div>
    </div>
  );
};

export default MediaFeature;
