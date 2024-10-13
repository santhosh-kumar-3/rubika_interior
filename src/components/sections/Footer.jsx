import React, { useState } from "react";
import { motion } from "framer-motion";
import logoWhite from "../../assets/logo-white.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [hoveredServiceItem, setHoveredServiceItem] = useState(null);
  const [hoveredCompanyItem, setHoveredCompanyItem] = useState(null);
  const location = useLocation();

  const servicesItem = [
    { name: "Kitchen", href: "/service/kitchen/" },
    { name: "Livingroom", href: "/service/livingroom" },
    { name: "Bedroom", href: "/service/bedroom" },
    { name: "Cabinetry", href: "/service/cabinetry" },
  ];

  const companyItem = [
    { name: "Contact", href: "/contact-us/" },
    { name: "About", href: "/about-us/" },
  ];

  return (
    <div className="">
      <footer className="hidden md:block bg-dark w-full md:h-[94vh] lg:h-[84vh] md:py-10 lg:py-20 text-white font-robotoCondensed px-12 lg:px-40">
        <div className="container mx-autogrid md:grid-row-3 gap-7 lg:gap-10 flex flex-col">
          {/* first row Section */}
          <div className="h-[50%] w-full flex">
            <div className="w-[25%]">
              <a href="#">
                <img src={logoWhite} alt="Logo" className="w-40" />
              </a>
              <p className="mt-8 text-[20px]">
                At Rubika Interior, we turn your vision into reality with
                masterful craftsmanship and attention to detail.
              </p>
            </div>

            <div className="w-[75%] flex justify-evenly">
              <div>
                <h3 className="font-bold text-[21px] mb-4">SERVICES</h3>
                <ul className="flex flex-col space-y-3 text-[18px] uppercase">
                  {servicesItem.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setHoveredServiceItem(index)}
                      onMouseLeave={() => setHoveredServiceItem(null)}
                      className="relative"
                    >
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          // Prevent navigation if already on the same page
                          if (location.pathname === item.href) {
                            e.preventDefault();
                          }
                        }}
                        className="relative z-10"
                      >
                        {item.name}
                      </Link>
                      <motion.div
                        className="absolute left-0 h-0.5 top-[-2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredServiceItem === index ? "75%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[21px] mb-4">COMPANY</h3>
                <ul className="flex flex-col space-y-3 text-[18px] uppercase">
                  {companyItem.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setHoveredCompanyItem(index)}
                      onMouseLeave={() => setHoveredCompanyItem(null)}
                      className="relative"
                    >
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          // Prevent navigation if already on the same page
                          if (location.pathname === item.href) {
                            e.preventDefault();
                          }
                        }}
                        className="relative z-10"
                      >
                        {item.name}
                      </Link>
                      <motion.div
                        className="absolute left-0 h-0.5 top-[-2px] bg-white"
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredCompanyItem === index ? "75%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* second row Section */}
          <div className="mt-16 w-full flex">
            {/* FOLLOW US Section */}
            <div className="self-start relative w-[25%]">
              <h1 className="text-[18px] font-medium tracking-widest uppercase">
                FOLLOW US
              </h1>
              <div className="absolute top-[-6px] left-0 w-[23%] border-t-[2.5px] border-white"></div>

              {/* Icons Section */}
              <div className="flex space-x-6 mt-5">
                <a
                  href="https://www.instagram.com/rubika_interior/?igsh=MXV5bDV0ZHRnOTVpMA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[26px] hover:text-gray-300" />
                </a>
                <a
                  href="https://www.facebook.com/people/Moorthi-Moorthi/pfbid02XEv9zm4qstDk3mni2d2KiFNhCfro2d46ShNBFZGFNJtYmkiJMkWtGeuvf1Sn9gM5l/?rdid=gIr81f35yhn2dacI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMxYQBf7Z1mfJnERn%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-[26px] hover:text-gray-300" />
                </a>
              </div>
            </div>

            <div className="w-[75%] flex justify-evenly">
              <div>
                <div className="self-start relative ">
                  <h1 className="text-[18px] font-medium tracking-widest uppercase">
                    Address
                  </h1>
                  <div className="absolute top-[-6px] left-0 w-[12%] border-t-[2.5px] border-white"></div>
                </div>
                <p className="text-[18px] mt-4">
                  No - 70A 3rd main road 8th cross vivekananda nagar <br />
                  paillkarani Chennai-600100
                </p>
              </div>

              <div className="self-start relative ">
                <div>
                  <h1 className="text-[18px] font-medium tracking-widest uppercase">
                    Contact us
                  </h1>
                  <div className="absolute top-[-6px] left-0 w-[45%] border-t-[2.5px] border-white"></div>
                </div>
                <div className="flex text-[18px] flex-col mt-4">
                  <p>9176870710</p>
                  <p>rubikainterior@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* third row Section */}
          <div className="mt-5 w-full flex flex-col">
            <div className="border-t-[1px] border-gray-500 w-full"></div>

            <div className="w-full flex justify-between mt-4 text-[17px]">
              <h1>© Rubika Interior 2024. All Rights Reserved</h1>

              <h1 className="pr-16">
                Developed by{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  Santhoshkumar
                </a>
              </h1>
            </div>
          </div>
        </div>
      </footer>

      <footer className="md:hidden flex bg-dark w-full flex-col h-fit pt-14 pb-6 justify-center text-white font-robotoCondensed px-5">
        <a href="#">
          <img src={logoWhite} alt="Logo" className="w-36" />
        </a>
        <p className="mt-8 text-[18px]">
          At Rubika Interior, we turn your vision into reality with masterful
          craftsmanship and attention to detail.
        </p>

        <h3 className="font-semibold text-[18px] mb-2 mt-10">SERVICES</h3>
        <ul className="flex flex-col space-y-2 text-[17px] uppercase">
          {servicesItem.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredServiceItem(index)}
              onMouseLeave={() => setHoveredServiceItem(null)}
              className="relative"
            >
              <Link
                to={item.href}
                onClick={(e) => {
                  // Prevent navigation if already on the same page
                  if (location.pathname === item.href) {
                    e.preventDefault();
                  }
                }}
                className="relative z-10"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-[18px] mb-2 mt-10">COMPANY</h3>
        <ul className="flex flex-col space-y-2 text-[17px] uppercase">
          {companyItem.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredCompanyItem(index)}
              onMouseLeave={() => setHoveredCompanyItem(null)}
              className="relative"
            >
              <Link
                to={item.href}
                onClick={(e) => {
                  // Prevent navigation if already on the same page
                  if (location.pathname === item.href) {
                    e.preventDefault();
                  }
                }}
                className="relative z-10"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <div className="self-start relative ">
            <h1 className="text-[18px] font-medium tracking-widest uppercase">
              Address
            </h1>
            <div className="absolute top-[-6px] left-0 w-[18%] border-t-[2.5px] border-white"></div>
          </div>
          <p className="text-[17px] mt-2">
            No - 70A 3rd main road 8th cross vivekananda nagar <br />
            paillkarani Chennai-600100
          </p>
        </div>

        <div className="mt-10">
        <div className="self-start relative ">
          <h1 className="text-[18px] font-medium tracking-widest uppercase">
            Contact us
          </h1>
          <div className="absolute top-[-6px] left-0 w-[22%] border-t-[2.5px] border-white"></div>
        </div>
        <div className="flex text-[17px] flex-col mt-2">
          <p>9176870710</p>
          <p>rubikainterior@gmail.com</p>
        </div>
        </div>

        <div className="self-start relative mt-10">
          <h1 className="text-[18px] font-medium tracking-widest uppercase">
            FOLLOW US
          </h1>
          <div className="absolute top-[-6px] left-0 w-[58%] border-t-[2.5px] border-white"></div>

          {/* Icons Section */}
          <div className="flex space-x-6 mt-3">
            <a
              href="https://www.instagram.com/rubika_interior/?igsh=MXV5bDV0ZHRnOTVpMA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[26px] hover:text-gray-300" />
            </a>
            <a
              href="https://www.facebook.com/people/Moorthi-Moorthi/pfbid02XEv9zm4qstDk3mni2d2KiFNhCfro2d46ShNBFZGFNJtYmkiJMkWtGeuvf1Sn9gM5l/?rdid=gIr81f35yhn2dacI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FMxYQBf7Z1mfJnERn%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-[26px] hover:text-gray-300" />
            </a>
          </div>
        </div>

        <div className="mt-10 w-full flex flex-col">
            <div className="border-t-[1px] border-gray-500 w-full"></div>

            <div className="w-full flex flex-col justify-between mt-5 text-[17px]">
              <h1>© Rubika Interior 2024. All Rights Reserved</h1>

              <h1 className="mt-5">
                Developed by{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  Santhoshkumar
                </a>
              </h1>
            </div>
          </div>

          
      </footer>
    </div>
  );
};

export default Footer;
