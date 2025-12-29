import styled from "styled-components";

export const ProductCharacteristics = styled.div`
  margin-top: 60px;
  width: 100%; /* Qat'iy 1300px dan 100% ga o'zgartirildi */
  max-width: 1300px; /* Maksimal kenglik saqlab qolindi */
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  h2 {
    font-weight: 500;
    font-size: 24px;
    color: #454545;
    margin-bottom: 30px;
  }

  .char_row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Markazdan yuqoriga tekislash (ko'p qatorli matnlar uchun) */
    border-bottom: 1px solid #f2f2f2;
    padding: 20px 24px;
    transition: 0.3s;

    &:nth-child(even) { /* nth-child(odd) sarlavhani ham hisobga oladi, shuning uchun even qulayroq */
      background: #f8f8f8;   
    }
  }

  .char_label {
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #101010;
    flex: 1; /* Labelga joy ajratish */
    padding-right: 20px;
  }
  
  .char_value {
    flex: 2; /* Qiymat qismi kattaroq bo'ladi */
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.01em;
    text-align: right; /* Desktopda o'ngga tekislash */
    color: #4c4c4c;
    word-break: break-word; /* Uzun so'zlarni bo'lish uchun */
  }

  /* 📱 MOBILE RESPONSIVE (Rasmga ko'ra) */
  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 10px;

    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .char_row {
      flex-direction: column; 
      padding: 15px 10px;
      gap: 5px;
    }

    .char_label {
      font-size: 14px;
      padding-right: 0;
    }

    .char_value {
      width: 100%;
      text-align: left; /* Mobilda qiymatni chapga tekislash (o'qishga qulay) */
      font-size: 14px;
    }
  }
`;