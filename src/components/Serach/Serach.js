import React from "react";
import { Hero } from "../Main/Hero/Hero";

const Search = ({ name, image }) => {
  return (
    <div>
      {name !== undefined ? <Hero name={name} image={image} /> : null}
    </div>
  );
};
export { Search };
