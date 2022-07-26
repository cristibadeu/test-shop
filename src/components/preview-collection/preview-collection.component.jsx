import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import "./preview-collection.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"><Link to={title.toLowerCase()}>{title.toUpperCase()}</Link></h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
