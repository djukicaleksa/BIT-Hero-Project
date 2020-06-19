import React from "react";
import { Link } from "react-router-dom";
import style from "../HeroInfo.module.css"
export const Comic = (props) => {
  return (
    <li className={style.listItem}>
      <Link to={`/comic/${props.id}`}>
        <img src={props.url} alt="Oopps" className={style.comicImg}></img>
      </Link>
      <p className={style.comicName}>{props.name}</p>
    </li>
  );
};
