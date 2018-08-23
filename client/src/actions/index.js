import axios from "axios";
import api from "../api";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "./types";
const ROOT_URL = "http://localhost:5000";

export const userLoggedIn = token => ({
  type: AUTH_USER,
  token
});

export const signin = credentials => dispatch =>
  api.user.login(credentials).then(token => {
    dispatch(userLoggedIn(token));
    localStorage.setItem("token", token);
  });

export const signup = credentials => dispatch =>
  api.user.register(credentials).then(token => {
    dispatch(userLoggedIn(token));
    localStorage.setItem("token", token);
  });

export const authError = error => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: UNAUTH_USER
  };
};
