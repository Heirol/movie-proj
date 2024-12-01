import React from "react";
import "./BrandCard.css";

function BrandCard({ imgSrc }) {
  return <img className="logo" src={imgSrc} alt="" />;
}

export default BrandCard;
