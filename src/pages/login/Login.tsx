import React from 'react';
import style from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookLogo, GoogleLogo } from '@phosphor-icons/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../feature/hooks/hooks';
import { setLogin } from '../../feature/loginSlice';
import { api } from '../../axios/axios';

interface FormData {
  login: string;
  senha: string;
}

const schema = yup.object().shape({
  login: yup.string().required('O campo login é obrigatório.'),
  senha: yup
    .string()
    .required('O campo senha é obrigatória')
    .min(
      8,
      'Digite sua senha com no mínimo 8 caracteres para realizar o login'
    ),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post('/auth/login', data, {


      
      if (response) {
        alert(`${getValues().login} logado`);
        localStorage.setItem('isLogged', 'true');
        dispatch(
          setLogin({
            login: getValues('login'),
            token: response.data.token,
          })
        );
        navigate('/about');
      } else {
        alert("Não foi possível realizar o login");
      }
    } catch (error) {
      console.error("Falha no login", error);
    }
  };

  localStorage.setItem('isLogged', 'false');

  return (
    <div>
      <main className={style.mainLogin}>
        <h1>Login</h1>
        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formLabelInput}>
            <label htmlFor="login">
              Digite seu login <span>*</span>
            </label>
            <input
              type="text"
              id="login"
              maxLength={50}
              min={1}
              {...register('login', { required: true })}
              className={`${
                touchedFields.login && !errors.login ? style.inputValid : ''
              } ${errors.login ? style.inputError : ''}`}
              tabIndex={1}
            />
            {errors.login && (
              <p className={style.error_message}>{errors.login.message}</p>
            )}
          </div>

          <div className={style.formLabelInput}>
            <label htmlFor="senha">
              Senha <span>*</span>
            </label>
            <input
              type="password"
              id="senha"
              min={1}
              {...register('senha', { required: true })}
              className={`${
                touchedFields.senha && !errors.senha ? style.inputValid : ''
              } ${errors.senha ? style.inputError : ''}`}
              tabIndex={2}
            />
            {errors.senha && (
              <p className={style.error_message}>{errors.senha.message}</p>
            )}
          </div>

          <div className={style.formLinks}>
            <button type="submit" tabIndex={3}>
              Entrar
            </button>
            <span tabIndex={4}>Esqueci a senha</span>
          </div>
        </form>

        <div className={style.horizontalLine}></div>

        <div className={style.sectionRegister}>
          <p>
            Novo no Search Organic?{' '}
            <Link to={'/register'} tabIndex={5}>
              CADASTRE-SE
            </Link>
          </p>
          <p>Quero acessar com minhas redes sociais</p>

          <div className={style.socialMediaContainer}>
            <div className={style.btnFacebook} tabIndex={6}>
              <FacebookLogo size={16} weight="bold" />
              <span>Facebook</span>
            </div>

            <div className={style.btnGoogle} tabIndex={7}>
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
