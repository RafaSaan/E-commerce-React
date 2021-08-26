import React from "react";
import "./NavbarMenu.css";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <ul className="nav__menu">
      <li className="nav__item">
        {" "}
        <NavLink
          exact
          to="/"
          className="nav__link"
          activeClassName="nav-active"
        >
          Inicio
        </NavLink>{" "}
      </li>
      <li className="nav__item">
        {" "}
        <NavLink
          to="/tienda"
          className="nav__link"
          activeClassName="nav-active"
        >
          Tienda
        </NavLink>{" "}
      </li>
      <li className="nav__item">
        {" "}
        <NavLink
          to="/contacto"
          className="nav__link"
          activeClassName="nav-active"
        >
          Contacto
        </NavLink>{" "}
      </li>
    </ul>
  );
};

export default NavbarMenu;
