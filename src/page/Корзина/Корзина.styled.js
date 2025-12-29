import styled from "styled-components";

// --- UMUMIY WRAPPER ---
export const KorzinkaWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 20px 100px;
  font-family: 'Inter', sans-serif;

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0 40px;
    flex-wrap: wrap;

    p {
      font-size: 14px;
      color: #b3b3b3;
      cursor: pointer;
      margin: 0;
      transition: 0.2s;
      &:hover, &:last-child { color: #454545; }
    }
  }

  .empty-cart {
    text-align: center;
    padding: 60px 0;
    
    h2 { color: #454545; margin-bottom: 20px; }
    
    button {
      padding: 15px 40px;
      border-radius: 50px;
      background: #454545;
      color: #fff;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

// --- HEADER (SARLAVHA) ---
export const KorzinkaHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 40px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    color: #454545;
    margin: 0;
    line-height: 1;

    @media (max-width: 768px) { font-size: 36px; }
  }

  .count-badge {
    background: #E44542;
    color: white;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 600;
  }
`;

// --- ASOSIY KORZINA RO'YXATI (TABLE / GRID) ---
export const KorzinkaContainer = styled.div`
  background: #f8f8f8;
  border-radius: 20px;
  padding: 40px 50px;
  margin-bottom: 30px;

  /* Desktop Header */
  .table_header {
    display: grid;
    grid-template-columns: 100px 1.8fr 2.5fr 1.5fr 1.2fr 50px;
    color: #b3b3b3;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 15px;

    @media (max-width: 1024px) { display: none; }
  }

  @media (max-width: 1024px) {
    padding: 0;
    background: transparent;
  }

  /* --- CART ITEM (MAHSULOT KARTASI) --- */
  .cart_item {
    display: grid;
    grid-template-columns: 100px 1.8fr 2.5fr 1.5fr 1.2fr 50px;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding: 30px 0;

    &:last-child { border-bottom: none; }

    /* !!! MOBIL REJIM - SIZ SO'RAGAN DIZAYN !!! */
    @media (max-width: 1024px) {
      display: grid;
      grid-template-columns: 90px 1fr; /* Chapda rasm, O'ngda kontent */
      /* 4 qator:
         1. Sarlavha
         2. Narx
         3. Artikul
         4. Actions (Counter & Delete)
      */
      grid-template-rows: auto auto auto 1fr;
      gap: 5px 20px;
      
      background: #f2f2f2; /* Kulrang fon */
      padding: 20px;
      border-radius: 20px;
      margin-bottom: 15px;
      border-bottom: none;
      align-items: start;
    }
  }

  /* 1. Rasm */
  .product_img {
    width: 80px; height: 80px;
    background: #fff;
    border-radius: 15px;
    display: flex; justify-content: center; align-items: center;
    img, svg { max-width: 70%; max-height: 70%; }

    @media (max-width: 1024px) {
      grid-column: 1; 
      grid-row: 1 / 3; /* Ikkita qator balandligida turadi */
    }
  }

  /* 2. Info (Sarlavha & Narx) */
  .product_info {
    padding-left: 20px;

    @media (max-width: 1024px) {
      padding-left: 0;
      grid-column: 2;
      grid-row: 1; /* Sarlavha tepada */
    }

    h3 {
      font-size: 16px; font-weight: 600; color: #454545; margin: 0 0 10px;
      line-height: 1.4;
    }
    .price {
      font-size: 18px; font-weight: 700; color: #333; margin: 0;
    }
  }

  /* 3. Tavsif (Mobilda yashiramiz - rasmga ko'ra) */
  .product_desc {
    font-size: 14px; color: #454545; padding-right: 20px; line-height: 1.5;
    @media (max-width: 1024px) { display: none; }
  }

  /* 4. Artikul */
  .product_articul {
    font-size: 13px; color: #454545;
    @media (max-width: 1024px) {
      grid-column: 2;
      grid-row: 2; /* Sarlavhadan keyin */
      margin-top: 5px;
      color: #888;
    }
  }

  /* 5. Counter (+/-) */
  .counter {
    display: flex; gap: 10px;
    
    button {
      background: transparent; border: none; cursor: pointer;
      font-size: 24px; color: #333; padding: 0 5px;
      &:hover { color: #000; }
    }
    span {
      width: 48px; height: 44px;
      background: #fff; border: 1px solid #EAEAEA;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-weight: 600; color: #333;
    }

    @media (max-width: 1024px) {
      grid-column: 2;
      grid-row: 4; /* Eng pastki qator */
      margin-top: 15px;
      justify-self: start;
    }
  }

  /* 6. Delete Button (Musor) */
  .delete_btn {
    cursor: pointer; display: flex; justify-content: flex-end;
    
    svg { width: 24px; height: 24px; color: #333; transition: 0.2s; }
    &:hover svg { color: #E44542; }

    @media (max-width: 1024px) {
      grid-column: 2;
      grid-row: 4; /* Counter bilan bir qatorda */
      justify-self: end; /* O'ng burchakka yopishtirish */
      align-self: center;
      margin-top: 15px;
    }
  }
`;

// --- FORMA QISMI ---
export const FormSection = styled.div`
  background: #f8f8f8;
  border-radius: 20px;
  padding: 40px 50px;
  margin-top: 30px;

  @media (max-width: 768px) { padding: 30px 20px; }

  h2 {
    font-size: 32px; font-weight: 700; color: #454545; margin-bottom: 25px;
    @media (max-width: 768px) { font-size: 24px; }
  }
  .mt-40 { margin-top: 40px; }

  .grid-3 {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;
    @media (max-width: 768px) { grid-template-columns: 1fr; }
  }

  input, textarea {
    width: 100%;
    padding: 16px 24px;
    border-radius: 50px;
    border: 1px solid #D9D9D9;
    background: transparent;
    font-size: 15px; color: #333;
    outline: none;
    &::placeholder { color: #454545; }
    &:focus { border-color: #454545; }
  }

  textarea {
    border-radius: 20px;
    min-height: 140px;
    resize: none;
  }

  .full-width { grid-column: span 3; @media(max-width:768px){grid-column: span 1;} }
`;

// --- TO'LOV (PAYMENT) QISMI ---
export const PaymentBlock = styled.div`
  background: #f8f8f8;
  border-radius: 20px;
  padding: 40px 50px;
  margin-top: 30px;

  @media (max-width: 768px) { padding: 30px 20px; }

  h2 {
    font-size: 32px; font-weight: 700; color: #454545; margin-bottom: 30px;
    @media (max-width: 768px) { font-size: 24px; }
  }

  .payment-row {
    display: flex; gap: 60px; margin-bottom: 20px; flex-wrap: wrap;
    @media (max-width: 768px) { flex-direction: column; gap: 15px; }
  }

  .row-item {
    display: flex; align-items: baseline; min-width: 320px;
    font-size: 16px; color: #888;
    @media (max-width: 768px) { width: 100%; min-width: auto; }

    .dots {
      flex: 1; border-bottom: 1px dotted #ccc; margin: 0 8px; position: relative; top: -4px;
    }
    .value { color: #333; font-weight: 500; }
  }

  .total-price {
    font-size: 36px; font-weight: 700; color: #333;
    padding: 30px 0;
  }

  .footer-action {
    display: flex; align-items: center; gap: 30px;
    
    @media (max-width: 768px) {
      flex-direction: column; align-items: stretch; gap: 20px;
    }

    .buy-btn {
      background: #454545; color: #fff;
      height: 54px; width: 240px;
      border-radius: 50px; border: none;
      font-size: 17px; font-weight: 600; cursor: pointer;
      transition: 0.3s;
      &:hover { background: #222; }
      @media (max-width: 768px) { width: 100%; }
    }

    .policy {
      display: flex; align-items: center; gap: 10px;
      font-size: 13px; color: #888; cursor: pointer;
      
      input { width: 18px; height: 18px; cursor: pointer; accent-color: #454545; }
    }
  }
`;