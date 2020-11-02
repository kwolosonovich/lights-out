import React from "react";
import "./Home.css";
import logo from "./logo.png";
import login from "./login.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <img src={logo} alt="logo" />
        <h1>TimeKillerz</h1>
      </div>
      <div className="subtext">
        <h3>Real. FUN.</h3>
        <h5 className="login">Want More Games?</h5>
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default Home;
