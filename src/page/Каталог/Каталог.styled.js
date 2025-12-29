import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;

  .navigate {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 15px 0;
    flex-wrap: wrap;

    p {
      font-size: 12px;
      margin: 0;
      cursor: pointer;
      color: #808080;
      &:last-child { color: #111; }
    }
  }
`;

export const ProductContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Mobil qurilmada ustun bitta bo'ladi */
    gap: 20px;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
`;

export const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #111;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 13px;
  color: #808080;

  .status { color: #4CAF50; font-weight: 500; }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  .current { font-size: 28px; font-weight: 700; color: #111; }
  .old { font-size: 16px; color: #b3b3b3; text-decoration: line-through; }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-wrap: wrap; /* Kichik telefonlarda elementlar pastga tushadi */
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  height: 45px;

  button {
    width: 35px;
    height: 100%;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }

  input {
    width: 40px;
    border: none;
    text-align: center;
    font-size: 14px;
    outline: none;
  }
`;

export const CartButton = styled.button`
  flex: 1;
  height: 45px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover { background: #111; }
`;

export const FavoriteBtn = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CharacteristicsTable = styled.div`
  margin-top: 40px;
  
  h3 { margin-bottom: 20px; font-size: 18px; }

  .row {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #f9f9f9;
    margin-bottom: 2px;
    
    .label { font-size: 12px; color: #808080; margin-bottom: 4px; }
    .value { font-size: 14px; color: #111; }
  }
`;