import React from 'react';
import { useAppSelector } from '../../feature/hooks/hooks';

const About = () => {
  const loginData = useAppSelector((state) => state.login) || '';
  console.log(loginData);
  return (
    <div>
      <h1>About</h1>
      <p>Olá, {loginData.login}</p>
    </div>
  );
};

export default About;
