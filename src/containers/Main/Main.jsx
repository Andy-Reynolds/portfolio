import React from "react";
import Hero from "../../components/Hero/Hero";
import Body from "../Body/Body";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__hero">
        <Hero />
      </div>
      <div className="main__body">
        <Body />
      </div>
    </div>
  );
};

export default Main;
