import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo__container">
      <Link to={"/"} className="logo">
        <h1>Mia</h1>
      </Link>
    </div>
  );
};

export default Logo;
