// import { useState } from 'react';

// export default function ContactUs() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phoneNumber: '',
//         whatsappNumber: '',
//         message: '',
//         sameAsPhone: false
//     });

//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const validatePhone = (phone) => {
//         const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
//         return phoneRegex.test(phone);
//     };

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         if (type === 'checkbox') {
//             setFormData(prev => ({
//                 ...prev,
//                 [name]: checked,
//                 whatsappNumber: checked ? prev.phoneNumber : prev.whatsappNumber
//             }));
//         } else {
//             setFormData(prev => {
//                 const newData = {
//                     ...prev,
//                     [name]: value
//                 };

//                 // Auto-fill WhatsApp number if checkbox is checked and phone number changes
//                 if (name === 'phoneNumber' && prev.sameAsPhone) {
//                     newData.whatsappNumber = value;
//                 }

//                 return newData;
//             });
//         }

//         // Clear error for this field when user starts typing
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.name.trim()) {
//             newErrors.name = 'Name is required';
//         }

//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!validateEmail(formData.email)) {
//             newErrors.email = 'Please enter a valid email address';
//         }

//         if (!formData.phoneNumber.trim()) {
//             newErrors.phoneNumber = 'Phone number is required';
//         } else if (!validatePhone(formData.phoneNumber)) {
//             newErrors.phoneNumber = 'Please enter a valid phone number';
//         }

//         if (!formData.whatsappNumber.trim()) {
//             newErrors.whatsappNumber = 'WhatsApp number is required';
//         } else if (!validatePhone(formData.whatsappNumber)) {
//             newErrors.whatsappNumber = 'Please enter a valid WhatsApp number';
//         }

//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 2000));

//             // Reset form on successful submission
//             setFormData({
//                 name: '',
//                 email: '',
//                 phoneNumber: '',
//                 whatsappNumber: '',
//                 message: '',
//                 sameAsPhone: false
//             });

//             alert('Form submitted successfully!');
//         } catch (error) {
//             alert('An error occurred. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-black flex items-center justify-center p-4">
//             <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto p-6 sm:p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
//                     Contact Us
//                 </h2>

//                 <div className="space-y-4 sm:space-y-6">
//                     {/* Name Field */}
//                     <div>
//                         <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
//                             Name *
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             className={`w-full px-4 py-3 sm:py-4 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
//                                 }`}
//                             placeholder="Enter your full name"
//                         />
//                         {errors.name && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name}</p>}
//                     </div>

//                     {/* Email Field */}
//                     <div>
//                         <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
//                             Email Address *
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             className={`w-full px-4 py-3 sm:py-4 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
//                                 }`}
//                             placeholder="Enter your email address"
//                         />
//                         {errors.email && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email}</p>}
//                     </div>

//                     {/* Phone Number Field */}
//                     <div>
//                         <label htmlFor="phoneNumber" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
//                             Phone Number *
//                         </label>
//                         <input
//                             type="tel"
//                             id="phoneNumber"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleInputChange}
//                             className={`w-full px-4 py-3 sm:py-4 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
//                                 }`}
//                             placeholder="Enter your phone number"
//                         />
//                         {errors.phoneNumber && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.phoneNumber}</p>}
//                     </div>

//                     {/* Same as Phone Checkbox */}
//                     <div className="flex items-center">
//                         <input
//                             type="checkbox"
//                             id="sameAsPhone"
//                             name="sameAsPhone"
//                             checked={formData.sameAsPhone}
//                             onChange={handleInputChange}
//                             className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 bg-gray-800 border-gray-600 rounded focus:ring-black focus:ring-2"
//                         />
//                         <label htmlFor="sameAsPhone" className="ml-3 block text-sm sm:text-base text-gray-300">
//                             WhatsApp number is same as phone number
//                         </label>
//                     </div>

//                     {/* WhatsApp Number Field */}
//                     <div>
//                         <label htmlFor="whatsappNumber" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
//                             WhatsApp Number *
//                         </label>
//                         <input
//                             type="tel"
//                             id="whatsappNumber"
//                             name="whatsappNumber"
//                             value={formData.whatsappNumber}
//                             onChange={handleInputChange}
//                             disabled={formData.sameAsPhone}
//                             className={`w-full px-4 py-3 sm:py-4 bg-white border rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 ${formData.sameAsPhone ? 'opacity-50 cursor-not-allowed' : ''
//                                 } ${errors.whatsappNumber ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'}`}
//                             placeholder="Enter your WhatsApp number"
//                         />
//                         {errors.whatsappNumber && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.whatsappNumber}</p>}
//                     </div>

//                     {/* Message Field */}
//                     <div>
//                         <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleInputChange}
//                             rows={4}
//                             className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 hover:border-gray-600 resize-vertical"
//                             placeholder="Enter your message (optional)"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         onClick={handleSubmit}
//                         disabled={isSubmitting}
//                         className={`w-full py-3 sm:py-4 px-6 rounded-full font-semibold text-sm sm:text-base text-gray-300 border-2 transition-all duration-300 ease-in-out transform hover:scale-105 ${isSubmitting
//                                 ? 'border-gray-600 bg-gray-800 cursor-not-allowed opacity-50'
//                                 : 'border-gray-600 bg-gray-800 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-gray-500/20 active:scale-95'
//                             }`}
//                     >
//                         {isSubmitting ? (
//                             <span className="flex items-center justify-center">
//                                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                 </svg>
//                                 Submitting...
//                             </span>
//                         ) : (
//                             'SUBMIT CONTACT'
//                         )}
//                     </button>
//                 </div>

//                 {/* Form Info */}
//                 <div className="mt-6 text-xs sm:text-sm text-gray-500 text-center">
//                     Fields marked with * are mandatory
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import vector6 from '../assets/Vector6.png';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import useInView from './UseInView'; // <-- path to hook

export default function ContactUs() {
    const formUrl = import.meta.env.VITE_GOOGLE_SCRIPTS_LINK;
    const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        whatsappSameAsPhone: true,
        whatsappNo: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked,
                // If checking "same as phone", copy phone to whatsapp
                whatsappNo: checked ? prev.phone : prev.whatsappNo
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                // If phone changes and whatsapp is same, update whatsapp too
                ...(name === 'phone' && prev.whatsappSameAsPhone ? { whatsappNo: value } : {})
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(formUrl, {
                method: "POST",
                mode: "no-cors", // important: avoids CORS issues
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            alert("Message sent successfully ✅");

            // Reset form after submission
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
                whatsappSameAsPhone: true,
                whatsappNo: ""
            });
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong ❌");
        }
    };


    return (
        <div className="min-h-screen bg-black flex flex-col items-center p-4 md:p-8">
            <div
            >
                <h1
                    className="text-white/40 text-3xl sm:text-4xl md:text-5xl [@media(min-width:1190px)]:text-[2.5rem] lg:text-5xl font-semibold tracking-wide"
                    style={{ fontFamily: 'Constantine' }}
                >
                    <span className="text-white" style={{ fontFamily: 'Constantine' }}>
                        Contact Us
                    </span>
                </h1>
                <img
                    src={vector6}
                    alt="Decorative line"
                    className="w-[200px] sm:w-[240px] md:w-[340px] xl:w-[339px] [@media(min-width:1190px)]:w-[330px]  sm:mt-2 md:mt-[15px] mx-auto -ml-1 lg:-ml-4"
                />
                <span
                    className={`font-light text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[100%] text-white/80 tracking-normal capitalize w-full max-w-[448px] h-auto md:h-[76px] mx-auto ${sectionInView ? 'animate-slide-up' : 'opacity-0'}`}
                    style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                >
                    We Favour Increasing The <br /> Visibility Of The Brands
                </span>
            </div>
            <div className="max-w-6xl mx-auto -mt-10 px-10 py-2">
                <div className="flex flex-col justify-center items-center">
                    {/* Left Panel - Contact Info */}


                    {/* Right Panel - Contact Form */}
                    <div className="bg-gray-900 rounded-3xl p-8 lg:p-12">
                        <div className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone No."
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* WhatsApp Section */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        id="whatsappSame"
                                        name="whatsappSameAsPhone"
                                        checked={formData.whatsappSameAsPhone}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label htmlFor="whatsappSame" className="text-gray-300 text-sm md:text-base">
                                        Mobile number is same as WhatsApp number
                                    </label>
                                </div>

                                {!formData.whatsappSameAsPhone && (
                                    <div>
                                        <input
                                            type="tel"
                                            name="whatsappNo"
                                            placeholder="WhatsApp Number"
                                            value={formData.whatsappNo}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all"
                                            required
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Write Message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}