import React from "react";
import CartProducts from "../Components/Cart/CartProducts";

const Carrito = ({ items, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div>
      <CartProducts
        items={items}
        onRemoveFromCart={onRemoveFromCart}
        onUpdateCartQty={onUpdateCartQty}
      />
    </div>
  );
};

export default Carrito;
