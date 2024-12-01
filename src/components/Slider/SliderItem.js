import React from "react";

function SliderItem({ imgSrc }) {
  let imgURL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <img src={`${imgURL}${imgSrc}`} className="slider-img" alt="" />
    </div>
  );
}

export default SliderItem;
