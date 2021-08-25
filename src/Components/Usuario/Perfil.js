import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Logout from "./Logout";
import "./Perfil.css";
import UsuarioAcc from "./UsuarioAcc";
import UsuarioDatos from "./UsuarioDatos";

const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="user__data">
      <img src={user.picture} alt={user.name} className="user__img" />
      {isAuthenticated && (
        <div className="user__data__container">
          <UsuarioDatos name={user.name} email={user.email} />
          <UsuarioAcc />
          <Logout />
        </div>
      )}
    </div>
  );
};

export default Perfil;
