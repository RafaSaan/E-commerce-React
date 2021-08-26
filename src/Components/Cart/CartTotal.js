import React from "react";
import "./CartTotal.css";
const CartTotal = ({ items }) => {
  if (!items.line_items) return " ";

  return (
    <div className="cart__total">
      <p className="cart__sub">Total</p>
      <p className="cart__sub total-num">{items.total_items}</p>
      <p className="cart__sub total-price">
        {items.subtotal.formatted_with_code}
      </p>
    </div>
  );
};

export default CartTotal;
