import { Leaf } from "@phosphor-icons/react";
import React from "react";
import style from "./HeaderLogo.module.scss";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to={"/"} className={style.logo}>
      <Leaf size={"2rem"} />
      <span>Search Organic</span>
    </Link>
  );
};

export default HeaderLogo;
