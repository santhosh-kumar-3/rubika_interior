import React from 'react'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Ourworks from '../components/sections/Ourworks'
import Aboutus from '../components/sections/Aboutus'
import Projectdone from '../components/sections/Projectdone'
import ContactUs from '../components/sections/ContactUs'
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <>
   
        <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Projectdone />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Services />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Ourworks />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Aboutus />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
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
