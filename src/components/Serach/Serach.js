import React from "react";
import { Hero } from "../Main/Hero/Hero";
import "./Search.css";

const Search = ({ name, image, id }) => {
  return (
    <div className="Search__wrapper">
      {name !== undefined ? <Hero name={name} image={image} id={id} /> : null}
    </div>
  );
};
export { Search };
