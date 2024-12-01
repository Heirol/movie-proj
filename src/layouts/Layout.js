import React, { useContext } from "react";
import Logo from "../logo.png";
import { SearchContext } from "../App";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiRocket } from "react-icons/bi";
import { BiBrush } from "react-icons/bi";
import { BiHeartCircle } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

function Layout() {
  // Load user name & navigate logout
  let navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
  }
  const username = localStorage.getItem("username");

  // Get keyword & assign to
  const { register, handleSubmit } = useForm();
  const { setSearchFilter } = useContext(SearchContext);

  const onSubmit = (data) => {
    // console.log(data);
    navigate("/search-result");
    setSearchFilter((prevState) => ({
      ...prevState,
      keyword: data.keyword,
    }));
  };
  const handleBtnHome = (event) => {
    setSearchFilter((prevState) => ({
      ...prevState,
      filter: "",
    }));
    navigate("/");
  };
  const handleBtnFilter = (event) => {
    setSearchFilter((prevState) => ({
      ...prevState,
      filter: event.target.textContent,
    }));
    navigate("/");
  };

  return (
    <>
      <nav className="flex jc-space-between ai-center">
        <div className="flex ai-center">
          <div>
            <img src={Logo} alt="" onClick={handleBtnHome} className="logo-nav" />
          </div>
          <button className="btn-nav" onClick={handleBtnHome}>
            <BiHomeAlt2 className="icon" />
            Home
          </button>

          <button className="btn-nav" onClick={handleBtnFilter}>
            <BiRocket className="icon" />
            Action
          </button>

          <button className="btn-nav" onClick={handleBtnFilter}>
            <BiHeartCircle className="icon" />
            Comedy
          </button>

          <div>
            <button className="btn-nav" onClick={handleBtnFilter}>
              <BiBrush className="icon" />
              Animation
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Search movie"
            className="search ai-center"
            {...register("keyword")}
          />
          <button>
            <BiSearch className="icon-clear" />
          </button>
        </form>

        <div className="flex ai-center">
          <p>{`Welcome, ${username}`}</p>
          <button onClick={handleLogout} className="mg-left-md">
            Logout
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
