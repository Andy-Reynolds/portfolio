import React from "react";
import "./Footer.scss";
import github from "../../assets/svgs/github.svg";
import mailGrey from "../../assets/svgs/mailGrey.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__heading">Contact</h3>
      <div className="footer__icon-container">
        <img className="footer__icon" src={github} alt="github" />
        <img className="footer__icon" src={mailGrey} alt="github" />
      </div>
    </div>
  );
};

export default Footer;
