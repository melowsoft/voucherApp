import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import voucherReducer from "./voucherReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth,
  form: formReducer,
  voucher: voucherReducer,
  cart: cartReducer
});
