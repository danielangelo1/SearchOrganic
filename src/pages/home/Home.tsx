import React from "react";
import ProductsNavBar from "../../components/productsNavBar/ProductsNavBar";
import style from "./Home.module.scss";
import CardTestimony from "../../components/cardTestimony/CardTestimony";
import imageTestimony1 from "../../assets/depoimento-1-300.jpg";
import imageTestimony2 from "../../assets/depoimento-2-300.jpg";
import imageTestimony3 from "../../assets/depoimento-3-300.jpg";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <>
      <ProductsNavBar />
      <Carousel />
      <section className={style.section_testimonials}>
        <p>Depoimentos</p>
        <div className={style.card_testimonials_container}>
          <CardTestimony
            name="Vanessa"
            imgsrc={imageTestimony1}
            text="Parabéns pelo serviço! O Search Organic me ajuda a ter uma vida mais saudável e ainda ajuda os pequenos produtores."
          />
          <CardTestimony
            name="Carlos"
            imgsrc={imageTestimony2}
            text="Nunca mais vou precisar ir ao mercado. O Search Organic me ajuda a ter uma alimentação saudável e ainda economizo tempo e dinheiro."
          />
          <CardTestimony
            name="Pablo"
            imgsrc={imageTestimony3}
            text="Melhor forma de conseguir alimentos de qualidade e com bom preço. O Search Organic é uma ótima opção para quem quer ter uma alimentação saudável."
          />
        </div>
      </section>
    </>
  );
};

export default Home;
