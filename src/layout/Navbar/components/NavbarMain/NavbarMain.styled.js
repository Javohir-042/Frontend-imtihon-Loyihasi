import styled from "styled-components";
import { bgColors, textColors } from "../../../../theme";

export const NavMainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    gap: 30px;
    padding: 10px 0;
    width: 100%;

    @media (max-width: 900px) {
        gap: 15px;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    flex: 1; 
    max-width: 800px; 

    .catalog-button {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        padding: 14px 28px;
        border-radius: 100px;
        background-color: ${bgColors.primary || '#333'};
        border: none;
        color: ${textColors.white || '#fff'};
        font-size: 16px;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
    }

    .input-wrapper {
        position: relative;
        flex: 1;
        border: 1px solid ${bgColors.primary || '#333'};
        border-radius: 100px;
        overflow: hidden;
    }

    & input {
        width: 100%;
        height: 50px;
        padding: 14px 48px 14px 24px;
        border: none;
        outline: none;
        font-size: 16px;
    }

    .search-icon-wrap {
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const NavigationItems = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    .item {
        text-align: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        span {
            font-size: 12px;
            margin-top: 5px;
            color: ${textColors.primary || '#333'};
        }
    }
`;