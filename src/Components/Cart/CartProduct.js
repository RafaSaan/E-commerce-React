import React from "react";
import CartItem from "./CartItem";
import "./CartProduct.css";
const CartProduct = () => {
  return (
    <div className="cart__products__container">
      <CartItem />
    </div>
  );
};

export default CartProduct;
