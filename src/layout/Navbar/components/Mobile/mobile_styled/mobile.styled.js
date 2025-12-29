import styled from "styled-components";

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 999; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
`;

export const MenuContent = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  border-radius: 0 0 10px 10px; 
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px; 
  border-bottom: 1px solid #f0f0f0;
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; 
`;

export const IconButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #C63C3C;
  color: white;
  font-size: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 0;
  font-size: 16px;
  color: #454545;
  cursor: pointer;
  text-align: center; 
  width: 100%;
  
  &:active {
    background-color: #f9f9f9;
  }
`;

export const BottomSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const CatalogButton = styled.button`
  width: 100%;
  background-color: #404040;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const PhoneLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
`;

export const CallbackText = styled.span`
  font-size: 14px;
  color: #888;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
`;