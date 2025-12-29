import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper stillarini import qilish
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BrandCard, BrandsSection } from "./Section.styled";
import { Left, Right } from "../icons";

import brand1 from "../../components/icons/Brands/brand1.svg";
import brand2 from "../../components/icons/Brands/brand2.svg";
import brand3 from "../../components/icons/Brands/brand3.svg";

function Section() {
  const brands = [brand1, brand2, brand3, brand1, brand2, brand3];

  return (
    <BrandsSection>
      <div className="brands-header">
        <h2>Только проверенные бренды</h2>
        <div className="arrows">
          <button className="btn-prev">
            <Left />
          </button>
          <button className="btn-next">
            <Right />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4} 
        navigation={{
          prevEl: ".btn-prev",
          nextEl: ".btn-next",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {brands.map((b, i) => (
          <SwiperSlide key={i}>
            <BrandCard>
              <img src={b} alt="brand" />
            </BrandCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </BrandsSection>
  );
}

export default Section;
