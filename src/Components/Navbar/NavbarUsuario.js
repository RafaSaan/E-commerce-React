import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import "./NavbarUsuario.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarUsuario = ({ totalItems }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="nav__usuario">
      <Link to="#" onClick={() => loginWithRedirect()}>
        <BiIcons.BiUser className="user-icon" />
      </Link>
      <Link to="/carrito" className="cart-count">
        <CgIcons.CgShoppingCart className="cart-icon" />
        <p>{totalItems}</p>
      </Link>
    </div>
  );
};

export default NavbarUsuario;
