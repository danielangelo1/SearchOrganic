import React from "react";
import HeaderLogo from "../headerLogo/HeaderLogo";
import Navbar from "../navBar/Navbar";
import "./Header.module.scss";

const Header = () => {
  return (
      <div className="header-container">
        <header>
          <HeaderLogo />
          <Navbar />
        </header>
      </div>
  );
};

export default Header;
