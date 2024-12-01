import React, { useState, useEffect } from "react";
import apiService from "../../network/apiService";
import BrandCard from "../BrandCard/BrandCard";

function BrandList() {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    const fetchBrandList = async () => {
      const response = await apiService.get("3/watch/providers/movie");
      setBrandList(response.data.results.slice(0, 8));
    };
    fetchBrandList();
  }, [brandList.length]);

  return (
    <>
      <h1>Brand list</h1>
      <div className="flex jc-space-between">
        {brandList.map((item) => (
          <BrandCard
            key={item.provider_id}
            imgSrc={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
          />
        ))}
      </div>
    </>
  );
}

export default BrandList;

// https://api.themoviedb.org/3/watch/providers/movie?api_key=0388ea5c37be1a573dcd3a5402d2f74e
