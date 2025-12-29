import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BrandsSection, BrandCard } from "./Section2.styled.js";
import { Left, Right } from "../icons";

import brand1 from "../../components/icons/Brands/brand1.svg";
import brand2 from "../../components/icons/Brands/brand2.svg";
import brand3 from "../../components/icons/Brands/brand3.svg";

const brandsList = [
  brand1,
  brand2,
  brand3,
  brand1,
  brand2,
  brand3,
  brand1,
  brand2,
];

function Section2() {
  const swiperRef = useRef(null);

  return (
    <BrandsSection>
      <div className="brands-header">
        <h2>Только проверенные бренды</h2>
        <div className="arrows">
          <button
            className="prev-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Left />
          </button>
          <button
            className="next-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Right />
          </button>
        </div>
      </div>

      <Swiper
        
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true, el: ".brands-pagination" }}
        className="brands-slider"
      >
        {brandsList.map((brand, i) => (
          <SwiperSlide key={i}>
            <BrandCard>
              <img src={brand} alt={`brand-${i}`} />
            </BrandCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="brands-pagination"></div>
    </BrandsSection>
  );
}

export default Section2;
