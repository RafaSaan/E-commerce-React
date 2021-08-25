import React from "react";
import "./CardProduct.css";

const CardProduct = ({ product, onAddToCart }) => {
  return (
    <div className="products__card">
      <img
        src={product.media.source}
        alt={product.name}
        className="products__img"
      />
      <div className="products__info">
        <h4>{product.name}</h4>
        <p>{product.price.formatted_with_code}</p>
      </div>
      <button onClick={() => onAddToCart(product.id, 1)} className="cta">
        Comprar
      </button>
    </div>
  );
};

export default CardProduct;
