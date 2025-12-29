import styled from "styled-components";

export const Kart = styled.div`
    border-radius: 15px;
    width: 1800px; 
    height: 680px;
    margin: 0 auto;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1332px) {
        width: 95%; 
        height: 350px; 
        margin-top: 40px;
    }

    @media (max-width: 480px) {
        height: 250px;
        width: 100%;
        border-radius: 10px;
    }
`