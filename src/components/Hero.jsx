import React from "react";
import HeroBg from "../../image.png";
import StarBorder from "./StarBorder";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-content">
          <h2 className="intro-name">Riam Basnet</h2>
          <div className="intro-text">
            <p>
              An aspiring Data Scientist; who’s currently pursuing master’s in
              data science and AI with a strong in interest in applying
              analytics and machine learning to tech, health care, and sports.
            </p>
          </div>
          <div className="intro-links">
            <a
              href="https://github.com/rmbasnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rmbasnet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="hero-button">
            <StarBorder
              as="a"
              href="#projects"
              color="#00ffef"
              speed="3s"
              thickness="2"
              backgroundColor="rgba(10,10,10,0.7)"
              textColor="#FFFFF"
              borderColor="#003333"
              textDecoration="none"
            >
              View Projects
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
