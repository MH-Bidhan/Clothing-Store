import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../utils/redux/cart/cart-selectors";
import CartItem from "./../cart-items/cart-item.component";
import CustomButton from "./../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton label="Go to Checkout" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
