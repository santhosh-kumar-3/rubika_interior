import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/service/${title.toLowerCase()}`);
  };

  return (
   <>
   <h1>uyg</h1></>
  );
};

export default ServiceCard;
