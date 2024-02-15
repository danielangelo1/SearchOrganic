import React from "react";
import NavBarItem from "../navBarItem/NavBarItem";
import "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <NavBarItem to="/" tabindex={2}>
        Início
      </NavBarItem>
      <NavBarItem to="/store" tabindex={3}>
        Loja
      </NavBarItem>
      <NavBarItem to="/news" tabindex={4}>
        Novidades
      </NavBarItem>
      <NavBarItem to="/about" tabindex={5}>
        Sobre nós
      </NavBarItem>
      <NavBarItem to="/cart" tabindex={6}>
        Carrinho
      </NavBarItem>
      <NavBarItem to="/login" tabindex={7}>
        Login
      </NavBarItem>
    </nav>
  );
};

export default Navbar;
