import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./signinStyles.css";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="login-container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div class="imgcontainer">
            <img src="/avatar.png" alt="Avatar" class="avatar" />
          </div>
          <div class="container">
            <fieldset>
              <label>Email</label>
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <fieldset>
              <label>Password</label>
              <Field
                name="password"
                type="password"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <div>{this.props.errorMessage}</div>
            <button>Sign In!</button>
          </div>

          <div class="container">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
