import React from "react";
import style from "./CardProduct.module.scss";
import imgOrganic from "../../assets/card_product_organic.webp";
import { Heart } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/cartSlice";

export interface CardProductProps {
  imgsrc: string;
  name: string;
  price: string;
  tabindex?: number;
}

const CardProduct = ({ imgsrc, name, price, tabindex }: CardProductProps) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addToCart({ products: [{ imgsrc, name, price }] }));
    alert("Produto adicionado ao carrinho");
  };

  return (
    <>
      <div className={style.card_product} tabIndex={tabindex}>
        <div>
          <img src={imgsrc} alt={`Imagem do produto ${name}`} loading="lazy" />
          <img src={imgOrganic} alt="Produto orgânico" loading="lazy" />
          <div className={style.favorite_button}>
            <Heart size={"1.5rem"} weight="bold" />
          </div>
        </div>
        <div className={style.card_product_body}>
          <span>{name}</span>
          <span>{price}</span>
        </div>
        <button tabIndex={tabindex} onClick={handleAddCart}>
          Adicionar
        </button>
      </div>
    </>
  );
};

export default CardProduct;
