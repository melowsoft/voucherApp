import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

import { signup } from "../actions";

class SignUp extends Component {
  createUser = credentials =>
    this.props
      .signup(credentials)
      .then(() => this.props.history.push("/feature"));

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card mt-4">
                <div className="card-header">Create an account</div>
                <div className="card-body">
                  <SignUpForm createUser={this.createUser} />
                  <br />
                  <p>
                    Got have an account? &nbsp;
                    <Link to="/signin">sign in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(
  null,
  { signup }
)(SignUp);
