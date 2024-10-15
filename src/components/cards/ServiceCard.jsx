import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/service/${title.toLowerCase()}`);
  };

  return (
    <div>
      {/* Large screen */}
      <div
        className="hidden lg:block group w-[580px] h-[380px] font-robotoCondensed rounded-sm overflow-hidden cursor-pointer transform transition-transform duration-500"
        onClick={handleCardClick}
      >
        <div className="relative w-full h-full">
          {/* Use img tag here */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
          <div className="absolute bottom-0 w-full transform translate-y-2/3 transition-transform duration-500 group-hover:translate-y-10">
            <div className="px-6 bg-opacity-90">
              <h2 className="relative text-white w-fit text-[26px] uppercase mb-6">
                {title}
                <span className="absolute left-0 bottom-0 h-0.5 w-[75%] bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
              </h2>
              <p className="text-white opacity-85 transition-opacity duration-500 delay-700 group-hover:opacity-100 mt-[-10px] mb-4">
                {description}
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
        onClick={handleCardClick}
      >
        <div className="relative w-full mx-auto h-full">
          {/* Use img tag here */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
          <div className="absolute bottom-0 w-full">
            <div className="px-6 bg-opacity-90">
              <h2 className="relative text-white w-fit text-[20px] uppercase mb-6">
                {title}
                <span className="absolute left-0 bottom-0 h-0.5 w-[75%] bg-white"></span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
