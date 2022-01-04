import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "./../../components/collection-preview/collection-preview.component";
import "./shop-page.styles.scss";

const ShopPage = ({ shopData }) => {
  return (
    <div className="shop">
      {shopData.collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopData: state.shopData,
});

export default connect(mapStateToProps)(ShopPage);
