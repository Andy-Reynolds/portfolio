import React from "react";
import "./Footer.scss";
import github from "../../assets/svgs/github.svg";
import mailGrey from "../../assets/svgs/mailGrey.svg";
import linkedIn from "../../assets/svgs/linkedIn.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <h3 className="footer__heading">Contact</h3>
      <div className="footer__icon-container">
        <a
          href="https://github.com/Andy-Reynolds"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__icon" src={github} alt="github" />
        </a>
        <a href="mailto: andy.reynolds@hotmail.co.uk">
          <img className="footer__icon" src={mailGrey} alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-reynolds-079003222"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__icon" src={linkedIn} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
