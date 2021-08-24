import React from "react";
import "./CartHeader.css";
const CartHeader = () => {
  return (
    <div>
      <h4 className="cart__title">Carrito de Compras</h4>
      <div className="cart__subtitles">
        <p className="cart__sub">Orden</p>
        <p className="cart__sub">Envio</p>
        <p className="cart__sub">Pago</p>
      </div>
    </div>
  );
};

export default CartHeader;
