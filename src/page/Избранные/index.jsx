import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import * as S from "./Избранные.styled";

import product from "../../assets/svg/lamp-product.svg";
import { HeartIcon, Karzinka, Strelka_ongga } from "../../components";

const Избранные = () => {
  const { goToHome, goToКорзина } = useAppNavigation();
  const favProducts = [
    {
      id: 1,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
    {
      id: 2,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
    {
      id: 3,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
    {
      id: 4,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
  ];

  return (
    <S.FavouritesWrapper>
      <div className="container">
        <nav className="navigate">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <span>Избранное</span>
        </nav>

        <S.FavHeader>
          <h1>Избранные товары</h1>
          {favProducts.length > 0 && (
            <div className="count-badge">{favProducts.length}</div>
          )}
        </S.FavHeader>

        <S.FavGrid>
          {favProducts.map((item) => (
            <S.ProductCard key={item.id}>
              <div className="heart-icon">
                <HeartIcon filled={true} />
              </div>
              <div className="img-box">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <div className="price-row">
                <div className="prices">
                  {item.oldPrice && (
                    <span className="old-price">{item.oldPrice}</span>
                  )}
                  <span className="current-price">{item.price}</span>
                </div>
                <button
                  className="cart-btn"
                  aria-label="Add to cart"
                  onClick={goToКорзина}
                >
                  <Karzinka color="white" />
                </button>
              </div>
            </S.ProductCard>
          ))}
        </S.FavGrid>

        {favProducts.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            У вас пока нет избранных товаров.
          </p>
        )}
      </div>
    </S.FavouritesWrapper>
  );
};

export default Избранные;