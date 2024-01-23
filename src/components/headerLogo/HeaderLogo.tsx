import { Leaf } from "@phosphor-icons/react";
import React from "react";
import "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className='logo'>
        <Leaf size={32} />
        <span>Search Organic</span>
    </div>
  );
};

export default HeaderLogo;
