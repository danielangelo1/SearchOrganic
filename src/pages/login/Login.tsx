import React from 'react';
import style from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookLogo, GoogleLogo } from '@phosphor-icons/react';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('O campo email é obrigatório.')
    .email('Digite um email válido, incluindo @ e . para realizar o login.'),
  password: yup
    .string()
    .required('O campo senha é obrigatória')
    .min(
      8,
      'Digite sua senha com no mínimo 8 caracteres para realizar o login'
    ),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${data.email}&password=${data.password}`
      );
      if (response.data.length > 0) {
        alert(`${response.data[0].name} logado`);
        localStorage.setItem('isLogged', 'true');
        navigate('/about');
      } else {
        alert('Não foi possível realizar o login');
      }
    } catch (error) {
      console.error('Falha no login', error);
    }
  };

  localStorage.setItem('isLogged', 'false');

  return (
    <div>
      <main className={style.mainLogin}>
        <h1>Login</h1>
        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formLabelInput}>
            <label htmlFor="email">
              Endereço de e-mail <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              maxLength={50}
              min={1}
              {...register('email', { required: true })}
              className={`${
                touchedFields.email && !errors.email ? style.inputValid : ''
              } ${errors.email ? style.inputError : ''}`}
              tabIndex={1}
            />
            {errors.email && (
              <p className={style.error_message}>{errors.email.message}</p>
            )}
          </div>

          <div className={style.formLabelInput}>
            <label htmlFor="password">
              Senha <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              min={1}
              {...register('password', { required: true })}
              className={`${
                touchedFields.password && !errors.password
                  ? style.inputValid
                  : ''
              } ${errors.password ? style.inputError : ''}`}
              tabIndex={2}
            />
            {errors.password && (
              <p className={style.error_message}>{errors.password.message}</p>
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
