

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { textColors } from "../../../../theme";

export const NavTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0; 
    
    @media (max-width: 800px) {
        display: none; 
    }
`;

export const NavTopSide = styled.div`
    display: flex;
    gap: 25px;
`;



export const CustomNavLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: ${textColors.secondary};
`;

export const OrderPhoneButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: ${textColors.secondary};
`;

export const PhoneLink = styled.a`
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: ${textColors.primary};
`;