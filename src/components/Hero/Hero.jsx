import React from "react";
import "./Hero.scss";
import heroBackground from "../../assets/svgs/heroBackground.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="welcome-container">
        <h1 className="welcome-container__segment welcome-container__segment--one">
          Hello
        </h1>
        <h2 className="welcome-container__segment welcome-container__segment--two">
          I'm Andy
        </h2>
        <h3 className="welcome-container__segment welcome-container__segment--three">
          Junior Software Developer
        </h3>
        <div className="button-container">
          <button>Let's Talk</button>
          <button> Github</button>
        </div>
      </div>
      <div className="image-container">
        <div className="image-container__circle"></div>
        <img className="image-container__svg" src={heroBackground} alt="" />
      </div>
    </div>
  );
};

export default Hero;
