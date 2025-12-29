import React from 'react';
import { HomePage, Skidka_swiper } from '../Home.styled';
import hero_lamp from "../../../assets/svg/hero-lamp.svg";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


function Skidka(props) {
    return (
      <Skidka_swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>

          <SwiperSlide>
            <HomePage>
              <div className="Home_div">
                <p>Скидка 15%</p>
                <p>на все подвесные</p>
                <p>светильники</p>
                <p className="Home_color">до 5 февраля</p>
              </div>
              <div className="Home_img">
                <img src={hero_lamp} alt="Hero lamp" />
              </div>
            </HomePage>
          </SwiperSlide>
        </Swiper>
      </Skidka_swiper>
    );
}

export default Skidka;