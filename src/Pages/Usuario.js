import React from "react";
import "./Usuario.css";
import Perfil from "../Components/Usuario/Perfil";

const Usuario = () => {
  return (
    <div className="user">
      <h2 className="user__title">Usuario</h2>
      <Perfil />
    </div>
  );
};

export default Usuario;
