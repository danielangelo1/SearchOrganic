import React from "react";
import style from "./Register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

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
  passConfirmation: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Nome completo é obrigatório"),
  birthDate: yup.date().required("Data de nascimento é obrigatória"),
  telephone: yup.string().required("Telefone é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório").max(14).min(14),
  // .test("is-cpf", "CPF inválido", validateCPF),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
  passConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas devem coincidir")
    .required("Confirmação de senha é obrigatória"),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response: AxiosResponse<userRegistrationResponse> =
        await axios.post("http://localhost:3001/users", data);
      alert(`Usuário registrado com o ID:${response.data.id}`);

      navigate("/login");
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
              className={`${errors.name ? style.inputError : style.inputValid}`}
            />
            {errors.name && (
              <p className={style.error_message}>{errors.name.message}</p>
            )}

            <label htmlFor="birthDate">Data de nascimento *</label>
            <input
              type="date"
              id="birthDate"
              {...register("birthDate", { required: true })}
              className={`${
                errors.birthDate ? style.inputError : style.inputValid
              }`}
            />
            {errors.birthDate && (
              <p className={style.error_message}>{errors.birthDate.message}</p>
            )}

            <label htmlFor="telephone">Telefone celular *</label>
            <input
              type="text"
              id="telephone"
              placeholder="99 99876-2342"
              {...register("telephone", { required: true })}
              className={`${
                errors.telephone ? style.inputError : style.inputValid
              }`}
            />
            {errors.telephone && (
              <p className={style.error_message}>{errors.telephone.message}</p>
            )}

            <label htmlFor="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              placeholder="123.456.789-12"
              className={`${errors.cpf ? style.inputError : style.inputValid}`}
              {...register("cpf", { required: true })}
            />
            {errors.cpf && (
              <p className={style.error_message}>{errors.cpf.message}</p>
            )}

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className={`${
                errors.email ? style.inputError : style.inputValid
              }`}
            />
            {errors.email && (
              <p className={style.error_message}>{errors.email.message}</p>
            )}

            <label htmlFor="password">Crie sua senha *</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className={`${
                errors.password ? style.inputError : style.inputValid
              }`}
            />
            {errors.password && (
              <p className={style.error_message}>{errors.password.message}</p>
            )}

            <label htmlFor="passConfirmation">Confirme sua senha *</label>
            <input
              type="password"
              id="passConfirmation"
              {...register("passConfirmation", { required: true })}
              className={`${
                errors.passConfirmation ? style.inputError : style.inputValid
              }`}
            />
            {errors.passConfirmation && (
              <p className={style.error_message}>
                {errors.passConfirmation.message}
              </p>
            )}
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
