import styled from "styled-components";

export const Kompany = styled.div`
  padding: 30px 0;
  
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    
    p { 
      font-size: 14px; 
      color: #454545; 
      cursor: pointer;
      transition: 0.3s;
      
      &:hover { color: #000; }
    }
  }
`;

export const Task = styled.div`
  margin-bottom: 80px;
  width: 100%;

  .mobile-title {
    display: none;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 20px;
    color: #454545;

    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }

  .stats-column {
    flex: 0 0 500px; 
    
    .desktop-title {
      font-weight: 700;
      font-size: 64px;
      margin-bottom: 40px;
      line-height: 1;
      color: #454545;
    }

    @media (max-width: 1024px) {
      flex: 1;
      width: 100%;
      .desktop-title { display: none; } 
    }
  }

  .stat-card {
    width: 100%;
    height: 250px;
    background: #F2F2F2;
    border-radius: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    box-sizing: border-box;

    &:last-child { margin-bottom: 0; }

    @media (max-width: 768px) {
      height: 140px; 
      padding-left: 20px;
      border-radius: 10px;
    }

    .number {
      font-weight: 700;
      font-size: 64px;
      color: #454545;
      line-height: 1;
      margin-bottom: 10px;

      @media (max-width: 768px) { font-size: 40px; }
    }

    .label {
      font-weight: 500;
      font-size: 18px;
      color: #454545;
      
      @media (max-width: 768px) { font-size: 14px; }
    }
  }

  .text-column {
    flex: 1;
    padding-top: 105px; 

    @media (max-width: 1024px) {
      padding-top: 0;
    }

    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.6;
      color: #454545;
      margin-bottom: 25px;

      @media (max-width: 1200px) { font-size: 18px; }
      @media (max-width: 768px) { 
        font-size: 14px; 
        line-height: 1.5;
        margin-bottom: 15px;
      }
    }
  }
`;