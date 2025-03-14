import React from "react";
import franklin from "../assets/franklin.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="franklin" src={franklin} alt="" srcset="" />
      <h2>Hi I'm Franklin</h2>
      <h1>
        Building digital <br /> products, brands, and experience.
      </h1>
      <p>
        A Frontend Developer and Visual Designer with experience in web design,
        brand identity and product design.
      </p>
      <button>CONNECT WITH ME</button>
      <hr />
    </div>
  );
};

export default Hero;
