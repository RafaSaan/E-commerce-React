import React from "react";
import { Link } from "react-router-dom";
import "./HeroInfo.css";

const HeroInfo = () => {
  return (
    <div className="hero__info">
      <h3 className="hero__title">Maceta Mirlo II</h3>
      <p className="hero__paragraph">
        Diseño moderno y minimalista. El elegante soporte para macetas refleja
        el minimalismo inspirado en el estilo clásico de mediados de siglo.
      </p>
      <Link to="/tienda">
        <button className="cta">Comprar</button>
      </Link>
    </div>
  );
};

export default HeroInfo;
