import React from "react";
import "./Hero.css";

const Hero = ({ name, image }) => {
  return (
    <div className="Hero__Wrapper">
      <h1 className="Hero__name">{name}</h1>
      <img src={image} alt="slika" className="Hero__image" />
      <div className="Hero__btn">
        <button>Info</button>
        <button>Add</button>
      </div>
    </div>
  );
};
export { Hero };
