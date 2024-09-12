import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Items } from "../components/items/Items";
export const ShopCategory = ({ category } = props) => {
  const product = useContext(ShopContext).all_product;
  let productList = product.filter((item) => {
    return item.category === category;
  });
  return productList.length && <Items items={productList} />;
};
