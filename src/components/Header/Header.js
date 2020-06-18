import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="Header__wrapper">
    <Link to="/">
      <h1 className="Header__title">Hero Team</h1>
    </Link>
  </div>
);

export { Header };
