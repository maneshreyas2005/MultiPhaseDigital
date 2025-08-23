// import React from 'react';
// import Logo from '../assets/Logo.svg';


// export default function MultiphaseFooter() {
//     return (
//         <footer className="bg-black text-white py-16 px-6">
//             <div className="max-w-6xl mx-auto text-center ">
//                 {/* Logo */}
//                 <div className="mb-7 flex justify-center items-center ">
//                     <img src={Logo} alt="" className="w-[283px] h-[151px]" />
//                 </div>

//                 {/* Main Heading */}
//                 <div className="mb-16">
//                     <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-2">
//                         Drop us a line or two, we are open for
//                     </h2>
//                     <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
//                         creative minds and collaborations!
//                     </h2>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="mb-16">
//                     <ul className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12 text-lg">
//                         <li>
//                             <a href="#" className="hover:text-orange-400 transition-colors duration-200">
//                                 Our Clients
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-orange-400 transition-colors duration-200">
//                                 Services
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-orange-400 transition-colors duration-200">
//                                 Meme Marketing
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-orange-400 transition-colors duration-200">
//                                 Our Partner
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Bottom Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
//                     {/* Copyright */}
//                     <div className="text-gray-400 text-sm mb-4 md:mb-0">
//                         © Copyright 2022, All Rights Reserved
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex items-center space-x-4 mb-4 md:mb-0">
//                         <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                             </svg>
//                         </a>
//                         <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                             </svg>
//                         </a>
//                         <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.098.119.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
//                             </svg>
//                         </a>
//                     </div>

//                     {/* Legal Links */}
//                     <div className="flex items-center space-x-6 text-sm text-gray-400">
//                         <a href="#" className="hover:text-white transition-colors duration-200">
//                             Privacy Policy
//                         </a>
//                         <a href="#" className="hover:text-white transition-colors duration-200">
//                             Terms & Conditions
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }
import React from 'react';
import Logo from '../assets/Logo.svg';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';

export default function MultiphaseFooter() {
    return (
        <footer className="w-full bg-black text-white py-12 px-6">
            
            <div className="max-w-6xl mx-auto text-center">

                {/* Logo */}
                <div className="mb-7 flex justify-center items-center">
                    <img
                        src={Logo}
                        alt="Company Logo"
                        className="w-40 sm:w-56 md:w-[230px] h-auto"
                    />
                </div>

                {/* Main Heading */}
                <div className="mb-14 md:mb-12 px-2">
                    <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-snug md:leading-tight mb-2">
                        Drop us a line or two, we are open for
                    </h2>
                    <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-snug md:leading-tight">
                        creative minds and collaborations!
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav className="mb-6">
                    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:space-x-12 text-sm sm:text-base md:text-lg">
                        <li>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                                Our Clients
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                                Meme Marketing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-200">
                                Our Partner
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-8 border-t border-gray-800 space-y-6 lg:space-y-0">

                    {/* Copyright */}
                    <div className="text-gray-400 text-xs sm:text-sm">
                        © Copyright 2022, All Rights Reserved
                    </div>

                    {/* Social Icons */}
                    {/* <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                        {['M0 0h24v24H0z', 'M0 0h24v24H0z', 'M0 0h24v24H0z'].map((_, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    
                                    <path d="M0 0h24v24H0z" fill="none" />
                                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />

                                </svg>
                            </a>
                        ))}
                    </div> */}

                     <div className="flex justify-center space-x-4 mb-4 md:mb-0">
                         <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                             </svg>
                         </a>
                         <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                            <img src={logo2} alt="" />
                         </a>
                         <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                             <img src={logo3} alt="" />
                         </a>
                     </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-200">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
