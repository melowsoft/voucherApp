import React, { Component } from "react";
import requireAuth from "./requireAuth";
import VoucherList from "./VoucherList";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <VoucherList />
      </div>
    );
  }
}

export default requireAuth(Dashboard);
