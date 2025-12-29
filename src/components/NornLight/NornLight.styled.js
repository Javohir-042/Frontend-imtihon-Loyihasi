import styled from "styled-components";

export const WhySection = styled.section`
  margin-top: 80px;
  padding: 0 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #333;
    }

    button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      border: 1px solid #333;
      border-radius: 100px;
      background: none;
      cursor: pointer;
      font-size: 16px;
      transition: 0.3s;
      white-space: nowrap;
    }

    button:hover {
      background: #333;
      color: #fff;
    }
  }

  .sectionHeader{
    display: flex;
    justify-content: space-between;
    padding-bottom: 53px;

    & h2{
      font-weight: 700;
      font-size: 40px;
      color: #454545;
    }

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 100px;
      width: 220px;
      height: 50px;
      background-color: white;
    }
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    
    .header {
      flex-direction: column;
      align-items: flex-start; 
      gap: 30px;
      margin-bottom: 30px;

      h2 {
        font-size: 28px;
        width: 100%;
      }

      button {
        display: none;
      }
    }
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px;
  }
`;

export const WhyCard = styled.div`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 30px 20px; /* Paddingni biroz kamaytirdik */
  min-height: 250px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  width: 100%;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .icon {
    background: #444; /* Rasmda to'q rangda */
    width: 60px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
    line-height: 1.2;
  }

  p {
    font-size: 12px;
    color: #999;
    line-height: 1.4;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
    min-height: 220px;
    
    .icon {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
        img { width: 25px; }
    }
    
    h3 { font-size: 14px; }
    p { font-size: 11px; }
  }
`;

export const MobileButtonWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        
        button {
            width: 100%;
            max-width: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 15px;
            border: 1px solid #333;
            border-radius: 100px;
            background: none;
            font-size: 16px;
        }
    }
`;