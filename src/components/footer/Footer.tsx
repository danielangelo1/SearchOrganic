import React from "react";
import style from "./Footer.module.scss";
import { InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <>
      <div className={style.direitos}></div>
      <p>Search Organic © 2024</p>
      <div className={style.redes_sociais}>
        <FacebookLogo size={"2rem"} />
        <InstagramLogo size={"2rem"} />
        <TwitterLogo size={"2rem"} />
      </div>
    </>
  );
};

export default Footer;
