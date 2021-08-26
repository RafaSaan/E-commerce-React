import React from "react";
import PagoTarjeta from "./PagoTarjeta";
import Review from "./Review";

const PagoRew = ({ items, confirm }) => {
  if (!items.line_items) return <div className="empty">Cargando...</div>;
  return (
    <div>
      {items.line_items.map(item => (
        <Review item={item} key={item.id} />
      ))}
      <div className="review totl">
        <p>Total</p>
        <p>{items.subtotal.formatted_with_code}</p>
      </div>
      <PagoTarjeta confirm={confirm} />
    </div>
  );
};

export default PagoRew;
