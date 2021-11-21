import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "./../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, routeName, items }) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={routeName}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
