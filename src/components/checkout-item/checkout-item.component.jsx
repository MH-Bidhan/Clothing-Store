import React from "react";
import { connect } from "react-redux";
import {
  clearItem,
  decreaseItem,
  increaseItem,
} from "./../../utils/redux/cart/cart-action";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ item, clearItem, increaseItem, decreaseItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div onClick={() => decreaseItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => increaseItem(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartitems,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  increaseItem: (item) => dispatch(increaseItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutItem);
