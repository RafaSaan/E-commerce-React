import React from "react";
import "./CartTotal.css";
const CartTotal = () => {
  return (
    <div className="cart__total">
      <p className="cart__sub">Total</p>
      <p className="cart__sub total-num">5</p>
      <p className="cart__sub">545$</p>
    </div>
  );
};

export default CartTotal;
