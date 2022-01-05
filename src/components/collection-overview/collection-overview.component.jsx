import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "./../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ shopData }) => {
  return (
    <div className="collection-overview">
      {shopData.collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopData: state.shopData,
});

export default connect(mapStateToProps)(CollectionOverview);
