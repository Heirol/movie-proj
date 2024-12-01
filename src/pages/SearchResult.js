import React, { useState, useEffect, useContext } from "react";
import apiService from "../network/apiService";
import MovieCard from "../components/MovieCard/MovieCard";
import { SearchContext } from "../App";

function SearchResult() {
  // GET SEARCH KEYWORD FROM USECONTEXT
  const { searchFilter } = useContext(SearchContext);

  // DO SEARCH
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchSearchResult = async () => {
      const response = await apiService.get(`3/search/movie?query=${searchFilter.keyword}&page=1`);
      setSearchResult(response.data.results);
    };
    fetchSearchResult();
  }, [searchFilter.keyword]);
  // useEffect chỉ chạy khi searchKeyword thay đổi, chứ không phải searchResult
  // nếu để phụ thuộc searchResult.length, khi input lại search, ta không thể trigger để render ra value mới

  return (
    <div className="container">
      <h1>Search result</h1>
      {searchResult.map((item) => (
        <MovieCard key={item.id} imgSrc={item.poster_path} movieID={item.id} />
      ))}
    </div>
  );
}

export default SearchResult;

// https://api.themoviedb.org/3/search/keyword?query=dark&page=1&api_key=0388ea5c37be1a573dcd3a5402d2f74e
