import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="logout">
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="cta"
      >
        Salir
      </button>
    </div>
  );
};

export default Logout;
