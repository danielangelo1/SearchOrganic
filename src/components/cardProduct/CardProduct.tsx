import React from 'react';
import style from './CardProduct.module.scss';
import imgOrganic from '../../assets/card_product_organic.webp';
import { Heart } from '@phosphor-icons/react';

interface CardProductProps {
  imgsrc: string;
  name: string;
  price: string;
}

const CardProduct = ({ imgsrc, name, price }: CardProductProps) => {
  return (
    <>
      <div className={style.card_product}>
        <div>
          <img src={imgsrc} alt={`Imagem do produto ${name}`} />
          <img src={imgOrganic} alt="Produto orgânico" />
          <div className={style.favorite_button}>
            <Heart size={'1.5rem'} weight="bold" />
          </div>
        </div>
        <div className={style.card_product_body}>
          <span>{name}</span>
          <span>{price}</span>
        </div>
        <button>Adicionar</button>
      </div>
    </>
  );
};

export default CardProduct;
