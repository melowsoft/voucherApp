import React from "react";

import Navbar from "./Navbar";

import "../App.css";

export default ({ children }) => {
  return (
    <div className="container-fluid">
      <Navbar />

      {children}
    </div>
  );
};
