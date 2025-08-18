import React from 'react'
import Pandavasss from '../assets/Pandavasss.png'
import { useRef, useState, useEffect } from 'react'

const ServicePageImage = () => {
    const statsRef = useRef(null);
        const headingRef = useRef(null);
        const imagesRef = useRef(null);
        const [isStatsVisible, setIsStatsVisible] = useState(false);
        const [isHeadingVisible, setIsHeadingVisible] = useState(false);
        const [isImagesVisible, setIsImagesVisible] = useState(false);
        
    useEffect(() => {
            const createObserver = (ref, setVisible) => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisible(true);
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.3 }
                );
    
                if (ref.current) {
                    observer.observe(ref.current);
                }
                return () => observer.disconnect();
            };
    
            const cleanupStats = createObserver(statsRef, setIsStatsVisible);
            const cleanupHeading = createObserver(headingRef, setIsHeadingVisible);
            const cleanupImages = createObserver(imagesRef, setIsImagesVisible);
    
            return () => {
                cleanupStats();
                cleanupHeading();
                cleanupImages();
            };
        }, []);

  return (
      <div
          ref={imagesRef}
          className={`relative w-full z-1 mt-[-20px] xs:mt-[-30px] sm:mt-[-40px] md:mt-[-60px] lg:mt-[-130px] 
    ${isImagesVisible ? 'animate-slide-up' : 'opacity-0'}`}
      >
          <img
              src={Pandavasss}
              alt=""
              className="w-screen h-auto"
          />
      </div>
  )
}

export default ServicePageImage