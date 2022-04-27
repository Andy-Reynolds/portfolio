import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar__logo">Andy</h2>
      <div className="navbar__links-container">
        <ul>
          <li>
            <a className="navbar__link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/">
              Project
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/">
              Tech Stack
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
