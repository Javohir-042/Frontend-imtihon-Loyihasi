import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  CatalogCard,
  KatalogSection,
  MobileButtonWrapper,
  GridWrapper,
} from "./Katalog.styled";
import { Strelka } from "../icons";
import { useAppNavigation } from "../../hooks/useAppNavigation";

// Rasmlar
import a1 from "../../assets/chandeliers/a1.svg";
import a2 from "../../assets/chandeliers/a2.svg";
import a3 from "../../assets/chandeliers/a3.svg";
import a4 from "../../assets/chandeliers/a4.svg";
import a5 from "../../assets/chandeliers/a5.svg";
import a6 from "../../assets/chandeliers/a6.svg";

function Katalogss() {
  const { goToKatalog } = useAppNavigation();

  const catalogData = [
    { title: "Люстры", img: a1 },
    { title: "Светильники", img: a2 },
    { title: "Бра", img: a3 },
    { title: "Торшеры", img: a4 },
    { title: "Настольные лампы", img: a5 },
    { title: "Споты", img: a6 },
  ];

  return (
    <KatalogSection>
      <div className="katalog-header">
        <h1>Каталог</h1>
        <button className="desktop-btn" onClick={goToKatalog}>
          Весь каталог <Strelka />
        </button>
      </div>

      <GridWrapper>
        {catalogData.map((item, index) => (
          <CatalogCard key={index}>
            <p className="title">{item.title}</p>
            <img src={item.img} alt={item.title} />
            <span>
              От 540₽ <Strelka />
            </span>
          </CatalogCard>
        ))}
      </GridWrapper>

      <div className="mobile-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 },
          }}
        >
          {catalogData.map((item, index) => (
            <SwiperSlide key={index}>
              <CatalogCard>
                <p className="title">{item.title}</p>
                <img src={item.img} alt={item.title} />
                <span>
                  От 540₽ <Strelka />
                </span>
              </CatalogCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MobileButtonWrapper>
        <button onClick={goToKatalog}>
          Весь каталог <Strelka />
        </button>
      </MobileButtonWrapper>

    </KatalogSection>
  );
}

export default Katalogss;
