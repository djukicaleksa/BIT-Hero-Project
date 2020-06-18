import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = ({ name, image, id, addMember }) => {
  return (
    <div className="Hero__Wrapper">
      <h1 className="Hero__name">{name}</h1>
      <img src={image} alt="slika" className="Hero__image" />
      <div className="Hero__btn">
        <Link to={`/info/${id}`}>
          <button>Info</button>{" "}
        </Link>
        <button onClick={() => addMember(id)}>Add</button>
      </div>
    </div>
  );
};
export { Hero };
