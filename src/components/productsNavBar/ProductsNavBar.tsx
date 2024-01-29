import React from 'react';
import NavBarItem from '../navBarItem/NavBarItem';
import style from './ProductsNavBar.module.scss';

const ProductsNavBar = () => {
  return (
    <nav className={style.products_nav}>
      <NavBarItem to={'/store/graos'} tabindex={7}>
        Graõs
      </NavBarItem>
      <NavBarItem to={'/store/frutas'} tabindex={8}>
        Frutas
      </NavBarItem>
      <NavBarItem to={'/store/leites'} tabindex={9}>
        Leites
      </NavBarItem>
      <NavBarItem to={'/store/legumes'} tabindex={10}>
        Legumes
      </NavBarItem>
      <NavBarItem to={'/store/ovos'} tabindex={11}>
        Ovos
      </NavBarItem>
    </nav>
  );
};

export default ProductsNavBar;
