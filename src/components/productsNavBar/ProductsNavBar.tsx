import React from "react";
import NavBarItem from "../navBarItem/NavBarItem";
import style from "./ProductsNavBar.module.scss";

const ProductsNavBar = () => {
  return (
    <nav className={style.products_nav}>
      <NavBarItem to={"/store/graos"}>Graõs</NavBarItem>
      <NavBarItem to={"/store/frutas"}>Frutas</NavBarItem>
      <NavBarItem to={"/store/leites"}>Leites</NavBarItem>
      <NavBarItem to={"/store/legumes"}>Legumes</NavBarItem>
      <NavBarItem to={"/store/ovos"}>Ovos</NavBarItem>
    </nav>
  );
};

export default ProductsNavBar;
