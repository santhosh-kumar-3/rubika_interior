import React from "react";
import aboutbg2 from "../assets/bg-img2.jpg";
import aboutbg3 from "../assets/about-bg3.jpg";
import CountUp from "../components/count/CountUp";
import pricing from "../assets/reward.png";
import precision from "../assets/set-square.png";
import quality from "../assets/high-quality.png";
import design from "../assets/color-selection.png";
import durability from "../assets/efficiency.png";
import chat from "../assets/chat.png";
import ContactUs from "../components/sections/ContactUs";
import { useNavigate } from "react-router-dom";

const values = [
  {
    name: "competitive pricing",
    icon: pricing,
  },
  {
    name: "high precision",
    icon: precision,
  },
  {
    name: "High Quality",
    icon: quality,
  },
  {
    name: "Custom Design",
    icon: design,
  },
  {
    name: "durability",
    icon: durability,
  },
  {
    name: "Client-oriented",
    icon: chat,
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-fit flex flex-col w-full font-robotoCondensed ">
      <img
        src={aboutbg3}
        alt="description"
        className="w-full h-[55vh] md:h-[70vh] object-cover top-0 left-0 z-0"
      />

      <div className="w-full flex flex-col justify-center md:h-[650px] text-dark relative">
        <div className="hidden md:block absolute right-0 bottom-0 w-[18%]">
          <img src={aboutbg2} alt="img" className="w-[165px] h-[520px]" />
        </div>
        <div className="hidden md:block absolute right-0 mt-[12%] w-[37%]">
          <img src={aboutbg3} alt="img" className="w-[400px] h-[520px]" />
        </div>

        {/* main-content */}
        <div className="w-[93%] md:w-[80%] h-[70%] mx-auto md:pl-3 relative z-40 mb-14 ">
          <h2 className="text-[45px] md:text-[52px] mt-10 md:mt-0 font-semibold text-start w-full md:pl-3 mb-4">
            About Us
          </h2>
          <p className="text-[20px] md:text-[24px] font-normal text-start md:w-[60%] mb-4 leading-relaxed md:pl-3">
            At Bespoke Carpentry we are dedicated to bringing your woodworking
            dreams to reality. With a commitment to craftsmanship, integrity,
            and innovation, we strive to exceed your expectations with every
            project.
          </p>
          <p className="text-[20px] md:text-[24px] font-normal text-start md:w-[52%] mb-8 md:mb-10 leading-relaxed md:pl-3">
            Our young yet dynamic company has successfully completed numerous
            projects worldwide, ranging in complexity and always with a focus on
            earning and maintaining each client's trust.
          </p>

          {/* Count Content */}
          <div className="flex flex-col items-center md:flex-row text-[18px] pl-3 font-medium gap-6 md:gap-20 mb-10">
            <div className="text-center md:text-start">
              <h3>YEARS OF EXPERIENCE</h3>
              <CountUp endValue={10} duration={2000} />
            </div>
            <div className="text-center md:text-start">
              <h3>COMPLETED PROJECTS</h3>
              <CountUp endValue={60} duration={2000} />
            </div>
          </div>

          <button
            onClick={() => navigate("/contact-us")}
            className="bg-dark border-[1px] md:ml-1 mt-4 border-white w-full md:w-[230px] text-white text-[19px] px-7 py-3 rounded-sm hover:opacity-85 transition-all"
          >
            Get a Quote
          </button>
        </div>
      </div>

      <div className="md:mt-28 w-[93%] md:w-[80%] mx-auto pb-16">
        <h2 className="text-[45px] md:text-[52px] font-semibold text-start w-full pl-3 mb-3 md:mb-6">
          Our Values
        </h2>
        <p className="text-[20px] md:text-[24px] font-normal text-start md:w-[60%] mb-8 md:mb-12 leading-relaxed pl-3">
          We pride ourselves on offering competitive pricing without
          compromising on quality. Every project we undertake is crafted with
          the highest standards of excellence, ensuring durable and beautiful
          results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-14 mb-[-30px]">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-[79px] h-[78px] md:w-[89px] md:h-[88px] mb-5"
              />
              <h1 className="text-[22px] uppercase">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default AboutPage;
