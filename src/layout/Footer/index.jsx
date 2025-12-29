import React from "react";
import {
  FooterWrapper,
  FooterWrapper_1,
  FooterLogo,
  FooterVK,
  Footer_div2,
} from "./Footer.styled";

import PaymentLogos from "../../assets/payments.png";
import { VK } from "../../components";

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterWrapper_1>
          {/* Logo va Kontakt qismi */}
          <FooterLogo>
            <img src="/logo-foot.svg" alt="NORNLIGHT" className="logo-img" />
            <a className="a1" href="tel:88008904656">
              8 (800) 890-46-56
            </a>

            <img
              src={PaymentLogos}
              alt="Visa, Mastercard, Mir"
              className="payment-img"
            />

            <a className="legal-link" href="/">
              Политика конфиденциальности
            </a>
            <a className="legal-link" href="/">
              Пользовательское соглашение
            </a>

            <FooterVK>
              <VK />
              <VK />
              <VK />
            </FooterVK>
          </FooterLogo>

          {/* Xaridorlar uchun */}
          <div>
            <h1>Покупателям</h1>
            <p>О компании</p>
            <p>Доставка и оплата</p>
            <p>Возврат</p>
            <p>Гарантии</p>
            <p>Контакты</p>
            <p>Блог</p>
          </div>

          {/* Mahsulotlar */}
          <div>
            <h1>Товары</h1>
            <Footer_div2>
              <div>
                <p>Люстры</p>
                <p>Светильники</p>
                <p>Бра</p>
                <p>Торшеры</p>
                <p>Комплектующие</p>
                <p>Настольные лампы</p>
              </div>
              <div>
                <p>Споты</p>
                <p>Трековые светильники</p>
                <p>Уличные светильники</p>
                <p>Технические светильники</p>
                <p>Светодиодные ленты</p>
              </div>
            </Footer_div2>
          </div>
        </FooterWrapper_1>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
