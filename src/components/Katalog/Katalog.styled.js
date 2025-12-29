import styled from "styled-components";

export const KatalogSection = styled.section`
  margin-top: 80px;
  padding: 0 20px;
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1300px) {
    margin-bottom: 0px; 
  }

  .katalog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    h1 {
      font-size: 32px;
      font-weight: 700;
      @media (max-width: 1300px) {
        margin-bottom: 0;
      }
    }

    .desktop-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      border: 1px solid #333;
      border-radius: 100px;
      background: none;
      cursor: pointer;
      font-size: 16px;
      
      @media (max-width: 1300px) {
        display: none;
      }
    }
  }

  .mobile-swiper {
    display: none;
    
    @media (max-width: 1300px) {
      display: block;
    }
  }

  .swiper {
    padding-bottom: 0 !important; 
  }

  .swiper-slide {
    height: auto !important; 
  }

  .swiper-pagination {
    margin-top: 5px !important;
    bottom: 0 !important;
    line-height: 0 !important;
  }

  @media (max-width: 1300px) {
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
  }

`;

export const MobileButtonWrapper = styled.div`
  display: none;

  @media (max-width: 1300px) {
    display: flex;
    margin-top: 10px; 
    margin-bottom: 5px; 

    button {
      width: 100%;
      padding: 16px;
      border-radius: 100px;
      border: 1px solid #333;
      background: none;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  

  @media (max-width: 1300px) {
    display: none; 
  }

  img{
    margin-left: 130px;
  }
`;

export const CatalogCard = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 30px;
  height: 280px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .title {
    font-size: 16px;
    z-index: 2;
    color: #555;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    position: absolute;
    right: 15px;
    bottom: 45px;
    left: 45px;
  }

  span {
    margin-top: auto;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #333;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 190px;
    padding: 20px;

    

    img {
      width: 81px;
      height: 92px;
    }
  }
`;

export const SecondBlockSection = styled.section`
  margin-top: 80px; 

  @media (max-width: 1300px) {
    margin-top: 5px !important;
  }
`;