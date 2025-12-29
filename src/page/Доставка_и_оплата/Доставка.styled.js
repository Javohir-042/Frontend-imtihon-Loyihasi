import styled from "styled-components";

export const Дocтaвкa_и = styled.div`
    .Katalog_strelka{
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 48px;

        & p:hover{
            color: #bbb8b8ff;
            cursor: pointer;
        }

        @media (max-width: 1332px) {
            margin-top: 20px;
            gap: 8px;
            & p, & span {
                font-size: 12px;
            }
        }
    }
`

export const Tashqi = styled.div`
 
`