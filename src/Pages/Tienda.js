import React from "react";
import "./Tienda.css";
import Products from "../Components/Tienda/Products";

const Tienda = () => {
  return (
    <div className="products">
      <h2 className="products__title">Tienda</h2>
      <Products />
    </div>
  );
};

export default Tienda;
