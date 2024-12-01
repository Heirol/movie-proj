import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.png";
import "./LoginPage.css";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("username", data.username);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login">
        <div className="header-login">
          <img src={Logo} alt="logo" className="logo-login" />
          <h1>Welcome back!</h1>
          <p className="mg-btm-lg">Login and enjoy your movie</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="label-login">Username </label>
            <input
              type="text"
              placeholder="Input your name"
              {...register("username")}
              className="mg-btm-md"
            />
          </div>
          <button className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
