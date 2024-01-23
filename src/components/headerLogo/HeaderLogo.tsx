import { Leaf } from "@phosphor-icons/react";
import React from "react";
import style from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className={style.logo}>
      <Leaf size={"2rem"} />
      <span>Search Organic</span>
    </div>
  );
};

export default HeaderLogo;
