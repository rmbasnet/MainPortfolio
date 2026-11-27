import React from "react";

const Nav = () => {
  return (
    <div className="nav-holder">
      <nav className="pill-nav">
        <span className="brand">Riam</span>
        <a href="#projects">Projects</a>
        <a href="#experience" className="hide-mobile">
          Experience
        </a>
        <a href="#contact">Contact</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://github.com" className="hide-mobile">
          GitHub
        </a>
      </nav>
    </div>
  );
};

export default Nav;
