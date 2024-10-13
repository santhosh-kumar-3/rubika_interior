import React from "react";
import ServiceCard from "../cards/ServiceCard";
import demoImg1 from "../../assets/kitchen-img.jpg";
import demoImg2 from "../../assets/bedroom-img.jpg";

const Services = () => {
  const services = [
    {
      title: "Bedroom",
      description:
        "Create your dream bedroom with our custom carpentry services. We design and build beds, wardrobes, and more, tailored to fit your style and space perfectly.",
      image: demoImg2,
    },
    {
      title: "Kitchen",
      description:
        "Design and build the perfect kitchen with our bespoke services. We create kitchen units that maximize functionality and style.",
      image: demoImg1,
    },
    {
      title: "Livingroom",
      description:
        "Create your dream bedroom with our custom carpentry services. We design and build beds, wardrobes, and more, tailored to fit your style and space perfectly.",
      image: demoImg1,
    },
    {
      title: "Cabinetry",
      description:
        "Design and build the perfect kitchen with our bespoke services. We create kitchen units that maximize functionality and style.",
      image: demoImg2,
    },
  ];

  return (
    <div className="h-fit w-full pb-5 md:pb-10 font-robotoCondensed">
      {/* Title */}
      <h1 className="text-center text-[40px] md:text-[52px] font-semibold mb-5 lg:mb-14">Services</h1>
      
      {/* Grid Layout for Service Cards */}
      <div className="container mx-auto w-fit ">
        <div className="grid grid-cols-1 sm:grid-cols-2 pb-7 gap-y-5 md:gap-y-8 md:gap-x-3 lg:gap-x-10  justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
