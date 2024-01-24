import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper"; // Corrected import

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import style from "./Carousel.module.scss";

// interface CarouselProps {
//   settings: SwiperProps;
//   children: ReactNode;
// }

const Carousel = () => {
  return (
    <Swiper
      //   modules={[Navigation, Pagination]}
      //   navigation={true}
      //   pagination={{ clickable: true }}
      className={style.swiper_container}
    >
      <SwiperSlide className={style.slide_item}>
        <img
          src={require("../../assets/carrossel-1.webp")}
          alt="Foto de uma feira com varias cestas de verduras e legumes"
        />
        <div className={style.slide_text_content}>
          <h1>Receba alimentos fresquinhos no conforto da sua casa!</h1>
          <button>Saiba mais!</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide_item}>
        <img
          src={require("../../assets/carrossel-2.webp")}
          alt="Foto de um homem no campo colhendo tomates"
        />
        <div className={style.slide_text_content}>
          <h1>Receba alimentos fresquinhos no conforto da sua casa!</h1>
          <button>Saiba mais!</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className={style.slide_item}>
        <img
          src={require("../../assets/carrossel-3.webp")}
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
