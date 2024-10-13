import React from "react";
import aboutbg from "../../assets/about-bg.png";
import aboutbg2 from "../../assets/bg-img2.jpg";
import aboutbg3 from "../../assets/about-bg3.jpg";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hidden md:flex h-[120vh] w-full py-10 font-robotoCondensed items-center">
        <div className="hidden lg:absolute z-10 left-0">
          <img src={aboutbg} alt="bgImg" className="w-full h-[800px]" />
        </div>

        <div className="bg-black w-full flex flex-col justify-center h-[600px] text-white relative">
          <div className="absolute right-6 top-[-5%] lg:bottom-0 w-[25%] lg:w-[27%]">
            <img src={aboutbg2} alt="img" className="w-[220px] h-[480px] lg:w-[298px] lg:h-[702px]" />
          </div>
          <div className="absolute right-10 top-10 w-[38%]">
            <img src={aboutbg3} alt="img" className="w-[280px] h-[480px] lg:w-[416px] lg:h-[600px]" />
          </div>

          <div className="w-[95%] lg:w-[80%] h-[70%] mx-auto lg:pl-3 relative z-40 ">
            <h2 className="text-[52px] font-semibold text-start w-full pl-3 mb-14">
              About Us
            </h2>
            <p className="text-[24px] font-semibold text-start w-[50%] mb-10 leading-relaxed pl-3">
              We are dedicated to bringing your woodworking dreams to reality.
              With a commitment to craftsmanship, integrity, and innovation, we
              strive to exceed your expectations with every project.
            </p>
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-white border-[1px] ml-3 border-white w-[230px] text-black text-[18px] px-7 py-3 rounded-sm hover:bg-primary hover:text-white transition-all"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mobileS:h-[70vh] mobileM:h-[65vh] mobileL:h-[60vh] flex flex-col font-robotoCondensed text-white text-opacity-90 justify-center bg-dark md:hidden">
        <h2 className="text-[40px] font-semibold text-start w-full pl-3 mb-6">
          About Us
        </h2>
        <p className="text-[20px] font-semibold text-start mb-10 pl-3">
          We are dedicated to bringing your woodworking dreams to reality. With
          a commitment to craftsmanship, integrity, and innovation, we strive to
          exceed your expectations with every project.
        </p>
        <button
          onClick={() => navigate("/contact-us")}
          className="bg-white border-[1px] border-white mobileS:w-[290px] mobileM:w-[345px] mobileL:w-[400px] self-center text-black text-[18px] px-7 py-2.5 rounded-sm hover:bg-primary hover:text-white transition-all"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
