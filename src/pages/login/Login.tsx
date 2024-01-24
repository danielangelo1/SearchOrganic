import React from "react";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import { FacebookLogo, GoogleLogo } from "@phosphor-icons/react";

const Login = () => {
  return <div>
    <main className={style.main}>
      <h1>Login</h1>
      <form className={style.formContainer}>

        <div className={style.formLabelInput}>
          <label htmlFor="email">Endereço de e-mail</label>
          <input type="email" id="email" />
        </div>

        <div className={style.formLabelInput}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
        </div>

        <div className={style.formLinks}>
          <button>Entrar</button>
          <span>Esqueci a senha</span>
        </div>
      </form>

      <div className={style.horizontalLine}></div>

      <div className={style.sectionRegister}>
        <p>
          Novo no Search Organic? <Link to={'/register'}>CADASTRE-SE</Link> 
        </p>
        <p>
          Quero acessar com minhas redes sociais
        </p>

        <div className={style.socialMediaContainer}>

          <div className={style.btnFacebook}>
            <FacebookLogo size={16} weight="bold" />
            <span>Facebook</span>
          </div>

          <div className={style.btnGoogle}>
            <GoogleLogo size={16} weight="bold" />  
            <span>Google</span>
          </div>    

        </div>

      </div>

    </main>
  </div>;
};

export default Login;
