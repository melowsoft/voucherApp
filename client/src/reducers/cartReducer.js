import { FETCH_CART, ADD_TO_CART } from "../actions/types";

const INITIAL_STATE = {
  cart: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        cart: action.payload
      };

    case ADD_TO_CART: {
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };
    }

    default:
      return state;
  }
}
