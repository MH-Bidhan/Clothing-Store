import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../utils/redux/cart/cart-selectors";
import CheckOutItem from "./../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "./../../components/stripe-checkout/stripe-checkout.component";
import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, total }) => {
  const date = new Date();

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <div className="test-warning">
        &#128683; Please Use the following Test Credit Card for any payments
        &#128683;
        <br />
        4242 4242 4242 4242
        <br />
        Exp : ( 01/{date.getFullYear() + 4} ) CVC : 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
