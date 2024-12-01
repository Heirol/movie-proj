import React, { useState, useEffect } from "react";
import apiService from "../../network/apiService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem";
import "./Slider.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchBanner = async () => {
      const response = await apiService.get("3/trending/all/day?page=2");
      setBanner(response.data.results.slice(0, 6));
    };
    fetchBanner();
  }, [banner.length]);
  console.log(banner);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {banner.map((item) => (
          <SliderItem key={item.id} imgSrc={item.backdrop_path} />
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
