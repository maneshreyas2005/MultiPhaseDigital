import React, { useState } from "react";
import vector6 from "../assets/Vector6.png";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import useInView from "./UseInView"; // <-- path to hook

export default function ContactUs() {
  const formUrl = import.meta.env.VITE_GOOGLE_SCRIPTS_LINK;
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    whatsappSameAsPhone: true,
    whatsappNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        // If checking "same as phone", copy phone to whatsapp
        whatsappNo: checked ? prev.phone : prev.whatsappNo,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        // If phone changes and whatsapp is same, update whatsapp too
        ...(name === "phone" && prev.whatsappSameAsPhone
          ? { whatsappNo: value }
          : {}),
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
        whatsappNo: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4 md:p-8">
      <div>
        <h1
          className="text-white/40 text-3xl sm:text-4xl md:text-5xl [@media(min-width:1190px)]:text-[2.5rem] lg:text-5xl font-semibold tracking-wide"
          style={{ fontFamily: "Constantine" }}
        >
          <span className="text-white" style={{ fontFamily: "Constantine" }}>
            Contact Us
          </span>
        </h1>
        <img
          src={vector6}
          alt="Decorative line"
          className="w-[200px] sm:w-[240px] md:w-[340px] xl:w-[330px] sm:mt-2 md:mt-[15px] mx-auto -ml-1 lg:-ml-4 xl:-ml-8"
        />
        <span
          className={`font-light text-xl sm:text-2xl md:text-[32px] leading-tight sm:leading-[100%] text-white/80 tracking-normal capitalize w-full max-w-[448px] h-auto md:h-[76px] mx-auto ${sectionInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
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
                  <label
                    htmlFor="whatsappSame"
                    className="text-gray-300 text-sm md:text-base"
                  >
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
