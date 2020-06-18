import React from "react";
import { Link } from "react-router-dom";
export const Comic = (props) => {
  return (
    <li>
      <Link to={`/comic/${props.id}`}>
        <img src={props.url} alt="Oopps" className="comicImg"></img>
      </Link>
      <p className="comicName">{props.name}</p>
    </li>
  );
};
