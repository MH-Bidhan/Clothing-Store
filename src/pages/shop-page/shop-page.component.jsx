import React from "react";
import SHOP_DATA from "../../data/shop.data";
import CollectionPreview from "./../../components/collection-preview/collection-preview.component";
import "./shop-page.styles.scss";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    // console.log(this.state.collections);
    return (
      <div className="shop">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
