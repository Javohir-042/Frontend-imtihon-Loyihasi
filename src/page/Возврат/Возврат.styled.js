import styled from "styled-components";

export const Возврат_Text = styled.div`
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 48px; /* Desktop masofasi */

    & p:hover {
      color: #bbb8b8ff;
      cursor: pointer;
    }

    /* RESPONSIVE */
    @media (max-width: 1332px) {
      margin-top: 20px;
      gap: 8px;
      font-size: 12px; /* Matnlarni kichraytirish */
    }
  }
`; 

export const Возврат_Text_2 = styled.div`
  display: flex;
  margin-top: 40px;

  & h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    color: #454545;
    padding-right: 341px;
  }

  & h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #000;
  }

  & p {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #000;
    padding-top: 28px;
    padding-bottom: 30px;
  }

  & ul {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #0b5d9c;
    padding-left: 20px; /* Masofani biroz kamaytirish */
    padding-bottom: 60px;
    list-style-position: inside; /* Nuqtalar matn ichida turishi uchun */
  }

  /* RESPONSIVE - Notebook va Mobil uchun */
  @media (max-width: 1332px) {
    flex-direction: column; /* Sarlavha tepaga chiqadi */
    margin-top: 20px;

    & h1 {
      font-size: 32px; /* Rasmdagi kabi kichrayadi */
      padding-right: 0;
      margin-bottom: 20px;
    }

    & h2 {
      font-size: 20px;
      margin-top: 10px;
    }

    & p {
      font-size: 16px;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    & ul {
      font-size: 16px;
      padding-left: 10px;
      padding-bottom: 30px;
      
      li {
        margin-bottom: 8px; 
      }
    }
  }
`;