import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Voucher extends Component {
  onDeleteVoucher = id => {
    this.props.deleteVoucher(id);
  };

  handleAddToCart = () => {
    let { name, id, code, price, quantity } = this.props;
    const newVoucher = {
      name,
      id,
      code,
      price,
      quantity
    };

    this.props.addToCart(newVoucher);
  };

  render() {
    let { name, id, code } = this.props;

    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <h5>
              id:
              {id}
            </h5>
            <span className="card-title">{name}</span>

            <div className="card-content">
              <h5>Voucher code: {code}</h5>
            </div>

            <button
              className="right waves-effect waves-light btn-small"
              onClick={() => this.handleAddToCart()}
            >
              Add to Cart
            </button>

            <button
              className="left waves-effect waves-light btn-small red"
              onClick={this.onDeleteVoucher.bind(this, id)}
            >
              Delete
            </button>

            <div className="card-action" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Voucher);
