import axios from "axios";
import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_VOUCHER,
  DELETE_VOUCHER,
  VOUCHER_LOADING,
  ADD_TO_CART,
  FETCH_CART
} from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/signup", formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/signin", formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const fetchVoucher = () => dispatch => {
  dispatch(setVoucherLoading());
  axios.get("/api/vouchers").then(res =>
    dispatch({
      type: FETCH_VOUCHER,
      payload: res.data
    })
  );
};

export const deleteVoucher = id => {
  return {
    type: DELETE_VOUCHER,
    payload: id
  };
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const setVoucherLoading = () => {
  return {
    type: VOUCHER_LOADING
  };
};

export const addToCart = voucher => dispatch => {
  axios
    .post("/api/cart", voucher)
    .then(res => dispatch({ type: ADD_TO_CART, payload: res.data }));
};

export const fetchCart = () => dispatch => {
  axios.get("/api/cart").then(res =>
    dispatch({
      type: FETCH_CART,
      payload: res.data
    })
  );
};
