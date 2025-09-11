import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import ContactUs from "./components/contactus";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>

    // <div>
    //   <LandingPage/>
    // </div>
  );
}

export default App;
