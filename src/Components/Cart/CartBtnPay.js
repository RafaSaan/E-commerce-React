import React from "react";
import { Link } from "react-router-dom";

const CartBtnPay = () => {
  return (
    <div className="btn-pay">
      <Link to="/pago">
        <button className="cta">Pagar</button>
      </Link>
    </div>
  );
};

export default CartBtnPay;
