import React from "react";
import "./PagoBtns.css";
const PagoBtns = ({ next }) => {
  return (
    <div className="pago__btns">
      <button className="cta" onClick={() => next()}>
        Siguiente
      </button>
    </div>
  );
};

export default PagoBtns;
