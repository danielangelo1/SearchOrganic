import React from 'react';
import style from './CardTestimony.module.scss';

interface CardTestimonyProps {
  name: string;
  imgsrc: string;
  text: string;
}

const CardTestimony = ({ name, imgsrc, text }: CardTestimonyProps) => {
  return (
    <>
      <div className={style.card}>
        <div>
          <img src={imgsrc} alt={`Foto de perfil de ${name}`} loading="lazy" />
        </div>
        <span>{name}</span>
        <div>{text}</div>
      </div>
    </>
  );
};

export default CardTestimony;
