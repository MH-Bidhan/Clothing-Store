import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import filterShopData from "../../utils/functions/shop-functions/filter-shop-data";
import "./collection-page.styles.scss";

const CollectionPage = ({ shopData, match }) => {
  const data = filterShopData(shopData.collections, match.params.collectionId);
  const { title, items } = data;

  return (
    <div className="collection-page">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopData: state.shopData,
});

export default connect(mapStateToProps)(CollectionPage);
