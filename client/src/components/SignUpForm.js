import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SignUpForm extends Component {
  renderField(field) {
    const {
      meta: { touched, error },
      name,
      type,
      label
    } = field;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <input
          type={type}
          name={name}
          id={name}
          {...field.input}
          className={`form-control ${touched && error ? "is-invalid" : ""}`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        <span className="invalid-feedback">{touched ? error : ""}</span>
      </div>
    );
  }

  onSubmit(values) {
    const credentials = JSON.stringify(values);
    this.props.createUser(credentials);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="username"
          component={this.renderField}
          type="text"
          label="Username"
        />

        <Field
          name="email"
          component={this.renderField}
          type="email"
          label="Email"
        />

        <Field
          name="password"
          component={this.renderField}
          type="password"
          label="Password"
        />

        <button type="submit" className="btn btn-block btn-secondary">
          {" "}
          Sign Up{" "}
        </button>
        <div className="text-center">Or</div>
        <button className="btn btn-block btn-social btn-google">
          <span className="fa fa-google" /> Sign in with google
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // validate input
  if (!values.username) {
    errors.username = "Username is empty";
  }

  if (!values.email) {
    errors.email = "Email is empty";
  }

  if (!values.password) {
    errors.password = "Password is empty";
  }

  // return true if there is no error
  return errors;
}

export default reduxForm({
  validate,
  form: "SignUpForm"
})(SignUpForm);
