import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projectdone = () => {
  const navigate = useNavigate();

  const animateCount = (start, end, setValue) => {
    let current = start;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      current += 1;
      setValue(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [uniqueDesigns, setUniqueDesigns] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  useEffect(() => {
    animateCount(0, 80, setProjectsCompleted);
    animateCount(0, 50, setUniqueDesigns);
    animateCount(0, 80, setHappyClients);
  }, []);

  const stats = [
    {
      id: 1,
      title: "Projects Completed",
      count: projectsCompleted,
      icon: "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729006914/projectdone-icon_fuuufo.png",
    },
    {
      id: 2,
      title: "Unique Designs",
      count: uniqueDesigns,
      icon: "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729903318/uniquedesign-icon_kas1mv.jpg",
    },
    {
      id: 3,
      title: "Happy Clients",
      count: happyClients,
      icon: "https://res.cloudinary.com/dh3zzrrng/image/upload/v1729903306/happycustomer-icon_hpqvkm.jpg",
    },
  ];

  return (
    <div className="h-auto w-full py-10 mx-auto flex flex-col lg:flex-row justify-between items-center font-robotoCondensed">
      {/* Left Content */}
      <div className="flex flex-col w-full lg:w-1/2 px-5 lg:pl-[10%] mb-8 lg:mb-0 ">
        <h2 className="text-[34px] md:text-[37px] lg:text-[45px] font-semibold text-center md:text-start w-full mb-5 leading-tight">
          We design homes to <br /> create timeless comfort
        </h2>

        <p className="text-[15px] md:text-[18px] text-center md:text-start lg:text-[20px] opacity-95 w-full lg:w-[95%] mb-6 leading-[1.7]">
          Welcome to Rubika Interiors, where creativity meets craftsmanship to
          transform your space. Explore our portfolio of stunning home interiors
          that blend style and functionality, bringing your vision of a perfect
          home to life.
        </p>

        <button
          onClick={() => navigate("/contact-us")}
          className="bg-dark border-[1px] w-[170px] md:w-[230px] mx-auto md:mx-0 text-white text-[16px] md:text-[18px] px-4 md:px-7 py-2 rounded-sm hover:opacity-90 hover:text-white transition-all"
        >
          Get a Quote
        </button>
      </div>

      {/* Right Content - Stats */}
      <div className="flex w-full lg:w-1/2 justify-center items-center">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-y-6 w-full h-full">
          {/* Top Row Stats */}
          <div className="flex justify-center col-span-2">
            {stats.slice(0, 2).map((stat) => (
              <div
                key={stat.id}
                className="bg-white md:w-[300px] lg:w-[320px] rounded-lg p-4 flex items-center space-x-4 mx-2"
              >
                {/* Icon */}
                <img
                  src={stat.icon}
                  alt="icon"
                  className="text-[40px] w-[80px]"
                  loading="lazy"
                />

                {/* Text and Animated Count */}
                <div className="flex flex-col">
                  <span className="md:text-[20px] lg:text-[22px] font-semibold">
                    {stat.title}
                  </span>
                  <motion.span
                    className="text-[26px] md:text-[30px] font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.count}+
                  </motion.span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row Stat - Centered */}
          <div className="flex items-center justify-center col-span-1 md:col-span-2">
            <div
              key={stats[2].id}
              className="bg-white w-[280px] md:w-[320px]  rounded-lg p-4 flex items-center space-x-4"
            >
              {/* Icon */}
              <img
                src={stats[2].icon}
                alt="icon"
                className="text-[40px] w-[80px]"
                loading="lazy"
              />

              {/* Text and Animated Count */}
              <div className="flex flex-col">
                <span className="text-[18px] md:text-[22px] font-semibold">
                  {stats[2].title}
                </span>
                <motion.span
                  className="text-[26px] md:text-[30px] font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {stats[2].count}+
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View for Stats */}
        <div className="flex flex-col items-center space-y-1 md:hidden">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white w-[280px] rounded-lg p-2 flex flex-col space-y-2 justify-center items-center"
            >
              {/* Icon */}
              <img
                src={stat.icon}
                alt="icon"
                className="text-[40px] w-[80px]"
                loading="lazy"
              />

              {/* Text and Animated Count */}
              <div className="flex flex-col self-center">
                <span className="text-[19px] md:text-[23px] font-semibold">
                  {stat.title}
                </span>
                <motion.span
                  className="text-[26px] md:text-[30px] font-bold self-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.count}+
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectdone;
