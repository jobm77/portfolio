import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import bisonJoLogo from "../images/logo_large.png"

const Header = () => {
  return (
    <header className="header" id="header">
      <div id="logo-wrapper">
        <Link to="/">
          <img src={bisonJoLogo} alt="Bison Jo logo" className="logo" />
        </Link>
      </div>
      <nav role="navigation" className="menu">
        <ul>
          <li>
            <a href="#footer" className="menu-item">
              Me contacter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
