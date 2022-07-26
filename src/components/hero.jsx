import React from "react";
import "../styles/index.css";
import ME from "../img/me.png";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className="hero fullpage">
      <div className="hero-container">
        <Fade left delay={1000}>
          <div className="hero-left white">
            <h1 className="title-name ">Jones</h1>
            <h2 className="title-name ">
              <span className="dot">Tse</span>
              <span className="og ">.</span>
            </h2>
            <Fade left delay={1100}>
              <div className="social-link">
                <p className="link-left">Instagram</p>
                <p className="link-right">Linkedin</p>
              </div>
              <div className="social-link">
                <p className="link-left">Youtube</p>
                <p className="link-right">Unsplash</p>
              </div>
            </Fade>
            1
            <Fade left delay={1200}>
              <a href="" className="cv-button og">
                Download CV
              </a>
            </Fade>
          </div>
        </Fade>

        <div className="hero-middle"></div>
        <Fade right>
          <div className="hero-right">
            <Fade right delay={1000}>
              <h3 className="og hero-intro">INTRODUCTION</h3>
            </Fade>
            <Fade right delay={1000}>
              <h2 className="hero-title">Frontend developer</h2>
            </Fade>
            <Fade right delay={1100}>
              <h2 className="hero-title">Web developer</h2>
            </Fade>
            <Fade right delay={1150}>
              <p>
                I'm Jones, a passionate frontend developer bringing you
                programming and design from the future. I am experienced in
                developing web and software including full front end design.
              </p>
            </Fade>
            <Fade right delay={1150}>
              <p>
                “There are three responses to a piece of design – yes, no, and
                WOW!
              </p>

              <p> Wow is the one to aim for.”</p>
              <br />
              <p className="og learn-more">Learn more </p>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
