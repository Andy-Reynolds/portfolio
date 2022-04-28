import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import useWindowSize from "../../hooks/useWindowSize.js";
import openMenu from "../../assets/svgs/openMenu.svg";
import closeMenu from "../../assets/svgs/closeMenu.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const windowIsDesktop = useWindowSize(1024);
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";
  const menuIcon = showMenu ? closeMenu : openMenu;

  useEffect(() => {
    if (windowIsDesktop) {
      setShowMenu(false);
    }
  }, [windowIsDesktop]);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const navMenu = (
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
  );

  return (
    <>
      <div className={navbarClass}>
        <h2 className="navbar__logo">Andy</h2>
        {windowIsDesktop ? (
          navMenu
        ) : (
          <button className="navbar__menu-button" onClick={handleClick}>
            <img className="navbar__menu-button-image" src={menuIcon} alt="" />
          </button>
        )}
      </div>
      {!windowIsDesktop && showMenu && navMenu}
    </>
  );
};

export default Navbar;