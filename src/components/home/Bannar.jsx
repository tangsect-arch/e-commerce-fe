import React from "react";
import exclusive from "../assets/exclusive_image.png";

export const Bannar = () => {
  return (
    <div className="banner-section">
      <div className="left-component">
        <div className="left-container">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <h2>ONLY ON BEST SELLING PRODUCTS</h2>
          <button>Check now</button>
        </div>
      </div>
      <div className="right-component">
        <img className="right-image" src={exclusive} alt="" />
      </div>
    </div>
  );
};
