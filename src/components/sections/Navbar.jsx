import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services", isDropdown: true },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  const servicesList = [
    { name: "Kitchen", href: "/service/kitchen" },
    { name: "Livingroom", href: "/service/livingroom" },
    { name: "Bedroom", href: "/service/bedroom" },
    { name: "Cabinetry", href: "/service/cabinetry" },
  ];

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
    if (menuItems[index].isDropdown) {
      clearTimeout(dropdownTimeout);
      setDropdownVisible(true);
    }
  };

  const handleMouseLeave = (index) => {
    if (menuItems[index].isDropdown) {
      const timeout = setTimeout(() => {
        setDropdownVisible(false);
        setHoveredItem(null);
      }, 200);
      setDropdownTimeout(timeout);
    } else {
      setHoveredItem(null);
    }
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setHoveredItem(0);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-18 transition-all duration-300 font-robotoCondensed ${
        navbarBg
          ? "bg-white shadow-md text-black"
          : "text-white bg-gradient-to-b from-black/80 via-transparent/15 lg:via-transparent/55 to-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <a href="/">
            <img
              src={navbarBg ? logoBlack : logoWhite}
              alt="Logo"
              className="w-32 lg:w-40"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex ml-28 items-center">
          <ul className="flex space-x-10 text-[20px] uppercase">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="relative "
              >
                <a href={item.href} className="relative z-10 flex items-center">
                  {item.name}
                  {item.isDropdown && (
                    <MdKeyboardArrowDown size={23} className="ml-1 mr-[-8px]" />
                  )}
                </a>
                <motion.div
                  className={`absolute left-0 h-0.5 top-[-2px] ${
                    navbarBg ? "bg-primary" : "bg-white"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredItem === index ? "75%" : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Dropdown for Services */}
                {item.isDropdown && dropdownVisible && (
                  <div
                    className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg z-30"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <ul className="flex flex-col p-2 space-y-1">
                      {servicesList.map((service, idx) => (
                        <li key={idx}>
                          <a
                            href={service.href}
                            className="block px-4 py-2 text-[16px] hover:bg-gray-200 transition-colors duration-200"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Button and Hamburger Menu Wrapper */}
        <div className="flex items-center ml-auto space-x-2">
          {/* Get a Quote Button */}
          <button
            onClick={() => navigate("/contact-us")}
            className="hidden md:block bg-primary text-white text-[18px] mr-5 px-6 py-2 rounded-none hover:opacity-90"
          >
            Get a Quote
          </button>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className={`lg:hidden ${
              navbarBg ? "text-black" : "text-white"
            } focus:outline-none`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <RxCross2 className="w-7 h-7" />
            ) : (
              <RxHamburgerMenu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-[66px] left-0 w-full bg-white text-black shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col p-4 space-y-7">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {/* Updated button for Services */}
                  <button
                    onClick={() => {
                      if (item.isDropdown) {
                        setIsServicesDropdownOpen(!isServicesDropdownOpen);
                      } else {
                        navigate(item.href); // Use navigate for client-side navigation
                        setIsMobileMenuOpen(false); // Close mobile menu after navigation
                      }
                    }}
                    className="text-[18px] uppercase w-fit text-left flex items-center justify-between"
                  >
                    {item.name}
                    {item.isDropdown && (
                      <MdKeyboardArrowDown
                        size={23}
                        className={`ml-1 transition-transform ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Sub-dropdown for Services in Mobile */}
                  {item.isDropdown && isServicesDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {servicesList.map((service, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              navigate(service.href); 
                              setIsMobileMenuOpen(false);
                            }}
                            className="block px-4 py-1.5 text-[17px] uppercase"
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
