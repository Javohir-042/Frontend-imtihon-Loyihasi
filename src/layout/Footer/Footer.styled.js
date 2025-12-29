import styled from "styled-components";
import { bgColors } from '../../theme';

export const FooterWrapper = styled.footer`
    background-color: ${bgColors?.lightBlue || '#F2F2F2'};
    padding: 80px 20px;
    margin-top: 60px;

    @media (max-width: 768px) {
        padding: 40px 15px;
    }
`;

export const FooterWrapper_1 = styled.div` // footer tegini divga o'zgartirdim
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
    }

    h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #333;
    }

    p {
        margin-top: 15px;
        font-size: 16px;
        color: #888;
        cursor: pointer;
        &:hover { color: #333; }
    }
`;

export const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .logo-img {
        width: 150px;
        margin-bottom: 25px;
    }

    .a1 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
        color: #333;
    }

    .payment-img {
        height: 30px;
        object-fit: contain;
        margin-bottom: 25px;
    }

    .legal-link {
        font-size: 14px;
        color: #888;
        text-decoration: none;
        margin-bottom: 15px;
        &:hover { text-decoration: underline; }
    }
`;

export const FooterVK = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 25px;
`;

export const Footer_div2 = styled.div`
    display: flex;
    gap: 70px;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0px;
    }
`;