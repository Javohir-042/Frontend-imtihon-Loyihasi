import styled from "styled-components";

export const Product_Lampa = styled.div`
  display: flex;
  margin-top: 48px;
  gap: 56px;

  & h1 {
    font-weight: 500;
    color: #454545;
    font-size: 40px;
    line-height: 110%;
  }

  .product_text {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .p2 {
      padding: 12px 0;
    }

    .p1,
    .p2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: #b3b3b3;
    }

    .p3 {
      color: #4d932c;
    }
  }

  .product_skidka {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .current-price {
    font-size: 24px;
    font-weight: bold;
    font-weight: 500;
    font-size: 40px;
    line-height: 160%;
    letter-spacing: 0.01em;
    color: #101010;
  }

  .old-price {
    color: #999;
    text-decoration: line-through;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.01em;
  }

  .product_text_p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #4c4c4c;
    padding: 40px 0 48px 0;
  }

  .product_actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .quantity_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    width: 130px;
    height: 56px;
    padding: 0 15px;

    button {
      background: none;
      border: none;
      font-size: 24px;
      color: #101010;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    span {
      font-weight: 500;
      font-size: 18px;
      color: #101010;
    }
  }

  .add_to_cart_btn {
    background: #333333;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 0 40px;
    height: 56px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #505050;
    }
  }

  .heart_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: #f8f8f8;
    border-radius: 8px;
    cursor: pointer;
    color: #101010;
    border: none;
    transition: background 0.2s;

    &:hover {
      background: #f0f0f0;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  /* ==================== MOBILE STYLES ==================== */

  .thumbnails_mobile {
    display: none;
  }

  .thumbnail_item {
    display: none;
  }

  .rating_dots {
    display: none;
  }

  .dot {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    gap: 0;
    padding: 0;

    .product_lamp {
      width: 100%;
      background: #fff;
      border: none;
      border-radius: 0;
      margin-bottom: 0;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg,
      img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      }
    }

    /* 4 ta kichik rasm */
    .thumbnails_mobile {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      padding: 0 16px;
      margin: 12px 0 20px 0;
    }

    .thumbnail_item {
      display: flex;
      width: 100%;
      height: 70px;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      &:hover {
        border-color: #ccc;
      }

      svg,
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    /* Sarlavha */
    h1 {
      font-size: 18px !important;
      font-weight: 600 !important;
      margin: 0 0 12px 0 !important;
      padding: 0 16px !important;
      line-height: 1.3 !important;
    }

    /* Product text */
    .product_text {
      padding: 0 16px !important;
      margin-bottom: 12px !important;

      .p1,
      .p2 {
        font-size: 12px !important;
        margin: 0 !important;
        padding: 2px 0 !important;
        color: #999 !important;
      }

      .p3 {
        font-size: 13px !important;
        margin-top: 4px !important;
        color: #4d932c !important;
      }
    }


    .dot {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #e5e5e5;

      &.active {
        background: #333;
      }
    }

    /* Narxlar */
    .product_skidka {
      padding: 0 16px;
      margin-bottom: 12px;
    }

    .current-price {
      font-size: 32px !important;
      font-weight: 700 !important;
    }

    .old-price {
      font-size: 18px !important;
    }

    /* Tavsif */
    .product_text_p {
      font-size: 14px !important;
      line-height: 1.5 !important;
      padding: 0 16px !important;
      margin: 0 0 24px 0 !important;
      color: #666 !important;
    }

    /* Actions */
    .product_actions {
      padding: 0 16px !important;
      gap: 10px !important;
    }

    .quantity_wrapper {
      width: 100px !important;
      height: 44px !important;
      border: 1px solid #e5e5e5 !important;

      button {
        font-size: 20px !important;
      }

      span {
        font-size: 16px !important;
      }
    }

    .add_to_cart_btn {
      display: none !important;
    }

    .heart_icon {
      width: 44px !important;
      height: 44px !important;
      border: 1px solid #e5e5e5 !important;
      background: #F8F8F8 !important;

      img {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
`;