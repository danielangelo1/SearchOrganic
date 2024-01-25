import React from "react";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import { FacebookLogo, GoogleLogo } from "@phosphor-icons/react";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email é obrigatório."),
  password: yup.string().required("Senha é obrigatória"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${data.email}&password=${data.password}`
      );
      if (response.data.length > 0) {
        alert(`${response.data[0].name} logado`);
      } else {
        console.error("deu ruim");
      }
    } catch (error) {
      console.error("falha no login", error);
    }
  };

  return (
    <div>
      <main className={style.main}>
        <h1>Login</h1>
        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formLabelInput}>
            <label htmlFor="email">Endereço de e-mail</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className={style.error_message}>{errors.email.message}</p>
            )}
          </div>

          <div className={style.formLabelInput}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className={style.error_message}>{errors.password.message}</p>
            )}
          </div>

          <div className={style.formLinks}>
            <button type="submit">Entrar</button>
            <span>Esqueci a senha</span>
          </div>
        </form>

        <div className={style.horizontalLine}></div>

        <div className={style.sectionRegister}>
          <p>
            Novo no Search Organic? <Link to={"/register"}>CADASTRE-SE</Link>
          </p>
          <p>Quero acessar com minhas redes sociais</p>

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
    </div>
  );
};

export default Login;
