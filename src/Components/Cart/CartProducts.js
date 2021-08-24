import React from "react";
import "./CartProducts.css";
import CartProduct from "./CartProduct";
import CartHeader from "./CartHeader";
import CartTotal from "./CartTotal";

const CartProducts = () => {
  return (
    <div className="cart__products">
      <CartHeader />
      <CartProduct />
      <CartTotal />
    </div>
  );
};

export default CartProducts;
