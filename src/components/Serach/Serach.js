import React from "react";
import { Hero } from "../Main/Hero/Hero";

const Search = ({ name, image, id }) => {
  return (
    <div>
      {name !== undefined ? <Hero name={name} image={image} id={id} /> : null}
    </div>
  );
};
export { Search };
