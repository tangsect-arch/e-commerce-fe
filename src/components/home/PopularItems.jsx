import React from "react";
import { Items } from "../items/Items";

import items from "../assets/data.js";

export const PopularItems = () => {
  return (
    <>
      <Items items={items} />
    </>
  );
};
