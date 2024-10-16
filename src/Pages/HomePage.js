import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Ourworks from '../components/sections/Ourworks';
import Aboutus from '../components/sections/Aboutus';
import Projectdone from '../components/sections/Projectdone';
import ContactUs from '../components/sections/ContactUs';
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

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
      <Hero />

      <motion.div
        initial={isVisible.projectDone ? "visible" : "hidden"}
        whileInView="visible"
        onViewportEnter={() => handleScroll('projectDone')}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Projectdone />
      </motion.div>

        <Services />

      
        <Ourworks />

      <motion.div
        initial={isVisible.aboutUs ? "visible" : "hidden"}
        whileInView="visible"
        onViewportEnter={() => handleScroll('aboutUs')}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Aboutus />
      </motion.div>

      <motion.div
        initial={isVisible.contactUs ? "visible" : "hidden"}
        whileInView="visible"
        onViewportEnter={() => handleScroll('contactUs')}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <ContactUs />
      </motion.div>
    </>
  );
};

export default HomePage;
