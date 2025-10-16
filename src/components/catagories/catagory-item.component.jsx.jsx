import React from "react";
import "./category-item.styles.scss";
const CatagoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="category-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="background-image" />
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CatagoryItem;
