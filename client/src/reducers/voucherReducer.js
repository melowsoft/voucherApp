import {
  FETCH_VOUCHER,
  DELETE_VOUCHER,
  VOUCHER_LOADING
} from "../actions/types";

const INITIAL_STATE = {
  vouchers: [],
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VOUCHER:
      return {
        ...state,
        vouchers: action.payload,
        loading: false
      };
    case DELETE_VOUCHER:
      return {
        ...state,
        vouchers: state.vouchers.filter(
          voucher => voucher.id !== action.payload
        )
      };
    case VOUCHER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
