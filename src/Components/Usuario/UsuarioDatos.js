import React from "react";
import "./UsuarioDatos.css";

const UsuarioDatos = ({ name, email }) => {
  return (
    <div className="user__credent">
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default UsuarioDatos;
