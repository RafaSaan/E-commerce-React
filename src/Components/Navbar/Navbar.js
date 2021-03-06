import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarUsuario from "./NavbarUsuario";

const Navbar = ({ totalItems }) => {
  return (
    <nav className="nav">
      <Logo />
      <NavbarMenu />
      <NavbarUsuario totalItems={totalItems} />
    </nav>
  );
};

export default Navbar;
