import React from "react";
import { Link } from "react-router-dom";

import style from "./Hero.module.css";

const Hero = ({ name, image, id, addMember }) => {
  return (
    <div className={style.heroWrapper}>
      <h1 className={style.heroName}>{name}</h1>
      <img src={image} alt="slika" className={style.heroImg} />
      <div className={style.heroBtn}>
        <Link to={`/info/${id}`}>
          <button>Info</button>{" "}
        </Link>
        <button onClick={() => addMember(id)}>Add</button>
      </div>
    </div>
  );
};
export { Hero };
