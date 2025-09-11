// import React from 'react';
// import Logo from '../assets/Logo.svg';
// import logo1 from '../assets/logo1.svg';
// import logo2 from '../assets/logo2.svg';
// import logo3 from '../assets/logo3.svg';

// export default function MultiphaseFooter() {
//     return (
//         <footer className="w-full bg-black text-white py-12 px-6">

//             <div className="max-w-6xl mx-auto text-center">

//                 {/* Logo */}
//                 <div className="mb-7 flex justify-center items-center">
//                     <img
//                         src={Logo}
//                         alt="Company Logo"
//                         className="w-40 sm:w-56 md:w-[230px] h-auto"
//                     />
//                 </div>

//                 {/* Main Heading */}
//                 <div className="mb-14 md:mb-12 px-2">
//                     <h2 className="min-[377px]:text-[1.1rem] sm:text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-snug md:leading-tight mb-2">
//                         Drop us a line or two, we are open for
//                     </h2>
//                     <h2 className="min-[377px]:text-[1.1rem] sm:text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-snug md:leading-tight">
//                         creative minds and collaborations!
//                     </h2>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="mb-6">
//                     <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:space-x-12 text-sm sm:text-base md:text-lg">
//                         <li>
//                             <a href="#Testimonial" className="hover:text-orange-400 transition-colors duration-200">
//                                 Review
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#Services" className="hover:text-orange-400 transition-colors duration-200">
//                                 Services
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#OurPartners" className="hover:text-orange-400 transition-colors duration-200">
//                                 Our Partner
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#OurPresence" className="hover:text-orange-400 transition-colors duration-200">
//                                 Our Achievements
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Bottom Section */}
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-8 border-t border-gray-800 space-y-6 lg:space-y-0">

//                     {/* Copyright */}
//                     <div className="text-gray-400 text-xs sm:text-sm">
//                         © Copyright 2022, All Rights Reserved
//                     </div>

//                     {/* Social Media Icons */}
//                      <div className="flex justify-center space-x-4 mb-4 md:mb-0">
//                         <a href="https://in.linkedin.com/company/multiphase-digital-india" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
//                              {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                              </svg> */}
//                             <svg
//                                 className="w-4 h-4"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7S-1 5.43-1 3.5 0.57 0 2.5 0s2.48 1.57 2.48 3.5zM.02 8.98H5V24H.02V8.98zM8.54 8.98H13v2.05h.07c.62-1.18 2.13-2.42 4.39-2.42 4.69 0 5.56 3.08 5.56 7.09V24H18V16.5c0-1.78-.03-4.08-2.49-4.08-2.5 0-2.89 1.92-2.89 3.95V24H8.54V8.98z" />
//                             </svg>

//                          </a>
//                         <a
//                             href="https://www.facebook.com/MultphaseDigital/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
//                         >
//                             <svg
//                                 className="w-5 h-5"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.414c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.507 0-1.8.717-1.8 1.765v2.314h3.6l-.468 3.296h-3.132V24h6.144C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
//                             </svg>
//                         </a>

//                         <a
//                             href="https://www.instagram.com/multiphase_digital/?hl=en"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 text-white"
//                         >
//                             <svg
//                                 className="w-5 h-5"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
//                             </svg>
//                         </a>

//                      </div>

//                     {/* Legal Links */}
//                     <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400">
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

import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";

