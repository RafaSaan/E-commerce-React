import React from "react";
import "./CardProduct.css";
import macetaMirlo from "../../Media/macetaMirlo.png";
const CardProduct = () => {
  return (
    <div className="products__card">
      <img src={macetaMirlo} alt="maceta-negra" className="products__img" />
      <div className="products__info">
        <h4>Maceta Mirlo </h4>
        <p>500$</p>
      </div>
      <button className="cta">Comprar</button>
    </div>
  );
};

export default CardProduct;
