import React from 'react';
import style from './Register.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

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
  name: yup.string().required('Nome completo é obrigatório'),
  birthDate: yup.date().required('Data de nascimento é obrigatória'),
  telephone: yup.string().required('Telefone é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .max(14, 'CPF deve seguir o formato 123.123.123-11')
    .min(14, 'CPF deve seguir o formato 123.123.123-11'),
  // .test("is-cpf", "CPF inválido", validateCPF),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
  passConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'As senhas devem coincidir')
    .required('Confirmação de senha é obrigatória'),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<UserFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response: AxiosResponse<userRegistrationResponse> =
        await axios.post('http://localhost:3001/users', data);
      alert(`Usuário registrado com o ID:${response.data.id}`);

      navigate('/login');
    } catch (error) {
      console.error('User não cadastrado');
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
            <label htmlFor="name">
              Nome Completo <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              maxLength={50}
              {...register('name', { required: true })}
              className={`${
                touchedFields.name && !errors.name ? style.inputValid : ''
              } ${errors.name ? style.inputError : ''}`}
              tabIndex={1}
            />
            {errors.name && (
              <p className={style.error_message}>{errors.name.message}</p>
            )}

            <label htmlFor="birthDate">
              Data de nascimento <span>*</span>
            </label>
            <input
              type="date"
              id="birthDate"
              {...register('birthDate', { required: true })}
              className={`${
                touchedFields.birthDate && !errors.birthDate
                  ? style.inputValid
                  : ''
              } ${errors.birthDate ? style.inputError : ''}`}
              tabIndex={2}
            />
            {errors.birthDate && (
              <p className={style.error_message}>{errors.birthDate.message}</p>
            )}

            <label htmlFor="telephone">
              Telefone celular <span>*</span>
            </label>
            <input
              type="text"
              id="telephone"
              maxLength={13}
              placeholder="99 99876-2342"
              {...register('telephone', { required: true })}
              className={`${
                touchedFields.telephone && !errors.telephone
                  ? style.inputValid
                  : ''
              } ${errors.telephone ? style.inputError : ''}`}
              tabIndex={3}
            />
            {errors.telephone && (
              <p className={style.error_message}>{errors.telephone.message}</p>
            )}
            <div className={style.required}>99 99999-9999</div>

            <label htmlFor="cpf">
              CPF <span>*</span>
            </label>
            <input
              type="text"
              id="cpf"
              maxLength={14}
              className={`${
                touchedFields.cpf && !errors.cpf ? style.inputValid : ''
              } ${errors.cpf ? style.inputError : ''}`}
              {...register('cpf', { required: true })}
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
              {...register('email', { required: true })}
              className={`${
                touchedFields.email && !errors.email ? style.inputValid : ''
              } ${errors.email ? style.inputError : ''}`}
              tabIndex={5}
            />
            {errors.email && (
              <p className={style.error_message}>{errors.email.message}</p>
            )}

            <label htmlFor="password">
              Crie sua senha <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              maxLength={50}
              {...register('password', { required: true })}
              className={`${
                touchedFields.password && !errors.password
                  ? style.inputValid
                  : ''
              } ${errors.password ? style.inputError : ''}`}
              tabIndex={6}
            />
            {errors.password && (
              <p className={style.error_message}>{errors.password.message}</p>
            )}

            <div className={style.required}>Ao menos 8 caracteres</div>
            <label htmlFor="passConfirmation">
              Confirme sua senha <span>*</span>
            </label>
            <input
              type="password"
              id="passConfirmation"
              maxLength={50}
              {...register('passConfirmation', { required: true })}
              className={`${
                touchedFields.passConfirmation && !errors.passConfirmation
                  ? style.inputValid
                  : ''
              } ${errors.passConfirmation ? style.inputError : ''}`}
              tabIndex={7}
            />
            {errors.passConfirmation && (
              <p className={style.error_message}>
                {errors.passConfirmation.message}
              </p>
            )}
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
