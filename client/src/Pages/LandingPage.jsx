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
import ServicePageImage from '../components/ServicePageImage'
import HorizontalLine from '../components/HorizontalLine'
import Achievements from '../components/Achievements'

const LandingPage = () => {
    return (
        <div className='relative w-full  bg-black overflow-hidden'>
            
            
            <HeroSection />
            {/* <LogoScroller className=''/> */}
            <ServicePage/>
            <ServicePageImage />
            <MediaFeature />
            <MemePage/>
            <OurServicesPage/>
            <AirLineMagazines />
            <ScrollingTestimonials/>
            <PartnersPage />
            <Achievements />
            <Founders/>
            <FaqsPage/>
            <HorizontalLine/>
            <Footer />
            
        </div>
    )
}

export default LandingPage