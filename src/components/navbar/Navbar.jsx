// src/components/navbar/Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import cart_icon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => setMenu("shop")}
          className={menu === "shop" ? "active" : ""}
        >
          <Link to="/">Shop</Link>
        </li>
        <li
          onClick={() => setMenu("men")}
          className={menu === "men" ? "active" : ""}
        >
          <Link to="/men">Men</Link>
        </li>
        <li
          onClick={() => setMenu("women")}
          className={menu === "women" ? "active" : ""}
        >
          <Link to="/women">Women</Link>
        </li>
        <li
          onClick={() => setMenu("kids")}
          className={menu === "kids" ? "active" : ""}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <div className="nav-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
