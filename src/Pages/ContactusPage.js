import React, { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactusPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_4sjuoax";
    const templateID = "template_fx16gqs";
    const userID = "RI5xM4k0SS-iWhZfe";

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
      },
      (error) => {
        console.log(error.text);
        setError("Something went wrong. Please try again.");
      }
    );

    e.target.reset();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-fit flex flex-col w-full pb-10 font-robotoCondensed">
      {/* Background Image - Mobile */}
      <img
        src="https://res.cloudinary.com/dh3zzrrng/image/upload/v1729002383/contact-us-mobile_cfmiqn.webp"
        alt="Contact Us Mobile"
        loading="lazy"
        className="w-full h-[55vh] object-cover block lg:hidden"
      />

      {/* Background Image - Larger Screens */}
      <img
        src="https://res.cloudinary.com/dh3zzrrng/image/upload/v1729002381/contact-us_qndy8u.webp"
        alt="Contact Us"
        loading="lazy"
        className="w-full h-[70vh] object-cover hidden lg:block"
      />

      {/* Main content */}
      <div>
        {/* For larger screens */}
        <div className="hidden lg:flex w-[80%] h-[120vh] flex-col justify-center mx-auto py-10">
          <h2 className="text-[52px] font-semibold text-start w-full pl-3 mb-6">
            Contact us
          </h2>
          <p className="text-[24px] font-normal text-start w-[60%] mb-12 leading-relaxed pl-3">
            Need more information? Drop us a line; we're happy to help.
          </p>

          <div className="flex h-[90vh] w-full">
            {/* Form Section */}
            <div className="w-[50%] h-full bg-light px-10 py-20 font-robotoCondensed">
              <form className="flex flex-col space-y-2" onSubmit={sendEmail}>
                <label className="text-[17px] font-medium">NAME</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-lg p-4 "
                  required
                  onChange={handleInputChange}
                />

                <label className="text-[17px] font-medium pt-4">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="border border-gray-300 rounded-lg p-4"
                  required
                  onChange={handleInputChange}
                />

                <label className="text-[17px] font-medium pt-4">MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  className="border border-gray-300 rounded-lg p-4"
                  required
                  onChange={handleInputChange}
                />

                <label className="pb-8"></label>

                <button
                  type="submit"
                  className="bg-black text-white w-[40%] py-4"
                >
                  Submit
                </button>

                {isSent && <p className="text-green-600 mt-4">Message sent!</p>}
                {error && <p className="text-red-600 mt-4">{error}</p>}
              </form>
            </div>

            {/* Right Content Section */}
            <div className="w-[50%] pl-44 h-full flex flex-col p-6">
              <div>
                <h1 className="text-[18px] tracking-widest uppercase">
                  Address
                </h1>
                <p className="text-[18px] mt-6">
                  No - 70A 3rd main road, 8th cross, Vivekananda Nagar,
                  <br />
                  Pallikaranai, Chennai-600100
                </p>
              </div>

              <div className="mt-12">
                <h1 className="text-[18px] tracking-widest uppercase">
                  Contact us
                </h1>
                <div className="flex text-[18px] flex-col mt-6">
                  <p>9176870710</p>
                  <p>rubikainterior@gmail.com</p>
                </div>
              </div>

              <div className="mt-12">
                <h1 className="text-[18px] tracking-widest uppercase">
                  Opening Hours
                </h1>
                <div className="flex text-[18px] flex-col mt-6">
                  <p>Monday – Friday: 10 a.m – 6:30 p.m</p>
                  <p>Saturday: 10 a.m – 4 p.m</p>
                </div>
              </div>

              <div className="mt-12">
                <h1 className="text-[18px] tracking-widest uppercase">
                  Follow us
                </h1>
                <div className="flex space-x-6 mt-6">
                  <a
                    href="https://www.instagram.com/rubika_interior/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[26px] hover:text-gray-300" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Moorthi-Moorthi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-[26px] hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For smaller screens */}
        <div className="lg:hidden flex flex-col mx-auto mt-10 w-[92%] h-fit">
          <h2 className="text-[45px] md:text-[52px] font-semibold text-start w-full ">
            Contact us
          </h2>

          <div className="pl-0 h-full flex flex-col p-6">
            <div>
              <h1 className="text-[18px] tracking-widest uppercase">Address</h1>
              <p className="text-[18px] mt-6">
                No - 70A 3rd main road, 8th cross, Vivekananda Nagar,
                <br />
                Pallikaranai, Chennai-600100
              </p>
            </div>

            <div className="mt-12">
              <h1 className="text-[18px] tracking-widest uppercase">
                Contact us
              </h1>
              <div className="flex text-[18px] flex-col mt-6">
                <p>9176870710</p>
                <p>rubikainterior@gmail.com</p>
              </div>
            </div>

            <div className="mt-12">
              <h1 className="text-[18px] tracking-widest uppercase">
                Opening Hours
              </h1>
              <div className="flex text-[18px] flex-col mt-6">
                <p>Monday – Friday: 10 a.m – 6:30 p.m</p>
                <p>Saturday: 10 a.m – 4 p.m</p>
              </div>
            </div>

            <div className="mt-12">
              <h1 className="text-[18px] tracking-widest uppercase">
                Follow us
              </h1>
              <div className="flex space-x-6 mt-6">
                <a
                  href="https://www.instagram.com/rubika_interior/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[26px] hover:text-gray-300" />
                </a>
                <a
                  href="https://www.facebook.com/people/Moorthi-Moorthi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-[26px] hover:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-[20px] font-normal text-start mt-4 mb-12 leading-relaxed">
            Need more information? Drop us a line; we're happy to help.
          </p>

          <div className="w-[95%] bg-light mx-auto h-full px-5 py-10 font-robotoCondensed">
            <form className="flex flex-col space-y-2" onSubmit={sendEmail}>
              <label className="text-[17px] font-medium">NAME</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                className="border border-gray-300 rounded-lg p-4 "
                required
                onChange={handleInputChange}
              />

              <label className="text-[17px] font-medium pt-4">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="border border-gray-300 rounded-lg p-4"
                required
                onChange={handleInputChange}
              />

              <label className="text-[17px] font-medium pt-4">MESSAGE</label>
              <textarea
                name="message"
                placeholder="Write your message"
                className="border border-gray-300 rounded-lg p-4"
                required
                onChange={handleInputChange}
              />

              <label className="pb-8"></label>

              <button
                type="submit"
                className="bg-black text-white w-[40%] py-4"
              >
                Submit
              </button>

              {isSent && <p className="text-green-600 mt-4">Message sent!</p>}
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusPage;
