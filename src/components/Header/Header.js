import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => (
  <div className={style.headerWrapper}>
    <Link to="/">
      <h1 className={style.headerTitle}>Hero Team</h1>
    </Link>
  </div>
);

export { Header };
