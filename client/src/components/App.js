import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import decode from "jwt-decode";

import Landing from "./Landing";
import Signin from "./Signin";
import Feature from "./Feature";
import SignUp from "./SignUp";

import "../App.css";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  //const refreshToken = localStorage.getItem('refreshToken');

  try {
    // decode token
    decode(token);
  } catch (e) {
    // statements
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Container fluid>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={Signin} />
            <PrivateRoute path="/feature" component={Feature} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
