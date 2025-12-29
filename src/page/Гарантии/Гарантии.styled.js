import styled from "styled-components";

export const Гарантии_goto = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;


    .Katalog_strelka {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap; /* Mobilda sig'may qolsa pastga tushib ketishi uchun */

        & p {
            margin: 0;
            font-size: 16px;
            color: #454545;
            transition: 0.3s;
        }

        & p:hover {
            color: #bbb8b8ff;
            cursor: pointer;
        }
    }
`;

export const Гарантии_goto_data = styled.div`
    display: flex;
    justify-content: space-between; /* Qotirilgan gap o'rniga, ekran kengligiga qarab joy tashlaydi */
    gap: 40px;
    padding-bottom: 104px;

    /* RESPONSIVE: 1024px dan kichik ekranlarda (Planshet va Mobil) */
    @media (max-width: 1024px) {
        flex-direction: column; /* Yonma-yon emas, ustma-ust tushadi */
        gap: 24px;
        padding-bottom: 60px;
    }

    /* Chap tomondagi H1 sarlavha bloki */
    & > div:first-child {
        flex: 0 0 auto; /* O'z o'lchamini saqlaydi */
    }

    /* O'ng tomondagi Matnlar bloki */
    & > div:last-child {
        flex: 1; /* Qolgan bo'sh joyni egallaydi */
        max-width: 800px; /* Matn juda cho'zilib ketmasligi uchun */
    }

    & h1 {
        /* width: 319px;  <-- Olib tashlandi, chunki bu matnni qisib qo'yadi */
        font-weight: 700;
        font-size: 64px;
        line-height: 110%;
        color: #454545;
        margin: 0;

        /* Mobilda shriftni kichraytiramiz */
        @media (max-width: 768px) {
            font-size: 32px;
        }
    }

    & h2 {
        /* padding-top: 20px; <-- Kerak emas */
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        color: #000;
        margin-bottom: 24px;

        @media (max-width: 768px) {
            font-size: 20px;
            margin-bottom: 16px;
        }
    }

    & p {
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        color: #000;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }

    & ul {
        padding-left: 25px;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        color: #000;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 16px;
            padding-left: 20px;
        }
    }

    & li {
        margin-bottom: 10px;
    }
`;