import React from "react";
import style from "./ourMission.module.scss";
import { Clock, CreditCard, Leaf } from "@phosphor-icons/react";

const OurMission = () => {
  return (
    <>
      <section className={style.so_missao}>
        <div className={style.missao}>
          <div>
            <span>Porque escolher-nos?</span>
            <h2>Nossa missão e compromisso</h2>

            <p>
              Nossa missão é simples e poderosa: proporcionar uma experiência de
              alimentação saudável e sustentável para todos. Acreditamos que a
              escolha de alimentos orgânicos não deve ser um luxo, mas sim um
              direito. Estamos comprometidos em fornecer alimentos de qualidade
              que beneficiem a saúde das pessoas e o bem-estar do planeta.
            </p>
            <span className={style.badge}>Produtos 100% orgânicos </span>
          </div>
          <div className={style.image_missao}>
            <img src={require("../../assets/missao-img.webp")} alt="" />
          </div>
        </div>
        <div className={style.missao_cards}>
          <div className={style.missao_card}>
            <Leaf size={"3rem"} color="#274c5b" />
            <h3>100% fresco</h3>
            <p>
              Comprometemo-nos a entregar alimentos sempre frescos e de alta
              qualidade diretamente para sua mesa.
            </p>
          </div>

          <div className={style.missao_card}>
            <Clock size={"3rem"} color="#274c5b" />
            <h3>Suporte 24h</h3>
            <p>
              Nossa equipe de suporte está disponível 24 horas por dia para
              responder a todas as suas perguntas e resolver suas dúvidas.
            </p>
          </div>
          <div className={style.missao_card}>
            <CreditCard size={"3rem"} color="#274c5b" />
            <h3>Pagamento Seguro</h3>
            <p>
              Garantimos um processo de pagamento seguro e protegido para que
              você possa fazer suas compras com confiança.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
