import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import "./NavbarUsuario.css";
import { Link } from "react-router-dom";

const NavbarUsuario = () => {
  return (
    <div className="nav__usuario">
      <Link to="/usuario">
        <BiIcons.BiUser className="user-icon" />
      </Link>
      <Link to="/carrito">
        <CgIcons.CgShoppingCart className="cart-icon" />
      </Link>
    </div>
  );
};

export default NavbarUsuario;
