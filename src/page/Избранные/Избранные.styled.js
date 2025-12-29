import styled from "styled-components";

export const FavouritesWrapper = styled.main`
  padding: 40px 0 100px;
  background-color: #fff;
  
  .navigate {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
    font-size: 14px;
    
    p {
      color: #808080;
      cursor: pointer;
      margin: 0;
      &:hover { color: #111; }
    }
    span { color: #111; }
  }
`;

export const FavHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;

  h1 {
    font-size: clamp(32px, 5vw, 64px); // Ekran o'lchamiga qarab dinamik kattalashadi
    font-weight: 700;
    color: #111;
    margin: 0;
  }

  .count-badge {
    background: #f5271c;
    color: white;
    font-size: 10px;
    font-weight: 600;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start; // Badge tepada turishi uchun
    margin-top: 10px;
  }
`;

export const FavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; // Mobil uchun kichikroq gap
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  border: 1px solid #f2f2f2; // Har doim yengil border bo'lishi yaxshi
  padding: 20px;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  &:hover {
    border-color: #ddd;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }

  .heart-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 2;
    cursor: pointer;
  }

  .img-box {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0 0 10px;
    color: #111;
    height: 40px; // Bir xil balandlik
    overflow: hidden;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;

    .prices {
      .old-price {
        display: block;
        font-size: 11px;
        color: #b3b3b3;
        text-decoration: line-through;
        margin-bottom: 2px;
      }
      .current-price {
        font-size: 16px;
        font-weight: 700;
        color: #111;
      }
    }

    .cart-btn {
      width: 36px;
      height: 36px;
      background: #333;
      border: none;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover { background: #000; }
    }
  }
`;