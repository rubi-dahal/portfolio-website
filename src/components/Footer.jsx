import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <p>communitypro47@gmail.com</p>
      <div className="social-icons">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <AiFillYoutube className="icon" />
      </div>
      <div>
        <p>Copyright © Communitypro 2025, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
