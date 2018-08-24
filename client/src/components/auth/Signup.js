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
      <div className="login-container">
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
            <button>Sign Up!</button>
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
