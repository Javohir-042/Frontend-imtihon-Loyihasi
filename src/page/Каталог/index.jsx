import React, { useState } from "react";
import * as S from "./ProductDetail.styled";
import { RightArr } from "../../components";
import productImg from "../../assets/lusters/catalog1.png"; // O'zingizni rasmingizni qo'ying

export default function ProductDetail() {
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <S.ProductWrapper>
        <div className="navigate">
          <p>Главная</p> <RightArr />
          <p>Каталог</p> <RightArr />
          <p>Встраиваемый светильник</p>
        </div>

        <S.ProductContentGrid>
          <S.ImageSection>
            <S.MainImage>
              <img src={productImg} alt="Product" />
            </S.MainImage>
          </S.ImageSection>

          <S.InfoSection>
            <h1>Встраиваемый светильник Novotech</h1>

            <S.MetaInfo>
              <span>Артикул: 7655-188</span>
              <span className="status">В наличии</span>
            </S.MetaInfo>

            <S.PriceRow>
              <span className="current">435 000 ₽</span>
              <span className="old">522 000 ₽</span>
            </S.PriceRow>

            <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
              Профессиональный осветительный прибор для создания акцентного
              освещения в современном интерьере. Высокое качество материалов.
            </p>

            <S.ActionContainer>
              <S.Counter>
                <button onClick={() => count > 1 && setCount(count - 1)}>
                  −
                </button>
                <input type="text" value={count} readOnly />
                <button onClick={() => setCount(count + 1)}>+</button>
              </S.Counter>

              <S.CartButton>В корзину</S.CartButton>

              <S.FavoriteBtn>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </S.FavoriteBtn>
            </S.ActionContainer>
          </S.InfoSection>
        </S.ProductContentGrid>

        <S.CharacteristicsTable>
          <h3>Характеристика</h3>
          <div className="row">
            <span className="label">Цвет</span>
            <span className="value">Желтый</span>
          </div>
          <div className="row">
            <span className="label">Год</span>
            <span className="value">2016</span>
          </div>
          <div className="row">
            <span className="label">Страна</span>
            <span className="value">Швейцария</span>
          </div>
        </S.CharacteristicsTable>
      </S.ProductWrapper>
    </div>
  );
}
