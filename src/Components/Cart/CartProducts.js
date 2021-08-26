import React from "react";
import "./CartProducts.css";
import CartProduct from "./CartProduct";
import CartHeader from "./CartHeader";
import CartTotal from "./CartTotal";
import CartBtnPay from "./CartBtnPay";

const CartProducts = ({ items, onRemoveFromCart, onUpdateCartQty }) => {
  return (
    <div className="cart__products">
      <CartHeader />
      <CartProduct
        items={items}
        onRemoveFromCart={onRemoveFromCart}
        onUpdateCartQty={onUpdateCartQty}
      />
      <CartTotal items={items} />
      <CartBtnPay />
    </div>
  );
};

export default CartProducts;
