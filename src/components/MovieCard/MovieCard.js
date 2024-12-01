import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ imgSrc, movieID }) {
  let navigate = useNavigate();
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
      className="card-movie"
      onClick={() => {
        navigate(`/${movieID}`);
      }}
      alt=""
    />
  );
}

export default MovieCard;
