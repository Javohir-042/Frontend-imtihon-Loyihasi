import React from "react";
import { Kompany, Task, ContentWrapper } from "./О_компании.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Strelka_ongga } from "../../components";
import Section2 from "../../components/Section2"; // Brands
import CatalogUy from "../../components/CatalogUy"; // Blog
import Text from "../../components/Text"; // Footer Text

function О_компании() {
  const { goToHome } = useAppNavigation();

  return (
    <div className="container">
      {/* Breadcrumb */}
      <Kompany>
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p>О компании</p>
        </div>
      </Kompany>

      <Task>
        {/* Mobil Sarlavha */}
        <h1 className="mobile-title">О компании</h1>

        <ContentWrapper>
          {/* Chap ustun */}
          <div className="stats-column">
            <h1 className="desktop-title">О компании</h1>

            <div className="stat-card">
              <span className="number">170+</span>
              <span className="label">Товаров</span>
            </div>
            <div className="stat-card">
              <span className="number">1000+</span>
              <span className="label">Довольных покупателей</span>
            </div>
            <div className="stat-card">
              <span className="number">170+</span>
              <span className="label">Товаров</span>
            </div>
          </div>

          {/* O'ng ustun (Matnlar) */}
          <div className="text-column">
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных.
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным
              светом.
            </p>
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников.
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России.
            </p>
          </div>
        </ContentWrapper>
      </Task>

      <Section2 />

      <CatalogUy showHeader={true} />

      <div style={{ marginTop: "40px" }}>
        <Text />
      </div>
    </div>
  );
}

export default О_компании;
