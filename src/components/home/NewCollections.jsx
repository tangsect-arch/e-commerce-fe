import React from "react";
import { Items } from "../items/Items";

import items from "../assets/new_collections.js";

export const NewCollections = () => {
  return (
    <div>
      <div className="main-headings">
        <h2>NEW ARRIVALS</h2>
      </div>
      <Items items={items} />
    </div>
  );
};
