import React, { useState } from "react";
import HeroImg from "../../assets/heroimg.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false); 

  return (
    <div className="mobileS:h-[80vh] mobileM:h-[60vh] md:h-[97vh] w-full font-robotoCondensed relative">
      {/* Background Color before the image loads */}
      <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-90 z-0"></div>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={HeroImg}
          alt="description"
          loading="lazy"
          className={`w-full h-full object-cover absolute top-0 left-0 z-0 ${
            isImageLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/55 to-transparent z-5"></div>

      {/* Content */}
      <div className="w-[95%] md:w-full h-full flex flex-col justify-center pl-6 md:pl-12 lg:pl-36 pt-14 md:pt-24 relative z-10">
        <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-semibold text-white leading-tight mb-5">
          Transforming ideas <br />
          <span className="pl-0.5">into greatness</span>
        </h1>
        <p className="w-full md:w-[80%] lg:w-[40%] mb-7 md:mb-10 text-gray-200 text-sm md:text-base lg:text-lg">
          Transform your space with our expert interior design and renovation
          services, blending aesthetics and functionality to create personalized
          environments. Let us bring your vision to life, crafting interiors
          that inspire and elevate your everyday experiences.
        </p>

        <button
          onClick={() => navigate("/contact-us")}
          className="bg-black/20 border-[1px] border-white w-[150px] md:w-[150px] text-white text-[16px] md:text-[18px] px-4 md:px-7 py-2.5 rounded-sm hover:bg-primary hover:text-white transition-all"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;
