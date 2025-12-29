import styled from "styled-components";

export const Blog = styled.div`
    padding-top: 20px; 
    padding-bottom: 80px;

    .Katalog_strelka {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap; 

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

    & h1 {
        font-weight: 700;
        font-size: 64px;
        line-height: 110%;
        margin-top: 30px;
        margin-bottom: 60px;
        color: #454545;

        @media (max-width: 768px) {
            font-size: 32px;
            margin-bottom: 30px;
            margin-top: 20px;
        }
    }

    .Blog_uy {
        margin-bottom: 40px;
        
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
`;