import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BackGroundVideo from '../assets/BackGroundVideo.webm'
import LogoScroller from '../components/LogoScroller'
import Footer from '../components/Footer'
import MemePage from '../components/MemePage'
import ServicePage from '../components/ServicePage'
import MediaFeature from '../components/MediaFeature'
import OurServicesPage from '../components/OurServicesPage'
import AirLineMagazines from '../components/AirLineMagazines'
import PartnersPage from '../components/PartnersPage'
import FaqsPage from '../components/FaqsPage'
import Founders from '../components/Founders'
import ScrollingTestimonials from '../components/ScrollingTestimonials'

const LandingPage = () => {
    return (
        <div className='relative w-full  bg-black overflow-hidden'>
            <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full object-cover "
            >
                <source src={BackGroundVideo} type="video/mp4" />
            </video>
            <Navbar />
            <HeroSection />
            {/* <LogoScroller className=''/> */}
            <ServicePage/>
            <MediaFeature />
            <MemePage/>
            <OurServicesPage/>
            <AirLineMagazines />
            <ScrollingTestimonials/>
            <PartnersPage />
            <Founders/>
            <FaqsPage/>
            <Footer />
            
        </div>
    )
}

export default LandingPage