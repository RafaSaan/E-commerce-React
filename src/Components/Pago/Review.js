import React from "react";
import "./Review.css";
const Review = ({ item }) => {
  return (
    <div className="review">
      <p className="name">{item.name}</p>
      <p className="quant">{item.quantity}</p>
      <p className="price">{item.price.formatted_with_code}</p>
    </div>
  );
};

export default Review;
