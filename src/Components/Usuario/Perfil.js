import React from "react";
import "./Perfil.css";
import UsuarioAcc from "./UsuarioAcc";
import UsuarioDatos from "./UsuarioDatos";

const Perfil = () => {
  return (
    <div className="user__data">
      <div className="user__img">Aqui va la imagen de usuario</div>
      <div className="user__data__container">
        <UsuarioDatos />
        <UsuarioAcc />
      </div>
    </div>
  );
};

export default Perfil;
