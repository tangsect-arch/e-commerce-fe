import React from "react";
import fb from "../assets/fb.png";
import whatsapp from "../assets/insta.png";
import insta from "../assets/linkedin.png";
import linkedin from "../assets/whatsapp.png";
import logo from "../assets/logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <img src={logo} alt="" />
        <h2>SHOPPER</h2>
      </div>
      <div className="footer-about">
        <ul>
          <li>Company</li>
          <li>Product</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <img src={fb} alt="Facebook" />
          </li>
          <li>
            <img src={whatsapp} alt="Whatsapp" />
          </li>
          <li>
            <img src={insta} alt="Instagram" />
          </li>
          <li>
            <img src={linkedin} alt="Linkedin" />
          </li>
        </ul>
      </div>
      <div className="footer-copy-right">
        &copy; Copyright 2024 - All Rights Reserved.
      </div>
    </div>
  );
};
