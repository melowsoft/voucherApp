import React from "react";
import Header from "./Header";

import "../App.css";

export default ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
    </div>
  );
};
