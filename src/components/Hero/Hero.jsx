import React from "react";
import "./Hero.scss";
import heroBackground from "../../assets/svgs/heroBackground.svg";
import mail from "../../assets/svgs/mail.svg";
import arrow from "../../assets/svgs/arrow.svg";
import profile from "../../assets/images/profile.png";

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
        <div className="link-container">
          <a
            className="link-container__link"
            href="mailto:andy.reynolds@hotmail.co.uk"
          >
            Let's Talk&nbsp;
            <img className="link__image" src={mail} alt="" />
          </a>
          <a
            className="link-container__link"
            href="https://github.com/Andy-Reynolds"
          >
            Github
            <img className="link__image" src={arrow} alt="" />
          </a>
        </div>
      </div>
      <div className="image-container">
        <div className="image-container__circle">
          <img className="image-container__profile" src={profile} alt="Andy" />
        </div>
        <img className="image-container__svg" src={heroBackground} alt="" />
      </div>
    </div>
  );
};

export default Hero;
