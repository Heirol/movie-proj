import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Layout from "./layouts/Layout";
import "./App.css";
import SearchResult from "./pages/SearchResult";

export const SearchContext = createContext();

function App() {
  // useContext
  const [searchFilter, setSearchFilter] = useState({
    keyword: "",
    filter: "",
  });

  // const [searchKeyword, setSearchKeyword] = useState("");
  console.log(`Search from useContext: ${searchFilter.keyword}`);
  console.log(`Filter from useContext: ${searchFilter.filter}`);
  console.log(searchFilter);

  return (
    <SearchContext.Provider value={{ searchFilter, setSearchFilter }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:movieID" element={<DetailPage />} />
          <Route path="search-result" element={<SearchResult />} />
          {/* <Route path="filter" element={<FilterPage />} /> */}
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
