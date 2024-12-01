import React, { useState, useEffect } from "react";
import apiService from "../network/apiService";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import { BiPlayCircle } from "react-icons/bi";
import { BiMovie } from "react-icons/bi";

function DetailPage() {
  const { movieID } = useParams();
  const [detail, setDetails] = useState({});

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await apiService.get(`3/movie/${movieID}`);
      setDetails(response.data);
    };
    fetchDetail();
  }, [movieID]);

  return (
    <div className="container">
      <div
        className="detail-bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detail.backdrop_path})`,
        }}></div>
      <div className="detail-info">
        <p className="tag-sm">{movieID}</p>
        <h1>{detail.original_title}</h1>

        {detail.genres &&
          detail.genres.map((item) => (
            <p key={item.id} className="tag mg-top-md">
              {item.name}
            </p>
          ))}
        <p className="mg-top-md">Release date: {detail.release_date}</p>
        <p className="mg-top-md mg-btm-md">
          Overview: <br />
          {detail.overview}
        </p>
        <button className="mg-right-md btn-detail">
          <BiMovie className="icon-detail" /> Trailer
        </button>
        <button className="btn-detail">
          <BiPlayCircle className="icon-detail" /> Play
        </button>
      </div>
    </div>
  );
}

export default DetailPage;
// <img src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} alt="" />
//220056
