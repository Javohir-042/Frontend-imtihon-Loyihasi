import React from "react";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Container, Kantakt, Kantakt_text, MapOverlay, MapWrapper } from "./Контакты.styled";
import Karta from "../Доставка_и_оплата/Karta";

function Контакты(props) {
  const { goToHome } = useAppNavigation();

  return (
    <Container>
      <div className="container">
        <Kantakt>
          <div className="Katalog_strelka">
            <p onClick={goToHome}>Главная</p>
            <Strelka_ongga />
            <p>Каталог</p>
          </div>
        </Kantakt>

        <Kantakt_text>
          <div>
            <h1>Контакты</h1>
          </div>
          <div className="kontakt_p">
            <h2>8 (800) 890-46-56</h2>
            <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину</p>
            <p>Телефоны:</p>
          </div>
        </Kantakt_text>
      </div>
      <MapWrapper>
        <Karta />

        <MapOverlay>
          <div>
            <h2>Адрес магазина</h2>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
          </div>
          <div>
            <h2>Почта</h2>
            <p>NORNLIGHT@mail.ru</p>
          </div>
          <div>
            <h2>Телефон</h2>
            <p>8 (800) 890-46-56</p>
          </div>
          <div>
            <button>Оставить заявку</button>
          </div>
        </MapOverlay>
      </MapWrapper>
    </Container>
  );
}

export default Контакты;
