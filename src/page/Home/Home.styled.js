import styled from "styled-components";

export const Homes = styled.div`
  width: 100%;
  overflow-x: hidden; 
  padding-bottom: 80px;
  
  .controller {
    max-width: 1332px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;

export const Skidka_swiper = styled.div`
  width: 100%;
  position: relative;

  .swiper-pagination {
    bottom: 80px !important; 
    text-align: center !important;
    width: 100% !important;
    left: 750px !important; 
    padding: 0 !important; 

    @media (max-width: 900px) {
        left: 0 !important; 
        bottom: 20px !important; 
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #505050 !important;
  }
`;

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-radius: 50px;
  margin: 0 auto 50px auto;
  padding: 20px 200px; 
  max-width: 1714px;
  min-height: 450px;
  box-sizing: border-box; 

  .Home_div {
    flex: 1;
    p { font-size: 64px; font-weight: 700; color: #333; margin: 0; }
    .Home_color {
      background-color: #333; color: white; border-radius: 100px;
      font-size: 64px; margin-top: 20px; display: flex;
      justify-content: center; align-items: center;
      width: 500px; height: 85px;
    }
  }

  .Home_img {
    flex: 1; display: flex; justify-content: center; max-width: 450px;
    img { width: 100%; height: auto; }
  }

  @media (max-width: 1200px) {
    padding: 20px 50px; 
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 20px 16px 50px 16px;
    border-radius: 30px;
    min-height: auto;

    .Home_div {
      width: 100%;
      p { font-size: 28px !important; margin-top: 15px; }
      .Home_color { 
        margin: 15px auto; 
        font-size: 22px !important; 
        width: 220px !important; 
        height: 50px !important; 
      }
    }
    .Home_img {
      max-width: 260px;
      img { width: 100%; }
    }
  }
`;