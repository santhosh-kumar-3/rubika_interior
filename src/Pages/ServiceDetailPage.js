import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetailPage = ({ name, description, images }) => {

  const navigate = useNavigate();

  return (
    <div className="h-fit flex flex-col w-full font-robotoCondensed pb-10">
      <img
        src={images[0]}
        alt="description"
        className="w-full h-[60vh] md:h-[70vh] object-cover top-0 left-0 z-0"
      />

      {/* Main content */}
      <div className="w-[93%] md:w-[85%] lg:w-[70%] h-[350px] mx-auto mt-5 md:mt-10 flex">
        {/* Vertical Line 1 */}
        <div className="hidden md:block border-l-[1.6px] border-black h-44 mt-24 mr-4"></div>

        {/* Vertical Line 2 */}
        <div className="hidden md:block border-l-[1.6px] border-black h-44 mt-16 mr-10"></div>

        <div className="flex flex-col">
          <h2 className="text-[45px] md:text-[50px] lg:text-[55px] font-semibold text-start w-full mt-5">
            {name}
          </h2>

          <p className="text-[20px] md:text-[20px] lg:text-[22px] lg:w-[60%] leading-relaxed mt-2 md:mt-3">
            {description}
          </p>

          <button
            onClick={() => navigate('/contact-us')}
            className="bg-dark border-[1px] w-full md:w-fit mt-5 px-14 py-2.5 text-white text-[16px] md:text-[18px] rounded-sm hover:opacity-90 hover:text-white transition-all"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Our Works Section */}
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mobileS:mt-24 mobileM:mt-14 mobileL:mt-12 md:mt-2 lg:mt-10 mb-5 md:mb-10">
        <h2 className="text-[40px] md:text-[50px] lg:text-[55px] font-semibold text-start mb-3 md:mb-6">
          Our Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
          <div className="col-span-1 md:col-span-2">
            <img
              src={images[0]}
              alt="work-0"
              className="w-full h-[350px] md:h-[380px] lg:h-[400px] object-cover"
            />
          </div>
          {images.slice(1, 5).map((img, index) => (
            <div key={index} className="col-span-1">
              <img
                src={img}
                alt={`work-${index + 1}`}
                className="w-full h-[350px] md:h-[380px] lg:h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
