import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../utils/redux/cart/cart-action";
import CustomButton from "./../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} alt="" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        label="add to cart"
        customClasses="inverted"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
