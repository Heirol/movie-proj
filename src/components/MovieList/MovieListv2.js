import React, { useEffect, useState } from "react";
import apiService from "../../network/apiService";
import MovieCard from "../MovieCard/MovieCard";

function MovieListv2({ genreID, category }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchTrendings = async () => {
      const response = await apiService.get(`3/discover/movie?with_genres=${genreID}&page=1`);
      setMovieList(response.data.results.slice(0, 6));
    };
    fetchTrendings();
  }, [genreID, setMovieList.length]);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <div className="flex jc-space-between max-w">
        {movieList.map((item) => (
          <MovieCard key={item.id} imgSrc={item.poster_path} movieID={item.id} />
        ))}
      </div>
    </>
  );
}

export default MovieListv2;
