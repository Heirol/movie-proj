import React, { useContext, useEffect, useState } from "react";
import apiService from "../../network/apiService";
import MovieCard from "../MovieCard/MovieCard";
import { SearchContext } from "../../App";

function MovieListFilter({ genreID, category }) {
  const [movieFilterList, setMovieFilterList] = useState([]);
  const { searchFilter } = useContext(SearchContext);

  useEffect(() => {
    const fectchMoviesFilter = async () => {
      const response = await apiService.get(`3/discover/movie?with_genres=${genreID}&page=1`);
      setMovieFilterList(response.data.results);
    };
    fectchMoviesFilter();
  }, [genreID, searchFilter.filter]);
  return (
    <div className="movie-filter-list">
      {movieFilterList.map((item) => (
        <MovieCard key={item.id} imgSrc={item.poster_path} movieID={item.id} />
      ))}
    </div>
  );
}

export default MovieListFilter;
