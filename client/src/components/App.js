import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

import "../App.css";

export default ({ children }) => {
  return (
    <div className="container-fluid">
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};
