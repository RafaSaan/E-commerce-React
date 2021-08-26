import React from "react";
import CartItem from "./CartItem";
import "./CartProduct.css";
const CartProduct = ({ items, onRemoveFromCart, onUpdateCartQty }) => {
  // const isEmpty = items.line_items;
  // console.log(isEmpty);

  if (!items.line_items) return <div className="empty">Cargando...</div>;
  return (
    <div className="cart__products__container">
      {!items.line_items.length ? (
        <div className="empty">El carrito esta vacio</div>
      ) : (
        items.line_items.map(item => (
          <CartItem
            item={item}
            key={item.id}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateCartQty={onUpdateCartQty}
          />
        ))
      )}
    </div>
  );
};

export default CartProduct;
