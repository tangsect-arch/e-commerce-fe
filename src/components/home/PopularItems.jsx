import React from "react";
import { Items } from "../items/Items";

import items from "../assets/data.js";

export const PopularItems = () => {
  return (
    <>
      <div className="main-headings">
        <h2>POPULAR IN WOMEN</h2>
      </div>
      <Items items={items} />
    </>
  );
};
