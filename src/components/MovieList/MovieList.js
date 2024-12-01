import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../App";
import apiService from "../../network/apiService";
import MovieCard from "../MovieCard/MovieCard";
import MovieListv2 from "./MovieListv2";
import MovieListFilter from "./MovieListFilter";

function MovieList() {
  const [allList, setAllList] = useState([]);
  const { searchFilter } = useContext(SearchContext);

  useEffect(() => {
    const fetchAll = async () => {
      const response = await apiService.get("3/trending/all/day");
      setAllList(response.data.results.slice(0, 6));
    };
    fetchAll();
  }, [allList.length]);

  return (
    <>
      {searchFilter.filter === "" ? (
        <>
          <h1>Movie section</h1>
          <h3>ALL</h3>
          <div className="flex jc-space-between">
            {allList.map((item) => (
              <MovieCard key={item.id} imgSrc={item.poster_path} movieID={item.id} />
            ))}
          </div>

          <MovieListv2 genreID="28" category="Action" />
          <MovieListv2 genreID="12" category="Comedy" />
          <MovieListv2 genreID="16" category="Animation" />
          <MovieListv2 genreID="35" category="Comedy" />
        </>
      ) : searchFilter.filter === "Action" ? (
        <>
          <h1>{searchFilter.filter}</h1>
          <MovieListFilter genreID="28" category="Action" />
        </>
      ) : searchFilter.filter === "Comedy" ? (
        <>
          <h1>{searchFilter.filter}</h1>
          <MovieListFilter genreID="35" category="Comedy" />
        </>
      ) : (
        <>
          <h1>{searchFilter.filter}</h1>
          <MovieListFilter genreID="16" category="Animation" />
        </>
      )}
    </>
  );
}

export default MovieList;
// 28 12 16 35 80
