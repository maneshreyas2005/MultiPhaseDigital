import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home Page');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <nav className="relative w-full border-gray-200 py-2.5">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center ">
                    <img className="max-[500px]:w-24 h-auto self-center" src={Logo} />
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <a
                        className="hidden min-[500px]:inline-block text-white xl:w-[110px] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                        style={{
                            background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                        }}>
                        Contact Us
                    </a>

                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMobileMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`w-5 h-5 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                        <svg
                            className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                    <div className='lg:rounded-full px-6 2xl:px-8' style={{ backgroundColor: '#050505' }}>
                        <div className='flex bg-gray-800 lg:rounded-full px-4 mt-[10px] 2xl:px-6' style={{
                            backgroundColor: '#050505',
                            boxShadow: '0px 7px 28px 0px #FFFFFF26 inset',
                        }}>
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:items-center lg:space-x-0 lg:mt-0">
                                <li className="flex items-center relative">
                                    <a href="#"
                                        className={`block py-2 pl-3 pr-4 text-white hover:text-pink-400 lg:p-3 transition-colors duration-200 ${activeTab === 'Home Page' ? 'text-pink-400' : ''}`}
                                        onClick={() => handleTabClick('Home Page')}
                                        aria-current={activeTab === 'Home Page' ? 'page' : undefined}>
                                        Home Page
                                    </a>
                                    {activeTab === 'Home Page' && (
                                        <div className="absolute bottom-0 left-2 right-7 h-[2px] rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                                            }}></div>
                                    )}
                                    <span className="hidden lg:block text-gray-500 mx-2">•</span>
                                </li>
                                <li className="flex items-center relative">
                                    <a href="#"
                                        className={`block py-2 pl-3 pr-4 text-gray-300 hover:text-pink-400 lg:p-3 transition-colors duration-200 ${activeTab === 'Services' ? 'text-white' : ''}`}
                                        onClick={() => handleTabClick('Services')}>
                                        Services
                                    </a>
                                    {activeTab === 'Services' && (
                                        <div className="absolute bottom-0 left-2 right-8 h-[2px] rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                                            }}></div>
                                    )}
                                    <span className="hidden lg:block text-gray-500 mx-2">•</span>
                                </li>
                                <li className="flex items-center relative">
                                    <a href="#"
                                        className={`block py-2 pl-3 pr-4 text-gray-300 hover:text-pink-400 lg:p-3 transition-colors duration-200 ${activeTab === 'Testimonial' ? 'text-white' : ''}`}
                                        onClick={() => handleTabClick('Testimonial')}>
                                        Testimonial
                                    </a>
                                    {activeTab === 'Testimonial' && (
                                        <div className="absolute bottom-0 left-3 right-6 h-[2px] rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                                            }}></div>
                                    )}
                                    <span className="hidden lg:block text-gray-500 mx-2">•</span>
                                </li>
                                <li className="flex items-center relative">
                                    <a href="#"
                                        className={`block py-2 pl-3 pr-4 text-gray-300 hover:text-pink-400 lg:p-3 transition-colors duration-200 ${activeTab === 'Our Presence' ? 'text-white' : ''}`}
                                        onClick={() => handleTabClick('Our Presence')}>
                                        Our Presence
                                    </a>
                                    {activeTab === 'Our Presence' && (
                                        <div className="absolute bottom-0 left-3 right-7 h-[2px] rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                                            }}></div>
                                    )}
                                    <span className="hidden lg:block text-gray-500 mx-2">•</span>
                                </li>
                                <li className="flex items-center relative">
                                    <a href="#"
                                        className={`block py-2 pl-3 pr-4 text-gray-300 hover:text-pink-400 lg:p-3 transition-colors duration-200 ${activeTab === 'About Us' ? 'text-white' : ''}`}
                                        onClick={() => handleTabClick('About Us')}>
                                        About Us
                                    </a>
                                    {activeTab === 'About Us' && (
                                        <div className="absolute bottom-0 left-2 right-0 h-[2px] rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                                            }}></div>
                                    )}
                                </li>
                                <li className="min-[500px]:hidden flex items-center relative">
                                    <a href="#"
                                        className={`block py-2 pl-3 pr-4 text-gray-300 hover:text-pink-400 lg:p-3 transition-colors duration-200 ${activeTab === 'About Us' ? 'text-white' : ''}`}
                                        onClick={() => handleTabClick('About Us')}>
                                        Contact Us
                                    </a>
                                    {activeTab === 'About Us' && (
                                        <div className="absolute bottom-0 left-2 right-0 h-[2px] rounded-t-lg"
                                            style={{
                                                background: 'linear-gradient(270deg, #1B192E 0%, #9116E7 39.7%, #FF738B 100%)'
                                            }}></div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;