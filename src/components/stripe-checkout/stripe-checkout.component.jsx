import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { resetCart } from "../../utils/redux/cart/cart-action";

const StripeCheckoutButton = ({ price, resetCartItems }) => {
  const publishableKey =
    "pk_test_51KEoOyH3ZRZYgK17tlDO4tgldOyxbXVE6pzC53kACMbrkHEWDOW4pDE1I7Da2c8XIpNbVWvRdVvZXDKjVEEooD7300tbx5xMvq";

  const logoUrl =
    "https://firebasestorage.googleapis.com/v0/b/crown-clothing-dee2a.appspot.com/o/crown.svg?alt=media&token=b81bb134-ec77-44e3-9892-5d34f10bb60e";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    resetCartItems();
    alert("Payment Successful");
  };

  return (
    <div className="button">
      <StripeCheckout
        label="Proceed To Pay"
        amount={stripePrice}
        stripeKey={publishableKey}
        name="Crown Clothing"
        billingAddress
        shippingAddress
        description={`Your Total is $${price}`}
        panelLabel="Proceed To Pay"
        image={logoUrl}
        token={onToken}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetCartItems: () => dispatch(resetCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
