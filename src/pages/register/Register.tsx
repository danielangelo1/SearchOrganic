import React from "react";
import style from "./Register.module.scss";

const Register = () => {
  return (
    <>
      <h1>Cadastro</h1>
      <form className={style.form_container}>
        <div>
          <label htmlFor="name">Nome Completo *</label>
          <input type="text" id="name" />
          <label htmlFor="birthDate">Data de nascimento *</label>
          <input type="date" id="birthDate" />
          <label htmlFor="telephone">Telefone celular *</label>
          <input type="text" id="telephone" placeholder="99 99876-2342" />
          <label htmlFor="cpf">CPF *</label>

          <input type="text" id="cpf" placeholder="123.456.789-12" />
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" />
          <label htmlFor="password">Crie sua senha *</label>
          <input type="password" id="password" />
          <label htmlFor="passConfirmation">Confirme sua senha *</label>
          <input type="password" id="passConfirmation" />
        </div>
        <div className={style.options}>
          <div>
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              Quero receber ofertas e novidades por e-mail, SMS, WhatsApp ou
              mensagens!
            </label>
          </div>
          <div>
            <input type="checkbox" id="policy" />
            <label htmlFor="policy">
              Li e estou de acordo com as políticas da empresa e políticas de
              privacidade.*
            </label>
          </div>
        </div>
        <button>Confirmar</button>
      </form>
    </>
  );
};

export default Register;
