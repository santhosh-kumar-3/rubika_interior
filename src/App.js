import React from "react";
import Navbar from "./components/sections/Navbar";
import HomePage from "../src/Pages/HomePage";
import Footer from "./components/sections/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetailPage from "./Pages/ServiceDetailPage";
import kitchenImg1 from './assets/kitchen-img.jpg';
import AboutPage from "./Pages/AboutPage";
import ContactusPage from "./Pages/ContactusPage";
import ScrollToTop from "./components/scroll/ScrollToTop";

const services = [
  {
    name: 'Kitchen',
    description: 'Designed to your vision, we craft unique interiors that bring elegance and functionality into every corner. Elevate your kitchen with our bespoke design solutions. We blend style and practicality to create personalized, beautiful spaces that suit your lifestyle and needs.',
    images: [
      kitchenImg1,
      kitchenImg1,
      kitchenImg1,
    ],
  },
  {
    name: 'Livingroom',
    description: 'Comfortable and stylish living room designs.',
    images: [
      'path/to/livingroom-image1.jpg',
      'path/to/livingroom-image2.jpg',
      'path/to/livingroom-image3.jpg',
    ],
  },
  {
    name: 'Bedroom',
    description: 'Cozy and tranquil bedroom designs.',
    images: [
      'path/to/bedroom-image1.jpg',
      'path/to/bedroom-image2.jpg',
      'path/to/bedroom-image3.jpg',
    ],
  },
  {
    name: 'Cabinetry',
    description: 'Custom cabinetry solutions for your home.',
    images: [
      'path/to/cabinetry-image1.jpg',
      'path/to/cabinetry-image2.jpg',
      'path/to/cabinetry-image3.jpg',
    ],
  },
];

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {services.map((service, index) => (
          <Route 
            key={index} 
            path={`/service/${service.name.toLowerCase()}`} 
            element={<ServiceDetailPage {...service} />} 
          />
        ))}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
