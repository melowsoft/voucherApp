import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { signin } from "../actions";

import Header from "./Header";

class Signin extends Component {
  componentWillMount() {
    // check if the user is signed in
    //redirect to messages
  }

  signInUser = credentials =>
    this.props.signin(credentials).then(() => {
      this.props.history.push("/feature");
    });

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card mt-4">
                <div className="card-header">Sign in to your account</div>
                <div className="card-body">
                  <LoginForm signInUser={this.signInUser} />
                  <br />
                  <p>
                    Don't have an account? &nbsp;
                    <Link to="/signup">sign up</Link>
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

Signin.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signin: PropTypes.func.isRequired
};

export default connect(
  null,
  { signin }
)(Signin);
