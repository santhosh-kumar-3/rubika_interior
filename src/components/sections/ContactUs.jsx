import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light h-fit py-14 my-10 w-[90%] lg:w-full flex flex-col mx-auto justify-center font-robotoCondensed">
      <div className="w-[85%] lg:w-[80%] mx-auto">
        <h2 className="text-[40px] lg:text-[52px] text-start font-semibold w-full pl-3 mb-5">
          Contact Us
        </h2>
        <p className="text-[20px] lg:text-[24px] text-start font-normal lg:w-[50%] mb-12 leading-relaxed pl-3">
          Ready to transform your home? Contact us today for a consultation or
          to request a quote, and let us help you create the perfect space with
          Rubika Interior.
        </p>

        <button
          onClick={() => navigate("/contact-us")}
          className="bg-dark border-[1px] ml-3 border-white w-[230px] text-white text-[18px] px-7 py-3 rounded-sm hover:bg-white hover:text-black transition-all"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
