import React from "react";
import arrow from "../assets/arrow.png";
import hand_icon from "../assets/hand_icon.png";
import background from "../assets/hero_image.png";
import "./ShopComponent.css";

export default function ShopComponent() {
  return (
    // <div className="shop-container">
    <div className="shop-component">
      <div className="left-component">
        <h2>NEW ARRAIVALS ONLY</h2>
        <h1>
          new <img className="img-class" src={hand_icon} alt="" />
          <br />
          collections <br />
          for everyone
        </h1>
        <button>
          Latest Collection
          <img className="arrow" src={arrow} alt="" />
        </button>
      </div>
      <div className="right-component">
        <img className="right-image" src={background} alt="" />
      </div>
    </div>
    // </div>
  );
}
