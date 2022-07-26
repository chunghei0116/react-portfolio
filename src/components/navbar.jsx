import React from "react";
import "../styles/index.css";
import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mainPage">
      <div className="navbar">
        <h1 className="icon-title">
          <span className="first-name">J</span>T
          <span className="title-dot">.</span>
        </h1>
        <ul className="navbar-list">
          <li>Home</li>
          <li>Works</li>
          <li>Personal</li>
          <li className="icon-line">Contact</li>
        </ul>
        <div className="icon-list">
          <FaYoutube />
          <FaGithub />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
