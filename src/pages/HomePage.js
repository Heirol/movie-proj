import React from "react";
import SimpleSlider from "../components/Slider/SimpleSlider";
import MovieList from "../components/MovieList/MovieList";
import BrandList from "../components/BrandList/BrandList";

function HomePage() {
  return (
    <div className="container">
      <SimpleSlider />

      <div className="divider"></div>
      <BrandList />
      <div className="divider"></div>

      <MovieList />
    </div>
  );
}

export default HomePage;
