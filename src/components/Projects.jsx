import React from "react";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <p>Check out some of my personal and paid projects</p>
      <div className="box">
        <div className="proj 1">
          <img src={p1} alt="" srcset="" />
        </div>
        <div className="proj 2">
          <img src={p2} alt="" srcset="" />
        </div>
        <div className="proj 3">
          <img src={p3} alt="" srcset="" />
        </div>
        <div className="proj 4">
          <img src={p4} alt="" srcset="" />
        </div>
        <div className="proj 5">
          <img src={p5} alt="" srcset="" />
        </div>
        <div className="proj 6">
          <img src={p6} alt="" srcset="" />
        </div>
      </div>
      <button>
        SEE MORE <FaArrowRight />
      </button>
    </div>
  );
};

export default Projects;
