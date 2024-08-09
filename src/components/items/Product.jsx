import React from "react";

import "./Items.css";

export const Product = ({ item, index } = props) => {
  const key = `product-${index}`;
  return (
    <div className="product" key={key}>
      <img src={item.image} alt="" />
      <div className="product-details">{item.name}</div>
      <div className="product-price">
        <span className="new-amount">${item.new_price}</span>
        <span className="old-amount">${item.old_price}</span>
      </div>
    </div>
  );
};
