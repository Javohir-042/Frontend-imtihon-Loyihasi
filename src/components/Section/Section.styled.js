import styled from "styled-components";

export const BrandsSection = styled.section`
  margin-top: 100px;
  padding: 0 20px;
  padding-bottom: 48px;

  .brands-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #333;
    }

    .arrows {
      display: flex;
      gap: 12px;

      button {
        background-color: white;
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 40px;
        height: 40px;
        border: 1px solid #f2f2f2;
        border-radius: 50%;

        &:hover {
          background: #f9f9f9;
        }
      }
    }
  }

  .swiper-pagination {
    position: relative;
    margin-top: 30px;
  }
  
  .swiper-pagination-bullet {
    background: #e0e0e0;
    opacity: 1;
  }
  
  .swiper-pagination-bullet-active {
    background: #333;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    
    .brands-header {
      h2 {
        font-size: 24px;
        max-width: 250px;
      }
      .arrows {
        display: none; 
      }
    }
  }
`;

export const BrandCard = styled.div`
  border: 1px solid #f2f2f2;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  transition: 0.3s;

  img {
    max-width: 80%;
    max-height: 100%;
    filter: grayscale(100%);
    opacity: 0.5;
    transition: 0.3s;
  }

  &:hover {
    border-color: #333;
    img {
      filter: grayscale(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 100px;
    padding: 15px;
  }
`;