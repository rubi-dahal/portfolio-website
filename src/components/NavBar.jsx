import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./NavBar.css";
import { IoSunny } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { BiX } from "react-icons/bi";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const toggleSidebar = () => {
    setActive(!active);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-links">
        <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#footer">Contact</a>
          <button>
            Resume <FaArrowRight />
          </button>
        </div>
        <div className="light-dark-mode">
          <IoSunny className="icon" />
          {!active ? (
            <RxHamburgerMenu className="mobile" onClick={toggleSidebar} />
          ) : (
            <BiX className="mobile" onClick={toggleSidebar} />
          )}
        </div>
        <Sidebar active={active} />
      </nav>
    </div>
  );
};

export default NavBar;
