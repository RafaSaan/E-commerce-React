import React from "react";
import "./HeroImg.css";
import heroImgMirlo from "../../Media/heroImgMirlo.png";

const HeroImg = () => {
  return (
    <div className="hero__img__container">
      <img src={heroImgMirlo} alt="Maceta" className="hero__img" />
    </div>
  );
};

export default HeroImg;
