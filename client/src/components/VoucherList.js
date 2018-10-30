import React, { Component } from "react";
import Voucher from "./Voucher";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";

class VoucherList extends Component {
  componentDidMount() {
    this.props.fetchVoucher();
  }

  render() {
    let { vouchers } = this.props.voucher;
    let vouchersList = (
      <React.Fragment>
        {vouchers.map(voucher => {
          return (
            <Voucher
              id={voucher.id}
              name={voucher.name}
              code={voucher.code}
              price={voucher.price}
              key={voucher.id}
              onIncrement={this.handleIncrement}
              quantity={voucher.quantity}
            />
          );
        })}
      </React.Fragment>
    );

    return (
      <div>
        <h3>Availavble Vouchers</h3>
        {vouchersList}
        <Link to="/checkout">
          <button className="waves-effect waves-light btn-large">
            Checkout
          </button>
        </Link>
      </div>
    );
  }
}

VoucherList.propTypes = {
  fetchVoucher: PropTypes.func.isRequired,
  voucher: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    voucher: state.voucher
  };
}

export default connect(
  mapStateToProps,
  actions
)(VoucherList);
