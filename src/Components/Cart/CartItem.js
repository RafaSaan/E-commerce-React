import React from "react";
import "./CartItem.css";
import macetaMirlo from "../../Media/macetaMirlo.png";

const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="card__item__sec">
        <img src={macetaMirlo} alt="maceta" className="cart-img" />
      </div>
      <div className="card__item__sec item-title">Maceta mirlo</div>
      <div className="card__item__sec item-cont">
        <button className="btn-cont">-</button>
        <p className="cont">1</p>
        <button className="btn-cont">+</button>
      </div>
      <div className="card__item__sec item-price">350$ MXM</div>
      <div className="card__item__sec">
        <button className="btn-del btn-cont ">X</button>
      </div>
    </div>
  );
};

export default CartItem;
