import React from "react";
import "./Contacto.css";
import Formulario from "../Components/Form/Formulario";
import formImg from "../Media/formImg.png";

const Contacto = () => {
  return (
    <div className="contacto">
      <h2 className="contacto__titulo">Contacto</h2>
      <div className="form__container">
        <img src={formImg} alt="planta" className="form__img" />
        <Formulario />
      </div>
    </div>
  );
};

export default Contacto;
