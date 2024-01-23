import React from "react";
import style from "./Footer.module.scss";
import { InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className={style.links_footer}>

          <div>
            <p>Categorias</p>
            <ul>
              <li>Arroz e Feijão</li>
              <li>Frutas</li>
              <li>Leites</li>
              <li>Legumes</li>
              <li>Ovos</li>
              <li>Verduras e Temperos</li>
            </ul>
          </div>

          <div>
            <p>Empresa</p>
            <ul>
              <li>Sobre nós</li>
              <li>Contato</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

          <div>
            <p>Atendimento</p>
            <ul>
              <li>Perguntas frequentes</li>
              <li>Política de privacidade</li>
              <li>Política de troca e devolução</li>
            </ul>
          </div>
        </nav>
        <div className={style.direitos}>
        <p>Search Organic © 2024</p>
        <div className={style.redes_sociais}>   
          <Link to="/"><FacebookLogo size={"2rem"} /></Link>
          <Link to="/"><InstagramLogo size={"2rem"} /></Link>
          <Link to="/"><TwitterLogo size={"2rem"} /></Link>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
