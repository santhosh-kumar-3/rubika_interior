import React, { useState } from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Ourworks from "../components/sections/Ourworks";
import Aboutus from "../components/sections/Aboutus";
import Projectdone from "../components/sections/Projectdone";
import ContactUs from "../components/sections/ContactUs";
import { motion } from "framer-motion";
import AllServices from "../components/sections/AllServices";
import { BsWhatsapp } from "react-icons/bs";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({
    projectDone: false,
    services: false,
    ourWorks: false,
    aboutUs: false,
    contactUs: false,
  });

  const handleScroll = (section) => {
    setIsVisible((prev) => ({
      ...prev,
      [section]: true,
    }));
  };

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/9677032701?text=Hello!%20I%20would%20like%20to%20contact%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-2 md:right-5 z-50 bg-green-500 text-white p-3.5 md:p-4 sm:p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <BsWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
      </a>

      <Hero />
      <Projectdone />
      <Services />
      <AllServices />
      <Ourworks />
      <Aboutus />
      <ContactUs />
    </>
  );
};

export default HomePage;
