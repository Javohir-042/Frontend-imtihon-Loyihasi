import styled from "styled-components";

export const BrandsSection = styled.section`
  margin-top: 80px;
  padding: 0 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .brands-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #333;
      white-space: nowrap; 

      @media (max-width: 768px) {
        font-size: 28px;
        white-space: normal; 
      }
    }

    .arrows {
      display: flex;
      gap: 10px;

      /* Mobilda strelkalarni yashiramiz */
      @media (max-width: 768px) {
        display: none; 
      }

      button {
        background: transparent;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
        border: 1px solid transparent; /* Ramka qo'shildi */

        &:hover {
          border-color: #333;
        }
      }
    }
  }

  .brands-slider {
    width: 100%;
    padding-bottom: 20px; /* Pagination uchun joy */
  }

  /* Reactdagi className bilan bir xil bo'lishi kerak (.brands-pagination) */
  .brands-pagination {
    display: none;
    justify-content: center;
    margin-top: 25px;
    gap: 8px;

    /* Faqat mobilda chiqadi */
    @media (max-width: 768px) {
      display: flex;
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #D9D9D9;
      opacity: 1;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s;
    }

    .swiper-pagination-bullet-active {
      background: #333;
      transform: scale(1.2);
    }
  }
`;

export const BrandCard = styled.div`
  border: 1px solid #f2f2f2;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  padding: 15px;
  box-sizing: border-box; 

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: 0.3s;
  }
  
  /* Sichqoncha borganda rangi chiqishi uchun */
  &:hover img {
      filter: grayscale(0);
      opacity: 1;
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;