import React from 'react';
import ProductsNavBar from '../../components/productsNavBar/ProductsNavBar';
import style from './Home.module.scss';
import CardTestimony from '../../components/cardTestimony/CardTestimony';
import imageTestimony1 from '../../assets/depoimento-1-300.webp';
import imageTestimony2 from '../../assets/depoimento-2-300.webp';
import imageTestimony3 from '../../assets/depoimento-3-300.webp';
import imagePropaganda from '../../assets/propaganda-imagem-400.webp';
import Carousel from '../../components/carousel/Carousel';
import CardProduct from '../../components/cardProduct/CardProduct';
import imagemProduct1 from '../../assets/alface-americana-product.webp';
import imagemProduct2 from '../../assets/tomate-italiano-product.webp';
import imagemProduct3 from '../../assets/mamao-papaya-product.webp';
import imagemProduct4 from '../../assets/tomate-perinha-product.webp';
import imagemProduct5 from '../../assets/cenoura-product.webp';
import OurMission from '../../components/ourMission/OurMission';

const Home = () => {
  return (
    <>
      <ProductsNavBar />
      <Carousel />
      <OurMission />
      <section className={style.section_vegetable_garden}>
        <p>Nossa horta</p>

        <div className={style.card_product_container}>
          <CardProduct
            imgsrc={imagemProduct1}
            name="Alface Americana"
            price="R$ 7,40"
          />
          <CardProduct
            imgsrc={imagemProduct2}
            name="Tomate Italiano"
            price="R$ 9,90"
          />
          <CardProduct
            imgsrc={imagemProduct3}
            name="Mamão Papaya"
            price="R$ 8,20"
          />
          <CardProduct
            imgsrc={imagemProduct4}
            name="Tomate Perinha"
            price="R$ 7,90"
          />
          <CardProduct imgsrc={imagemProduct5} name="Cenoura" price="R$ 6,90" />
        </div>
      </section>

      <section className={style.section_propaganda}>
        <div className={style.propaganda_text}>
          <p>Produtos Orgânicos</p>
          <p>
            A SearchOrganic facilita a vida dos clientes e empresas, permitindo
            a venda de produtos do campo diretamente aos consumidores, com um
            preço mais acessível!
          </p>
          <button>Saiba mais!</button>
        </div>
        <div className={style.propaganda_img_container}>
          <img
            src={imagePropaganda}
            alt="Foto mostrando uma variedade de produtos orgânicos"
            loading="lazy"
          />
        </div>
      </section>

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
