import React from "react";
import { Button } from 'react-materialize'


import style from "../HeroInfo.module.css"
export const Comic = (props) => {
  return (
    <li className={style.listItem}>

      <img src={props.url} alt="Oopps" className={style.comicImg}></img>
      <Button
        className="modal-trigger"
        href="#modal1"
        node="button"
      >
        <img src='https://static.thenounproject.com/png/378109-200.png' alt='Oopps' width='50px' onClick={props.showModal} data-id={props.id}></img>

      </Button>

      <p className={style.comicName}>{props.name}</p>
    </li>
  );
};
