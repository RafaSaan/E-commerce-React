import React from "react";
import "./Hero.css";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <div className="hero">
      <HeroInfo />
      <HeroImg />
    </div>
  );
};

export default Hero;
