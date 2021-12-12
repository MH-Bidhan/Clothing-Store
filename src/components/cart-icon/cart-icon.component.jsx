import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShopingIcon } from "../../utils/logos/shoping-icon.svg";
import { selectCartItemsCount } from "../../utils/redux/cart/cart-selectors";
import { toggleCartHidden } from "./../../utils/redux/cart/cart-action";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
