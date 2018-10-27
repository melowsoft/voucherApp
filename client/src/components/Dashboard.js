import React, { Component } from "react";
import requireAuth from "./requireAuth";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default requireAuth(Dashboard);
