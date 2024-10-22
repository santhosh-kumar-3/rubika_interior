import React from "react";
import Navbar from "./components/sections/Navbar";
import HomePage from "../src/Pages/HomePage";
import Footer from "./components/sections/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetailPage from "./Pages/ServiceDetailPage";
import AboutPage from "./Pages/AboutPage";
import ContactusPage from "./Pages/ContactusPage";
import ScrollToTop from "./components/scroll/ScrollToTop";
import k2Img from "./assets/Kitchen/K2.jpg";
import l1Img from "./assets/living-room/LR1.jpg";
import br2Img from "./assets/Bedroom/BR2.jpg";
import c3Img from "./assets/Cabinetry/C3.jpg";

const services = [
  {
    name: "Kitchen",
    description:
      "Designed to your vision, we craft unique interiors that bring elegance and functionality into every corner. Elevate your kitchen with our bespoke design solutions. We blend style and practicality to create personalized, beautiful spaces that suit your lifestyle and needs.",
    images: [
      k2Img,
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000962/K5-main_vpw2nf.jpg",
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000963/K7-main_bm5vqf.jpg",
    ],
  },
  {
    name: "Livingroom",
    description:
      "Make your living room the heart of your home with our tailored interior solutions. We design spaces that are both welcoming and functional, reflecting your lifestyle and taste.",
    images: [
      l1Img,
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000995/LR6-main_wvtj7c.jpg",
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1728990051/LR1-main_rbuld4.jpg",
    ],
  },
  {
    name: "Bedroom",
    description:
      "Craft a personal sanctuary with our bespoke bedroom designs. We blend comfort, elegance, and smart space solutions to create a restful and stylish environment that reflects your vision.",
    images: [
      br2Img,
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001042/BR6-main_ce8jkn.jpg",
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001043/BR3-main_qozc16.jpg",
    ],
  },
  {
    name: "Cabinetry",
    description:
      "Elevate your storage with our custom cabinetry solutions. From modern to classic designs, we offer beautifully crafted pieces that enhance both the aesthetic and functionality of your space.",
    images: [
      c3Img,
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001022/CR4-main_elfydo.jpg",
      "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001022/CR6-main_enyjvq.jpg",
    ],
  },
];

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
