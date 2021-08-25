// import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import "./Products.css";
// import Loader from "../Form/Loader";

const Products = ({ products, onAddToCart }) => {
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 500);
  // }, []);

  return (
    <div className="products__container">
      {/* {loader && <Loader />} */}
      {products.map(product => (
        <div key={product.id} className="products__items">
          <CardProduct product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default Products;
