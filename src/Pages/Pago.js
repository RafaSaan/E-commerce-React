import React from "react";
import PagoCont from "../Components/Pago/PagoCont";
import "./Pago.css";

const Pago = ({ items }) => {
  return (
    <div className="pago">
      <h2 className="pago__title">Pago</h2>
      <PagoCont items={items} />
    </div>
  );
};

export default Pago;
