import React, { Component } from "react";
import Rave from "react-flutterwave-rave";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "FLWPUBK-965e532b1b9238e2bd48228e6a9ebbf4-X", // RavePay PUBLIC KEY
      phone: "08050757386",
      amount: "",
      firstname: "user_firstname",
      lastname: "user_lastname",
      email: "test@test.com",
      room_number: "23A",
      hostel: "Silver 1",
      quantity: 3,
      showbutton: false
    };
    this.callback = this.callback.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  callback = response => {
    console.log(response);
  };

  close = () => {
    console.log("Payment closed");
  };

  confirmOrder = () => {
    let { cart } = this.props.cart;
    let total = cart
      .map(data => data.price)
      .reduce((prev, next) => prev + next);

    this.setState({
      amount: total,
      showbutton: true
    });
  };

  render() {
    let { cart } = this.props.cart;

    return (
      <div className="container">
        <h3>Cart</h3>
        <table className="striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {cart.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>₦{product.price}</td>
                </tr>
              );
            })}

            <tr>
              <td />
              <td />

              <td>
                <h5>Total: ₦{this.state.amount}</h5>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="right" onClick={this.confirmOrder}>
          confirm order
        </button>
        {this.state.showbutton ? (
          <Rave
            pay_button_text="Pay With Rave"
            class="button"
            metadata={[
              { metaname: "Tickets", metavalue: this.state.ticket_number },
              { metaname: "Hostel", metavalue: this.state.hostel },
              { metaname: "Room", metavalue: this.state.room_number }
            ]}
            payment_method="card"
            customer_email={this.state.email}
            customer_phone={this.state.phone}
            amount={"" + this.state.amount + ""}
            ravePubKey={this.state.key}
            callback={this.callback}
            onclose={this.close}
          />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  actions
)(requireAuth(Checkout));
