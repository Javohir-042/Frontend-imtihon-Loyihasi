import styled from "styled-components";

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 0px; /* Container bo'lsa padding shart emas */
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
  }
`;

export const ProductCard = styled.div`
  padding: 20px; /* Ichki joyni kattaroq qildik */
  transition: 0.3s;
  background: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  /* Chegara shaffof, hover bo'lganda ko'rinadi */
  border: 1px solid transparent; 

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  }

  /* --- YURAKCHA (O'zgartirilgan joy) --- */
  .product-yurakcha {
    display: block; /* Oldin none edi, endi ko'rinadi */
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: transform 0.2s;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      transform: scale(1.1); /* Hover bo'lganda sal kattalashadi */
    }
  }
  /* ------------------------------------- */

  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    height: 200px; /* Balandlikni rasmdagidek qildik */
    width: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  /* Mahsulot nomi */
  p {
    margin: 0 0 10px 0;
    line-height: 1.4;
    font-size: 16px; 
    font-weight: 500;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 44px; /* Ikki qator sig'adigan balandlik */
  }

  /* Eski narx */
  .category {
    font-size: 14px;
    color: #9F9F9F;
    text-decoration: line-through;
    margin-bottom: 5px;
    display: block;
    font-weight: 500;
  }

  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto; 

    .price {
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }

    /* Savatcha tugmasi (Rasmdagidek yumaloq) */
    .cart-btn {
      width: 40px; 
      height: 40px;
      background: #333; /* To'q rang */
      border-radius: 50%; /* To'liq aylana */
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      color: white;

      &:hover {
        background: #000;
      }
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    
    .product-yurakcha {
       top: 10px;
       right: 10px;
       width: 20px;
    }

    .product-img {
      height: 140px;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 14px;
      height: 40px;
    }
    
    .price {
      font-size: 16px;
    }
    
    .cart-btn {
        width: 32px;
        height: 32px;
    }
  }
`;

export const MobileButtonContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    
    button {
      width: 100%;
      padding: 14px;
      border-radius: 100px;
      border: 1px solid #333;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;