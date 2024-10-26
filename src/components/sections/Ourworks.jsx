import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const tabData = {
  Kitchen: [
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000962/K5-main_vpw2nf.jpg",
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000963/K6-main_dtathi.jpg", 
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000962/K4-main_r6mnfq.jpg",
  ],
  Livingroom: [
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000995/LR6-main_wvtj7c.jpg", 
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1728990051/LR1-main_rbuld4.jpg", 
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729000995/LR5-main_eopgqb.jpg",
  ],
  Bedroom: [
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001043/BR3-main_qozc16.jpg", 
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001043/BR5-main_gikzyc.jpg", 
  ],
  Cabinetry: [
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001022/CR4-main_elfydo.jpg", 
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001022/CR6-main_enyjvq.jpg", 
    "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729001021/C7-main_nmobjz.jpg"
  ],
};

const SampleNextArrow = ({ onClick }) => {
  const screenWidth = window.innerWidth;

  // Set arrow size and position based on screen width
  const arrowSize = screenWidth < 768 ? 20 : 24; 

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: "translateY(-50%)",
        width: `${arrowSize}px`,
        height: `${arrowSize}px`,
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1,
      }}
      className="mobileS:bottom-[-8%] mobileS:right-[24%]"
    >
      <IoIosArrowForward color="#804c18" size={arrowSize} />
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  const screenWidth = window.innerWidth;

  // Set arrow size and position based on screen width
  const arrowSize = screenWidth < 768 ? 20 : 24; // smaller on mobile, larger on desktop
  const arrowPositionLeft = screenWidth < 768 ? "30%" : "37%";
  const arrowPositionBottom = screenWidth < 768 ? "-7%" : "-7.2%"; // adjust vertical position

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: "translateY(-50%)",
        width: `${arrowSize}px`,
        height: `${arrowSize}px`,
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1,
      }}
      className="mobileS:bottom-[-8%] mobileS:left-[24%]"
    >
      <IoIosArrowBack color="#804c18" size={arrowSize} />
    </div>
  );
};

const Ourworks = () => {
  const [selectedTab, setSelectedTab] = useState("Kitchen");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: "#22222266",
          margin: "0 5px",
        }}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="h-fit pb-12 md:pb-20 w-full md:w-[95%] lg:w-[80%] mx-auto flex flex-col items-center">
      <h2 className="text-[40px] md:text-[52px] font-semibold text-center md:text-start w-full md:pl-7 mobileS:mb-3 mb-5 md:mb-6">
        Our Works
      </h2>
      {/* Tabs */}
      <div className="flex w-[90%] overflow-x-auto no-scrollbar whitespace-nowrap space-x-5 md:space-x-6 pl-3 mb-4">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`text-[16px] md:text-[18px] ${
              selectedTab === tab
                ? "border-b-2 border-black uppercase font-semibold"
                : "uppercase font-semibold"
            } whitespace-nowrap`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Slider */}
      <div className="w-full md:w-[700px] lg:w-[1130px] relative mt-2 mobileS:px-4 mobileM:px-6 mobileL:px-8">
        <Slider {...settings}>
          {tabData[selectedTab].map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={selectedTab}
                loading="lazy"
                className="w-full mobileS:h-[350px] mobileM:h-[380px] md:max-h-[480px] lg:h-[520px] object-cover mb-5 md:mb-10"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Dots CSS */}
      <style jsx>{`
        .custom-dots {
          display: flex !important;
          justify-content: center;
        }
        .custom-dots li {
          margin: 0 5px;
        }
        .custom-dots li.slick-active div {
          background-color: black !important;
        }
      `}</style>
    </div>
  );
};

export default Ourworks;
