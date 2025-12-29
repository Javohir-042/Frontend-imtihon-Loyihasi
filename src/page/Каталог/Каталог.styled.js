import styled from "styled-components";

export const Container = styled.div`
  max-width: 1332px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  .Section_img{

    @media (max-width: 600px){
      display: none;
    }
  }

  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    color: #999;
    font-size: 14px;
    margin-top: 48px;

    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 12px;
    }

    p { 
      margin: 0;
      &:hover {
        color: #666;
      }
    }
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #333;

    @media (max-width: 768px) { 
      font-size: 24px;
      margin-bottom: 20px;
      margin-top: 8px;
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f3f3f3;
  border-radius: 50px;
  padding: 5px 25px;
  margin-bottom: 57px;
  overflow-x: auto; 
  margin-top: -90px;

  &::-webkit-scrollbar { 
    display: none; 
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterItem = styled.button`
  background: none;
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s ease;
  color: ${props => props.$active ? "#333" : "#888"};
  font-weight: ${props => props.$active ? "600" : "400"};

  &:hover { 
    color: #333; 
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 32px;
  }
`;

export const Card = styled.div`
  /* DESKTOP (1-rasm) */
  grid-column: ${props => props.isWide ? "span 3" : "span 2"};
  background: #f6f6f6;
  border-radius: 20px;
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    /* MOBILE */
    grid-column: span 1;
    height: 160px;
    border-radius: 12px;
    padding: 12px;
    
    /* 9 va 10 yonma-yon */
    &:nth-child(9),
    &:nth-child(10) {
      grid-column: span 1;
    }
    
    /* 11 pastda 2 ustunni to'ldiradi */
    &:nth-child(11) {
      grid-column: span 2;
      height: 180px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 auto 0;
  color: #454545;
  font-weight: 600;
  position: relative;
  z-index: 2;
  line-height: 1.3;
  max-width: 65%;

  @media (max-width: 768px) { 
    font-size: 13px;
    font-weight: 500;
    max-width: 55%;
    line-height: 1.2;
    
    /* Mobile da barcha text "Люстры" */
    &::before {
      content: "Люстры";
    }
    
    /* Asl textni yashirish */
    font-size: 0;
    
    &::before {
      font-size: 13px;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 20px;
  bottom: 50px;
  width: auto;
  height: 120px;
  object-fit: contain;
  z-index: 1;

  @media (max-width: 768px) {
    right: 10px;
    bottom: 32px;
    height: 70px;
    max-width: 45%;
  }
`;

export const PriceLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;
  z-index: 2;
  cursor: pointer;
  font-weight: 500;
  position: relative;

  span {
    color: #888;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 16px;
  line-height: 1;
  color: #888;
  margin-left: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;