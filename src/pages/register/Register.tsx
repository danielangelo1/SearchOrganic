import style from "./Register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { api } from "../../axios/axios";

interface userRegistrationResponse {
  id: string | number;
  error?: string;
}

interface UserFormData {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  cpf: string;
  email: string;
  login: string;
  senha: string;
}

const schema = yup.object().shape({
  nome: yup.string().required("Nome completo é obrigatório"),
  sobrenome: yup.string().required("Sobrenome é obrigatório"),
  dataNascimento: yup.date().required("Data de nascimento é obrigatória"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .max(11, "CPF deve seguir o formato 12312312311")
    .min(11, "CPF deve seguir o formato 12312312311"),
  // .test("is-cpf", "CPF inválido", validateCPF),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  login: yup.string().required("Login é obrigatório"),
  senha: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<UserFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response: AxiosResponse<userRegistrationResponse> = await api.post(
        "/auth/cadastrar",
        {
          ...data,
          dataNascimento: data.dataNascimento.toISOString().split("T")[0],
          tipoAtivo: "S",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        },
      );
      alert(`Usuário cadastrado`);

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
            <label htmlFor="nome">
              Nome Completo <span>*</span>
            </label>
            <input
              type="text"
              id="nome"
              maxLength={50}
              {...register("nome", { required: true })}
              className={`${
                touchedFields.nome && !errors.nome ? style.inputValid : ""
              } ${errors.nome ? style.inputError : ""}`}
              tabIndex={1}
            />
            {errors.nome && (
              <p className={style.error_message}>{errors.nome.message}</p>
            )}

            <label htmlFor="sobrenome">
              Sobrenome <span>*</span>
            </label>
            <input
              type="text"
              id="sobrenome"
              maxLength={50}
              {...register("sobrenome", { required: true })}
              className={`${
                touchedFields.sobrenome && !errors.sobrenome
                  ? style.inputValid
                  : ""
              } ${errors.sobrenome ? style.inputError : ""}`}
              tabIndex={3}
            />
            {errors.sobrenome && (
              <p className={style.error_message}>{errors.sobrenome.message}</p>
            )}

            <label htmlFor="dataNascimento">
              Data de nascimento <span>*</span>
            </label>
            <input
              type="date"
              id="dataNascimento"
              {...register("dataNascimento", { required: true })}
              className={`${
                touchedFields.dataNascimento && !errors.dataNascimento
                  ? style.inputValid
                  : ""
              } ${errors.dataNascimento ? style.inputError : ""}`}
              tabIndex={2}
            />
            {errors.dataNascimento && (
              <p className={style.error_message}>
                {errors.dataNascimento.message}
              </p>
            )}

            <label htmlFor="cpf">
              CPF <span>*</span>
            </label>
            <input
              type="text"
              id="cpf"
              maxLength={14}
              className={`${
                touchedFields.cpf && !errors.cpf ? style.inputValid : ""
              } ${errors.cpf ? style.inputError : ""}`}
              {...register("cpf", { required: true })}
              tabIndex={4}
            />
            {errors.cpf && (
              <p className={style.error_message}>{errors.cpf.message}</p>
            )}

            <div className={style.required}>999.999.999-99</div>

            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              maxLength={50}
              {...register("email", { required: true })}
              className={`${
                touchedFields.email && !errors.email ? style.inputValid : ""
              } ${errors.email ? style.inputError : ""}`}
              tabIndex={5}
            />
            {errors.email && (
              <p className={style.error_message}>{errors.email.message}</p>
            )}

            <label htmlFor="login">
              Crie seu login <span>*</span>
            </label>
            <input
              type="text"
              id="login"
              maxLength={50}
              {...register("login", { required: true })}
              className={`${
                touchedFields.login && !errors.login ? style.inputValid : ""
              } ${errors.login ? style.inputError : ""}`}
              tabIndex={6}
            />
            {errors.login && (
              <p className={style.error_message}>{errors.login.message}</p>
            )}

            <label htmlFor="senha">
              Crie sua senha <span>*</span>
            </label>
            <input
              type="password"
              id="senha"
              maxLength={50}
              {...register("senha", { required: true })}
              className={`${
                touchedFields.senha && !errors.senha ? style.inputValid : ""
              } ${errors.senha ? style.inputError : ""}`}
              tabIndex={6}
            />
            {errors.senha && (
              <p className={style.error_message}>{errors.senha.message}</p>
            )}

            <div className={style.required}>Ao menos 8 caracteres</div>
          </div>

          <div className={style.options}>
            <div>
              <input type="checkbox" id="newsletter" tabIndex={8} />
              <label htmlFor="newsletter">
                Quero receber ofertas e novidades por e-mail, SMS, WhatsApp ou
                mensagens!
              </label>
            </div>
            <div>
              <input type="checkbox" id="policy" tabIndex={9} />
              <label htmlFor="policy">
                Li e estou de acordo com as políticas da empresa e políticas de
                privacidade.*
              </label>
            </div>
          </div>
          <button tabIndex={10}>Confirmar</button>
          <Link to="/login" className={style.link} tabIndex={11}>
            Já tenho cadastro
          </Link>
        </form>
      </main>
    </>
  );
};

export default Register;
