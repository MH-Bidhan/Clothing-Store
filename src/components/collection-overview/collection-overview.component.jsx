import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "./../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ shopData }) => {
  const shopDataArray = Object.values(shopData.collections);
  return (
    <div className="collection-overview">
      {shopDataArray.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopData: state.shopData,
});

export default connect(mapStateToProps)(CollectionOverview);
