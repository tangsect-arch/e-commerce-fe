import React from "react";
import product from "../components/assets/all_product";
import { Items } from "../components/items/Items";
export const ShopCategory = ({ category } = props) => {
  let productList = product.filter((item) => {
    return item.category === category;
  });
  return productList.length && <Items items={productList} />;
};
