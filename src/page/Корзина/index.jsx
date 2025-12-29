import React, { useState } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Strelka_ongga, DeleteIcon, Lampa } from "../../components";
import {
  KorzinkaWrapper,
  KorzinkaHeader,
  KorzinkaContainer,
  FormSection,
  PaymentBlock,
} from "./Корзина.styled";

function Корзина() {
  const { goToHome, goToKatalog } = useAppNavigation();

  // Test ma'lumotlari
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Встраиваемый Светильник Novotech",
      price: 6399,
      count: 1,
      articul: "RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS",
      img: <Lampa />,
      desc: "Светильник RADUGA COMBO XS Промышленное Освещение; 50Вт; 230В; S4; XS;",
    },
    {
      id: 2,
      title: "Встраиваемый Светильник Novotech",
      price: 6399,
      count: 1,
      articul: "RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS",
      img: <Lampa />,
      desc: "Светильник RADUGA COMBO XS Промышленное Освещение; 50Вт; 230В; S4; XS;",
    },
  ]);

  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const deliveryPrice = 580;
  const totalPrice = itemsPrice + deliveryPrice;

  const handleDelete = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  const increment = (id) =>
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );

  const decrement = (id) =>
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );

  return (
    <KorzinkaWrapper>
      <div className="breadcrumbs">
        <p onClick={goToHome}>Главная</p> <Strelka_ongga />
        <p onClick={goToKatalog}>Каталог</p> <Strelka_ongga />
        <p>Корзина</p>
      </div>

      <KorzinkaHeader>
        <h1>Корзина</h1>
        <span className="count-badge">{cartItems.length}</span>
      </KorzinkaHeader>

      {cartItems.length > 0 ? (
        <>
          <KorzinkaContainer>
            <div className="table_header">
              <span>Фото</span>
              <span>Товары</span>
              <span>Описание</span>
              <span>Артикул</span>
              <span>Количество</span>
              <span></span>
            </div>

            {cartItems.map((item) => (
              <div className="cart_item" key={item.id}>
                <div className="product_img">{item.img}</div>

                <div className="product_info">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price.toLocaleString()} ₽</p>
                </div>

                <div className="product_desc">{item.desc}</div>
                <div className="product_articul">{item.articul}</div>

                <div className="counter">
                  <button onClick={() => decrement(item.id)}>−</button>
                  <span>{item.count}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>

                <div
                  className="delete_btn"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </KorzinkaContainer>

          <FormSection>
            <h2>Оформление</h2>
            <div className="grid-3">
              <input type="text" placeholder="ФИО" />
              <input type="text" placeholder="Телефон" />
              <input type="text" placeholder="Электронная Почта" />
            </div>

            <h2 className="mt-40">Доставка</h2>
            <div className="grid-3">
              <input
                type="text"
                placeholder="Адрес доставки"
                className="full-width"
              />
              <textarea
                placeholder="Комментарий"
                className="full-width"
              ></textarea>
            </div>
          </FormSection>

          <PaymentBlock>
            <h2>Оплата</h2>
            <div className="payment-row">
              <div className="row-item">
                <span>Товары</span>
                <div className="dots" />
                <span className="value">{itemsPrice.toLocaleString()} ₽</span>
              </div>
              <div className="row-item">
                <span>Доставка</span>
                <div className="dots" />
                <span className="value">
                  {deliveryPrice.toLocaleString()} ₽
                </span>
              </div>
            </div>

            <div className="total-price">{totalPrice.toLocaleString()} ₽</div>

            <div className="footer-action">
              <button className="buy-btn">Купить</button>
              <label className="policy">
                <input type="checkbox" defaultChecked />
                <span>Я согласен на обработку моих персональных данных</span>
              </label>
            </div>
          </PaymentBlock>
        </>
      ) : (
        <div className="empty-cart">
          <h2>Ваша корзина пуста</h2>
          <button onClick={goToKatalog}>Вернуться в каталог</button>
        </div>
      )}
    </KorzinkaWrapper>
  );
}

export default Корзина;
