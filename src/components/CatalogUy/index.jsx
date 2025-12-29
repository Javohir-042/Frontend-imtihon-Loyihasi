import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BlogWrapper } from "./CatalogUy.styled";

import house1 from "../../assets/rasim_3/uy1.png";
import house2 from "../../assets/rasim_3/uy2.png";
import house3 from "../../assets/rasim_3/uy3.png";

function CatalogUy({ showHeader = true, showBottom = true }) {
  const { goToBlog } = useAppNavigation();

  const blogs = [
    {
      img: house1,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      img: house2,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
    {
      img: house3,
      title: "Как правильно освещать дом снаружи?",
      date: "01.01.2024",
    },
  ];

  return (
    <BlogWrapper>

      {showHeader && (
        <div className="section-header">
          <h2>Блог</h2>

          <button className="header-btn" onClick={goToBlog}>
            Перейти в блог <span>→</span>
          </button>
        </div>
      )}

      <div className="desktop-grid">
        {blogs.map((item, index) => (
          <div className="blog-card" key={index}>
            <img src={item.img} alt="" />
            <div className="info">
              <h3>{item.title}</h3>
              <span>↗</span>
            </div>
            <span className="date">{item.date}</span>
          </div>
        ))}
      </div>

      <div className="mobile-slider">
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          pagination={
            showBottom ? { clickable: true, el: ".blog-pagination" } : false
          }
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blog-card">
                <img src={item.img} alt="" />
                <div className="info">
                  <h3>{item.title}</h3>
                  <span>↗</span>
                </div>
                <span className="date">{item.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showBottom && (
          <>
            <div className="blog-pagination"></div>
            <button className="mobile-btn" onClick={goToBlog}>
              Перейти в блог <span>→</span>
            </button>
          </>
        )}
      </div>
    </BlogWrapper>
  );
}

export default CatalogUy;
