import React from "react";
import HeaderLogo from "../headerLogo/HeaderLogo";
import Navbar from "../navBar/Navbar";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header_container}>
      <header>
        <HeaderLogo />
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
