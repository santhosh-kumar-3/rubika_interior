import React, { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Ourworks from "../components/sections/Ourworks";
import Aboutus from "../components/sections/Aboutus";
import Projectdone from "../components/sections/Projectdone";
import ContactUs from "../components/sections/ContactUs";
import { motion } from "framer-motion";
import AllServices from "../components/sections/AllServices";
import { BsWhatsapp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import br1 from "../assets/Bedroom/BR1.jpg";

const HomePage = () => {
  
  const navigate = useNavigate();
  
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

  // Preload all images on component mount
  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image; // This will load the image in the background
    });
  }, []);

  const handleCardClick = (title) => {
    navigate(`/service/${title.toLowerCase()}`);
  };

  const services = [
    {
      title: "Bedroom",
      description:
        "Create your dream bedroom with our custom carpentry services. We design and build beds, wardrobes, and more, tailored to fit your style and space perfectly.",
      image: br1,
    },
    {
      title: "Kitchen",
      description:
        "Design and build the perfect kitchen with our bespoke services. We create kitchen units that maximize functionality and style.",
      image:
        "https://res.cloudinary.com/dh3zzrrng/image/upload/v1728989977/K1_j4xywm.jpg",
    },
    {
      title: "Livingroom",
      description:
        "Create your dream bedroom with our custom carpentry services. We design and build beds, wardrobes, and more, tailored to fit your style and space perfectly.",
      image:
        "https://res.cloudinary.com/dh3zzrrng/image/upload/v1728990051/LR1_piwgsp.jpg",
    },
    {
      title: "Cabinetry",
      description:
        "Design and build the perfect kitchen with our bespoke services. We create kitchen units that maximize functionality and style.",
      image:
        "https://res.cloudinary.com/dh3zzrrng/image/upload/v1728990033/C1_gyugi9.jpg",
    },
  ];

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

      {/* service */}
      <div className="h-fit w-full pb-5 md:pb-10 font-robotoCondensed">
        {/* Title */}
        <h1 className="text-center text-[40px] md:text-[52px] font-semibold mb-5 lg:mb-14">
          Services
        </h1>

        {/* Grid Layout for Service Cards */}
        <div className="container mx-auto w-fit">
          <div className="grid grid-cols-1 sm:grid-cols-2 pb-7 gap-y-5 md:gap-y-8 md:gap-x-3 lg:gap-x-10 justify-center">
            {services.map((service, index) => (
              <div key={index}>
                {/* Large screen */}
                <div
                  className="hidden lg:block group w-[580px] h-[380px] font-robotoCondensed rounded-sm overflow-hidden cursor-pointer transform transition-transform duration-500"
                  onClick={() => handleCardClick(service.title)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
                    <div className="absolute bottom-0 w-full transform translate-y-2/3 transition-transform duration-500 group-hover:translate-y-10">
                      <div className="px-6 bg-opacity-90">
                        <h2 className="relative text-white w-fit text-[26px] uppercase mb-6">
                          {service.title}
                          <span className="absolute left-0 bottom-0 h-0.5 w-[75%] bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
                        </h2>
                        <p className="text-white opacity-85 transition-opacity duration-500 delay-700 group-hover:opacity-100 mt-[-10px] mb-4">
                          {service.description}
                        </p>
                        <a
                          href="#"
                          className="inline-block text-neutral-900 bg-accent px-4 py-2 rounded-md transition-colors duration-300 hover:bg-neutral-100"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* For smaller devices */}
                <div
                  className="lg:hidden mobileS:w-[300px] mobileM:w-[340px] mobileL:w-[400px] md:w-[350px] h-[260px] md:h-[290px] mx-auto font-robotoCondensed rounded-sm"
                  onClick={() => handleCardClick(service.title)}
                >
                  <div className="relative w-full mx-auto h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
                    <div className="absolute bottom-0 w-full">
                      <div className="px-6 bg-opacity-90">
                        <h2 className="relative text-white w-fit text-[20px] uppercase mb-6">
                          {service.title}
                          <span className="absolute left-0 bottom-0 h-0.5 w-[75%] bg-white"></span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AllServices />
      <Ourworks />
      <Aboutus />
      <ContactUs />
    </>
  );
};

export default HomePage;
