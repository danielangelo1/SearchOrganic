import React from "react";
import NavBarItem from "../navBarItem/NavBarItem";
import "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <NavBarItem to="/">Início</NavBarItem>
      <NavBarItem to="/store">Loja</NavBarItem>
      <NavBarItem to="/news">Novidades</NavBarItem>
      <NavBarItem to="/about">Sobre nós</NavBarItem>
      <NavBarItem to="/login">Login</NavBarItem>
    </nav>
  );
};

export default Navbar;
