import React from "react";
import ceiling from "../../assets/all-services/ceiling.png";
import plug from "../../assets/all-services/plug.png";
import steel from "../../assets/all-services/bar.png";
import wallpaper from "../../assets/all-services/wallpaper.png";
import plumbing from "../../assets/all-services/plumbing.png";
import carpentry from "../../assets/all-services/hand-saw.png";
import solarPanel from "../../assets/all-services/solar-energy.png";
import gridCeiling from "../../assets/all-services/vent.png";
import wood from "../../assets/all-services/wood.png";
import cctvCamera from "../../assets/all-services/cctv-camera.png";
import paintings from "../../assets/all-services/paint-roller.png";
import aluminum from "../../assets/all-services/roll.png";
import fabrication from "../../assets/all-services/steel.png";
import doors from "../../assets/all-services/open.png";
import ACP from "../../assets/all-services/office-building.png";
import corian from "../../assets/all-services/tile.png";
import waterProofing from "../../assets/all-services/water.png";
import construction from "../../assets/all-services/brickwall.png";
import toughened from "../../assets/all-services/window.png";
import floor from "../../assets/all-services/floor.png";


const AllServices = () => {
  const allservice = [
    { icon: ceiling, title: "False Ceiling" },
    { icon: plug, title: "Electricals" },
    { icon: steel, title: "Stainless steel works" },
    { icon: wallpaper, title: "Wallpapers" },
    { icon: plumbing, title: "Plumbing" },
    { icon: carpentry, title: "Carpentry work" },
    { icon: solarPanel, title: "Solar panel" },
    { icon: gridCeiling, title: "Grid ceiling" },
    { icon: wood, title: "Wooden flooring" },
    { icon: cctvCamera, title: "CCTV works" },
    { icon: paintings, title: "Paintings" },
    { icon: aluminum, title: "Aluminum works" },
    { icon: fabrication, title: "MS fabrication work" },
    { icon: doors, title: "UPVC doors and windows" },
    { icon: ACP, title: "ACP works" },
    { icon: corian, title: "Corian top" },
    { icon: waterProofing, title: "Water proofing works" },
    { icon: construction, title: "Building construction" },
    { icon: toughened, title: "Toughened glass works" },
    { icon: floor, title: "Epoxy floor coating" },
  ];

  return (
    <div className="h-fit w-full mt-5 mb-14 md:my-10 md:p-4 font-robotoCondensed">
      <h1 className="text-[20px] md:text-[28px] uppercase font-semibold text-center text-dark mb-6">
        Our End-to-end interior solutions
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 md:gap-x-10 gap-y-6 md:gap-y-10 mt-10 md:mt-16 md:w-[90%] lg:w-[75%] md:mx-auto">
        {allservice.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-shadow duration-300"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 md:w-14 md:h-14 mb-1"
            />
            <h2 className="text-[14px] md:text-[16px] font-medium text-gray-700">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
