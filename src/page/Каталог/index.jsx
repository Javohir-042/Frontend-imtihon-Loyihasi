import React, { useState } from "react";
import * as S from "./Каталог.styled.js";
import a1 from "../../assets/chandeliers/a1.svg";
import a2 from "../../assets/chandeliers/a2.svg";
import a3 from "../../assets/chandeliers/a3.svg";
import a4 from "../../assets/chandeliers/a4.svg";
import a5 from "../../assets/chandeliers/a5.svg";
import a6 from "../../assets/chandeliers/a6.svg";
import a7 from "../../assets/chandeliers/a7.svg";
import a8 from "../../assets/chandeliers/a8.svg";
import a9 from "../../assets/chandeliers/a9.svg";
import a10 from "../../assets/chandeliers/a10.svg";
import a11 from "../../assets/chandeliers/a11.svg";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import Section from "../../components/Section/index.jsx";
import CatalogUy from "../../components/CatalogUy/index.jsx";
import Text from "../../components/Text/index.jsx";

const filterCategories = [
  "Светильники",
  "Люстры",
  "Лампы",
  "Настольные лампы",
  "Ночники",
  "Подсветка",
  "Уличное освещение",
  "Мебельные установки",
];

const catalogData = [
  { id: 1, title: "Люстры", price: "540", img: a1 },
  { id: 2, title: "Светильники", price: "540", img: a2 },
  { id: 3, title: "Бра", price: "540", img: a3 },
  { id: 4, title: "Торшеры", price: "540", img: a4 },
  { id: 5, title: "Настольные лампы", price: "540", img: a5 },
  { id: 6, title: "Споты", price: "540", img: a6 },
  { id: 7, title: "Трековые светильники", price: "540", img: a7 },
  { id: 8, title: "Уличные светильники", price: "540", img: a8 },
  { id: 9, title: "Технические светильники", price: "540", img: a9 },
  { id: 10, title: "Светодиодные ленты", price: "540", img: a10, wide: true },
  { id: 11, title: "Комплектующие", price: "540", img: a11, wide: true },
];

const Catalog = () => {
  const { goToHome } = useAppNavigation();
  const [activeTab, setActiveTab] = useState("Светильники");

  return (
    <S.Container>
      <S.FilterWrapper>
        {filterCategories.map((cat) => (
          <S.FilterItem
            key={cat}
            $active={activeTab === cat}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </S.FilterItem>
        ))}
      </S.FilterWrapper>

      <div className="Katalog_strelka">
        <p onClick={goToHome} style={{ cursor: "pointer" }}>
          Главная
        </p>
        <Strelka_ongga />
        <p>Каталог</p>
      </div>

      <h1>Каталог</h1>

      <S.Grid>
        {catalogData.map((item) => (
          <S.Card key={item.id} isWide={item.wide}>
            <S.CardTitle>{item.title}</S.CardTitle>
            <S.Image src={item.img} alt={item.title} />
            <S.PriceLink>
              <span>От {item.price}₽</span>
              <S.ArrowIcon>→</S.ArrowIcon>
            </S.PriceLink>
          </S.Card>
        ))}
      </S.Grid>

      <div className="Section_img">
        <Section />
      </div>

      <CatalogUy showHeader={true} showBottom={true} />
      <Text />
    </S.Container>
  );
};

export default Catalog;
