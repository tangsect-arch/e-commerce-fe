import React from "react";
import "./Home.css";
import { Main } from "./Main";
import { PopularItems } from "./PopularItems";
import { Bannar } from "./Bannar";
import { ContactUs } from "./ContactUs";
import { NewCollections } from "./NewCollections";

export default function Home() {
  return (
    <>
      <Main />
      <PopularItems />
      <Bannar />
      <NewCollections />
      <ContactUs />
    </>
  );
}
