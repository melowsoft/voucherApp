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
      <div className="login-form container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="row">
            <div className="input-field col s12">
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="none"
                id="email"
              />
              <label for="email">Email</label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                  id="password"
                />
                <label for="email">Password</label>
                <div>{this.props.errorMessage}</div>
              </div>
            </div>
            <div className="row">
              <button className="btn-large waves-effect waves-light">
                Sign In
              </button>
            </div>
          </div>

          <div class="row">
            <span class="psw">
              Forgot <a>password?</a>
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
