import styled from "styled-components";

export const BlogWrapper = styled.div`
  margin-bottom: 100px;
  width: 100%;

  /* --- HEADER (SARLAVHA VA KNOPKA) --- */
  .section-header {
    display: flex;
    justify-content: space-between; /* Ikki chetga itaradi */
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      color: #111;
      margin: 0;
      
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }

    /* Desktopdagi o'ng tarafdagi knopka */
    .header-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 50px;
      padding: 0 30px;
      border-radius: 50px;
      border: 1px solid #D9D9D9;
      background: #fff;
      font-size: 16px;
      font-weight: 600;
      color: #111;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        border-color: #111;
        background: #111;
        color: #fff;
      }

      /* Mobilda bu knopka yashirinadi */
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  /* --- DESKTOP GRID --- */
  .desktop-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    /* Mobilda grid yashirinadi */
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* --- MOBILE SLIDER --- */
  .mobile-slider {
    display: none;

    /* Faqat mobilda ko'rinadi */
    @media (max-width: 768px) {
      display: block;
    }

    .blog-pagination {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      
      .swiper-pagination-bullet { background: #eee; opacity: 1; }
      .swiper-pagination-bullet-active { background: #888; }
    }

    .mobile-btn {
      width: 100%;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #ddd;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 600;
      color: #454545;
      cursor: pointer;
    }
  }

  /* --- UMUMIY KARTA STYLI --- */
  .blog-card {
    width: 100%;
    
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 15px;
      margin-bottom: 20px;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;

      h3 {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        max-width: 90%;
        line-height: 1.4;
        color: #111;
      }

      span {
        font-size: 24px;
        color: #111;
      }
    }

    .date {
      font-size: 14px;
      color: #888;
    }
  }
`;