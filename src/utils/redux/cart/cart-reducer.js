import addItemToCart from "../../functions/add-to-cart";
import increaseCartItem from "../../functions/increase-cart-Item";
import decreaseCartItem from "./../../functions/decrease-cart-item";
import { cartActionTypes } from "./cart-types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        // cartItems: ,
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: increaseCartItem(state.cartItems, action.payload),
      };

    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
