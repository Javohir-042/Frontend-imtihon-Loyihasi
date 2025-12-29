import styled from "styled-components";

export const Дocтaвкa = styled.div`
    display: flex;
    padding-top: 20px;

    .wrapper_1{
        font-weight: 700;
        font-size: 30px;
        line-height: 200%; 
        color: #454545;
        width: 320px;
        height: 140px;
        margin-right: 341px;
    }

    .wrapper_2{
        width: 640px;
    }

    & h1{
        padding-top: 20px;
    }

    & p{
        padding: 28px 0 40px ;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        color: #000;
    }

    & span{
        color: #2f4da3;
    }

    @media (max-width: 1332px) {
        flex-direction: column; 
        padding-top: 10px;

        .wrapper_1 {
            width: 100%;
            height: auto;
            margin-right: 0;
            
            h1 {
                font-size: 28px; 
                line-height: 1.2;
                padding-bottom: 20px;
            }
        }

        .wrapper_2 {
            width: 100%;
            
            div h1 {
                font-size: 20px;
                padding-top: 10px;
            }

            p {
                font-size: 16px;
                padding: 10px 0 20px; 
            }
        }
    }
`