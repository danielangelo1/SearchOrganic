import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import style from "./Carousel.module.scss";

import imageSmall3 from "../../assets/carrossel-3-400.webp";
import imageLarge3 from "../../assets/carrossel-3-900.webp";
import imageXLarge3 from "../../assets/carrossel-3-1280.webp";

import imageSmall2 from "../../assets/carrossel-2-400.webp";
import imageLarge2 from "../../assets/carrossel-2-900.webp";
import imageXLarge2 from "../../assets/carrossel-2-1280.webp";

import imageSmall1 from "../../assets/carrossel-1-400.webp";
import imageLarge1 from "../../assets/carrossel-1-900.webp";
import imageXLarge1 from "../../assets/carrossel-1-1280.webp";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      className={style.swiper_container}
      style={{
        "--swiper-theme-color": "#007766",
        "--swiper-pagination-color": "#007766",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <SwiperSlide className={style.slide_item}>
        <img
          srcSet={`${imageSmall1} 400w, ${imageLarge1}   900w, ${imageXLarge1} 1280w`}
          src={`${imageXLarge1}`}
          alt="Foto de uma feira com varias cestas de verduras e legumes"
        />
        <div className={style.slide_text_content}>
          <h1>Receba alimentos fresquinhos no conforto da sua casa!</h1>
          <button>Saiba mais!</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide_item}>
        <img
          srcSet={`${imageSmall2} 400w, ${imageLarge2}   900w, ${imageXLarge2} 1280w`}
          src={`${imageXLarge2}`}
          alt="Foto de um homem no campo colhendo tomates"
        />
        <div className={style.slide_text_content}>
          <h1>Receba alimentos fresquinhos no conforto da sua casa!</h1>
          <button>Saiba mais!</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide_item}>
        adi
        <img
          srcSet={`${imageSmall3} 400w, ${imageLarge3}   900w, ${imageXLarge3} 1280w`}
          src={`${imageXLarge3}`}
          alt="Imagem de mãos de pessoas diferentes segurando uma cesta de tomate"
        />
        <div className={style.slide_text_content}>
          <h1>Receba alimentos fresquinhos no conforto da sua casa!</h1>
          <button>Saiba mais!</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
