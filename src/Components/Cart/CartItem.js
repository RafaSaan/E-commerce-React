import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  return (
    <div className="cart__item">
      <div className="card__item__sec">
        <img src={item.media.source} alt={item.name} className="cart-img" />
      </div>
      <div className="card__item__sec item-title">{item.name}</div>
      <div className="card__item__sec item-cont">
        <button
          className="btn-cont"
          onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
        >
          -
        </button>
        <p className="cont">{item.quantity}</p>
        <button
          className="btn-cont"
          onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="card__item__sec item-price">
        {item.price.formatted_with_code}
      </div>
      <div className="card__item__sec">
        <button
          className="btn-del btn-cont "
          onClick={() => onRemoveFromCart(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