export default function MultiphaseFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const privacyPolicyContent = `
# Privacy Policy

**Last Updated: 31 August 2025**

Welcome to Multiphase Digital (“we,” “us,” “our,” “Company”). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website (multiphasedigital.com) and use our services.

## 1. Information We Collect

We may collect the following categories of personal data:

- **Contact Information**: Name, email address, phone number when you contact us or submit inquiries.
- **Usage and Device Data**: IP address, browser type/version, pages visited, time spent on site, device type, and cookies collected automatically via analytics tools.
- **Marketing Data**: Preferences for receiving newsletters or communications.
- **Professional Details**: Company name, business role when provided for services or onboarding.

## 2. How We Use Your Information

We utilize your data for purposes such as:

- Responding to your inquiries and providing our communications/PR services.
- Delivering insights, newsletters, marketing messages (only if consented).
- Optimizing our website and enhancing user experience through analytics.
- Protecting our site and services (e.g., security, fraud detection).
- Fulfilling legal and regulatory obligations.

## 3. Legal Basis for Processing

Under applicable Indian law and international privacy standards:

- Processing is necessary for legitimate business purposes (e.g., responding to requests, improving services).
- With your consent, where applicable (e.g., marketing communications).
- To comply with legal requirements.

## 4. Cookies & Tracking Technologies

Our site may use cookies and similar tools:

- Necessary cookies for site functionality.
- Analytical/Performance cookies to understand usage and improve our services.

You may manage cookie preferences through your browser settings or any opt-out options provided on our site.

## 5. Data Sharing & Disclosure

We do not sell your personal data. We may share information:

- With trusted service providers (e.g., hosting, analytics) under confidentiality protections.
- When legally required (e.g., law enforcement, court orders).
- In the event of business transfers (e.g., merger or sale), with notice to you.

## 6. Data Retention

We retain your personal data only as long as needed for the purposes outlined here or as required by law. When no longer needed, your information will be securely deleted.

## 7. Your Rights

Depending on your jurisdiction, you may have rights including:

- To access and receive a copy of your data.
- To correct inaccuracies.
- To request deletion.
- To withdraw consent for marketing messages.

To exercise these rights, please contact us at the details below.

## 8. International Data Transfers

As an organization operating in India serving clients globally, your data may be transferred internationally. We ensure that appropriate safeguards—such as standard contractual clauses—are in place to protect your data during such transfers.

## 9. Security

We strive to maintain the security of your data using appropriate technical and organizational measures. However, no method is completely impervious; please be aware of this inherent risk.

## 10. Third-Party Integrations

We may embed or link to third-party services (e.g., email platforms, analytics providers, reCAPTCHA). These third parties have their own privacy policies and practices. For example, our website employs Google reCAPTCHA for spam protection, governed by Google’s Privacy Policy and Terms of Service.

## 11. Children’s Privacy

Our services are not intended for children under 13 years of age. If aware that a child has provided us personal data without parental consent, we will promptly remove it.

## 12. Policy Updates

We may periodically update this Privacy Policy. Any changes will be reflected by revising the “Last Updated” date and, where significant, will be communicated via prominent notices on our site.

## 13. Contact Us

For questions, requests, or to exercise your privacy rights, please contact:

**Address**: Multiphase Digital, Mumbai, Maharashtra, India
`;

  const termsConditionsContent = `
# Terms & Conditions

**Last Updated: 31 August 2025**

Welcome to Multiphase Digital (“Company,” “we,” “our,” “us”). These Terms & Conditions (“Terms”) govern your use of our website (multiphasedigital.com) and any services, content, or features provided by us. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.

## 1. Use of the Website
You agree to use our website only for lawful purposes.  

You shall not attempt to:  
- Access data not intended for you.  
- Breach security or authentication measures.  
- Introduce viruses, trojans, worms, or other malicious material.  
- Use the website for fraudulent or harmful activity.  

## 2. Intellectual Property Rights
All content, logos, designs, text, graphics, images, and other materials on this website are the property of Multiphase Digital or its licensors.  

You may not copy, modify, reproduce, republish, or distribute any content without prior written consent.  

Any unauthorized use of intellectual property may result in legal action.  

## 3. Services
Multiphase Digital provides digital marketing, PR, social media management, branding, and related services.  

- Service details, pricing, timelines, and deliverables will be specified in separate agreements or contracts with clients.  
- We reserve the right to modify, suspend, or discontinue any service at any time without notice.  

## 4. Client Responsibilities
- Clients are responsible for providing accurate, lawful, and complete information required for project execution.  
- Clients must ensure that any content provided (logos, text, media, etc.) does not infringe on third-party rights.  
- Delays in providing required information or approvals may impact project timelines.  

## 5. Payments & Refunds
- Payment terms will be defined in each project proposal or agreement.  
- Unless otherwise stated, all payments are non-refundable once services have commenced.  
- Late payments may attract interest or suspension of services until cleared.  

## 6. Third-Party Links & Tools
Our website may include links to third-party websites or tools.  
We are not responsible for the content, privacy, or practices of such third parties.  
Use of any third-party service is at your own risk and subject to their respective terms.  

## 7. Limitation of Liability
We make reasonable efforts to ensure accuracy of website content, but we do not guarantee error-free, uninterrupted, or secure access.  

To the maximum extent permitted by law, Multiphase Digital will not be liable for:  
- Any direct, indirect, incidental, or consequential damages arising from use of our website or services.  
- Losses caused by third-party actions, technical issues, or force majeure events.  

## 8. Indemnification
You agree to indemnify and hold harmless Multiphase Digital, its employees, directors, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your:  
- Use of our website or services.  
- Violation of these Terms.  
- Infringement of any third-party rights.  

## 9. Privacy
Our collection and use of personal data are governed by our [Privacy Policy], available on our website. By using our website, you consent to such collection and use.  

## 10. Termination
We may suspend or terminate your access to our website or services at our sole discretion if:  
- You breach these Terms.  
- Your actions harm or threaten the security of our systems or reputation.  

## 11. Governing Law & Jurisdiction
These Terms shall be governed by the laws of India.  
Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.  

## 12. Updates to Terms
We may update these Terms from time to time. The revised Terms will be posted on our website with an updated “Last Updated” date. Continued use of our website after changes constitutes acceptance of the new Terms.  

## 13. Contact Us
For questions regarding these Terms, please contact:  

**Email**: [Insert Contact Email]  
**Address**: Multiphase Digital, Mumbai, Maharashtra, India  
`;

  return (
    <>
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
            <h2 className="min-[377px]:text-[1.1rem] sm:text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-snug md:leading-tight mb-2">
              Drop us a line or two, we are open for
            </h2>
            <h2 className="min-[377px]:text-[1.1rem] sm:text-3xl md:text-4xl lg:text-[2.2rem] font-bold leading-snug md:leading-tight">
              creative minds and collaborations!
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:space-x-12 text-sm sm:text-base md:text-lg">
              <li>
                <a
                  href="#Testimonial"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  href="#Services"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#OurPartners"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Our Partner
                </a>
              </li>
              <li>
                <a
                  href="#OurPresence"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Our Achievements
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

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-4 md:mb-0">
              <a
                href="https://in.linkedin.com/company/multiphase-digital-india"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7S-1 5.43-1 3.5 0.57 0 2.5 0s2.48 1.57 2.48 3.5zM.02 8.98H5V24H.02V8.98zM8.54 8.98H13v2.05h.07c.62-1.18 2.13-2.42 4.39-2.42 4.69 0 5.56 3.08 5.56 7.09V24H18V16.5c0-1.78-.03-4.08-2.49-4.08-2.5 0-2.89 1.92-2.89 3.95V24H8.54V8.98z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/MultphaseDigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.414c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.507 0-1.8.717-1.8 1.765v2.314h3.6l-.468 3.296h-3.132V24h6.144C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/multiphase_digital/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400">
              <button
                onClick={() => openModal(privacyPolicyContent)}
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal(termsConditionsContent)}
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-600 text-white max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-800"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="prose prose-sm sm:prose-base max-w-none">
              {modalContent.split("\n").map((line, index) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-2xl font-bold mt-4 mb-2">
                      {line.replace("# ", "")}
                    </h1>
                  );
                } else if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-xl font-semibold mt-3 mb-1">
                      {line.replace("## ", "")}
                    </h2>
                  );
                } else if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-4">
                      {line.replace("- ", "")}
                    </li>
                  );
                } else if (line.trim() !== "") {
                  return (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
