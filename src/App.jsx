import React from "react";
import Navbar from "./components/navbar/Navbar";
import Router from "./Router";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
