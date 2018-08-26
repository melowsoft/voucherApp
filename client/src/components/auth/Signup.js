import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./signupStyles.css";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="login-form container">
        <h2>Signup Form</h2>
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
                />
                <label for="email">Password</label>
                <div>{this.props.errorMessage}</div>
              </div>
            </div>

            <button className="btn-large waves-effect waves-light">
              Sign Up
            </button>
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
  reduxForm({ form: "signup" })
)(Signup);
