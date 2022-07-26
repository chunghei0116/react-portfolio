import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import Hero from "./components/hero";
import About from "./components/about";
import Background from "./components/background";

import "./index.css";

function App() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div className={`mainPage ${show && `active`} ${!show && `hidden`}`}>
        <div className="navbar">
          <h1 className="icon-title">
            <span className="first-name">J</span>T
            <span className="title-dot">.</span>
          </h1>
          <ul className="navbar-list">
            <li>
              <Link className="navber-link" smooth to="#works">
                Works
              </Link>
            </li>
            <li>
              <Link className="navber-link" smooth to="#">
                Experience
              </Link>
            </li>
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
      <Background></Background>
      <Hero></Hero>

      <About></About>
    </BrowserRouter>
  );
}

export default App;
