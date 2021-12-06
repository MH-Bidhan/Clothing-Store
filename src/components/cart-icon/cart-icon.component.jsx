import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShopingIcon } from "../../utils/logos/shoping-icon.svg";
import { toggleCartHidden } from "./../../utils/redux/cart/cart-action";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
