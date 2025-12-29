import React from "react";
import { MobileButtonWrapper, WhyCard, WhyGrid, WhySection } from "./NornLight.styled";
import { Strelka } from "../icons";

import icon1 from "../../assets/rasim_2/icon1.svg";
import icon2 from "../../assets/rasim_2/icon2.svg";
import icon3 from "../../assets/rasim_2/icon3.svg";
import icon4 from "../../assets/rasim_2/icon4.svg";
import { useAppNavigation } from "../../hooks/useAppNavigation";

function NornLight() {
  const { goToAbout } = useAppNavigation();

  return (
    <WhySection>
      <div className="header">
        <h2>Почему NORNLIGHT?</h2>
        <button onClick={goToAbout} className="desktop-btn">
          О компании <Strelka />
        </button>
      </div>

      <WhyGrid>
        <WhyCard>
          <div className="icon">
            <img src={icon1} alt="" />
          </div>
          <h3>Только проверенные бренды</h3>
          <p>Бренды, проверенные временем и качеством</p>
        </WhyCard>
        <WhyCard>
          <div className="icon">
            <img src={icon2} alt="" />
          </div>
          <h3>Самые низкие цены</h3>
          <p>Ниже не будет нигде</p>
        </WhyCard>
        <WhyCard>
          <div className="icon">
            <img src={icon3} alt="" />
          </div>
          <h3>Быстрая доставка</h3>
          <p>Доставляем по всей РФ за 1-10 дней</p>
        </WhyCard>
        <WhyCard>
          <div className="icon">
            <img src={icon4} alt="" />
          </div>
          <h3>Большой ассортимент</h3>
          <p>Более 1000 товаров</p>
        </WhyCard>
      </WhyGrid>

      <MobileButtonWrapper>
        <button onClick={goToAbout}>
          О компании <Strelka />
        </button>
      </MobileButtonWrapper>
    </WhySection>
  );
}

export default NornLight;
