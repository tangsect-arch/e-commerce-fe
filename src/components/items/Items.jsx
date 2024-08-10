import React from "react";

import { Product } from "./Product.jsx";

import "./Items.css";

export const Items = ({ items } = props) => {
  return (
    items.length > 0 && (
      <div className="items">
        {items.map((item, index) => (
          <Product item={item} index={index} key={index} />
        ))}
      </div>
    )
  );
};
