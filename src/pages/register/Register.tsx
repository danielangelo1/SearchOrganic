import React from "react";
import style from "./Register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

interface userRegistrationResponse {
  id: string | number;
  error?: string;
}

interface UserFormData {
  name: string;
  birthDate: Date;
  telephone: string;
  cpf: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>();

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response: AxiosResponse<userRegistrationResponse> =
        await axios.post("http://localhost:3001/users", data);
      alert(`Usuário registrado com o ID:${response.data.id}`);

      reset();
    } catch (error) {
      console.error("User não cadastrado");
    }
  };

  return (
    <>
      <main className={style.register_page}>
        <h1>Cadastro</h1>
        <form
          className={style.form_container}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className={style.error_message}>Nome é obrigatório</p>
            )}

            <label htmlFor="birthDate">Data de nascimento *</label>
            <input
              type="date"
              id="birthDate"
              {...register("birthDate", { required: true })}
            />
            {errors.birthDate && (
              <p className={style.error_message}>
                Data de nascimento é obrigatório
              </p>
            )}

            <label htmlFor="telephone">Telefone celular *</label>
            <input
              type="text"
              id="telephone"
              placeholder="99 99876-2342"
              {...register("telephone", { required: true })}
            />
            {errors.telephone && (
              <p className={style.error_message}>Telefone é obrigatório</p>
            )}

            <label htmlFor="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              placeholder="123.456.789-12"
              {...register("cpf", { required: true })}
            />
            {errors.cpf && (
              <p className={style.error_message}>CPF é obrigatório</p>
            )}

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className={style.error_message}>Email é obrigatório</p>
            )}

            <label htmlFor="password">Crie sua senha *</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className={style.error_message}>Senha é obrigatório</p>
            )}

            {/* <label htmlFor="passConfirmation">Confirme sua senha *</label>
            <input type="password" id="passConfirmation" /> */}
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
          <Link to="/login" className={style.link}>
            Já tenho cadastro
          </Link>
        </form>
      </main>
    </>
  );
};

export default Register;
