import React from "react";
import logo from "../assets/logo.png";
import "./NavBar.css";
import { IoSunny } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <a href="/project">Home</a>
          <a href="/contact">About</a>
          <a href="/blog">Services</a>
          <button>
            Resume <FaArrowRight />
          </button>
        </div>
        <div className="light-dark-mode">
          <IoSunny className="icon" />
          <RxHamburgerMenu className="mobile" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
