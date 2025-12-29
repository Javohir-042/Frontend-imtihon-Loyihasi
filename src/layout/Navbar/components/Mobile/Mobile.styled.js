import styled from "styled-components";

export const MobileWrapper = styled.div`
  display: none;
  padding: 10px 0;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const MobileHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const BurgerMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 28px;

  .line {
    height: 2px;
    background-color: #333;
    border-radius: 2px;
    transition: 0.3s;
  }
  .line-1 { width: 100%; }
  .line-2 { width: 80%; }
  .line-3 { width: 60%; }

  &:hover .line {
    width: 100%;
  }
`;

export const MobileIconsWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  .cart-box {
    position: relative;
    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ee3b3b;
      color: white;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 50%;
    }
  }
`;

export const MobileSearchArea = styled.div`
  width: 100%;
  .search-input-wrap {
    position: relative;
    input {
      width: 100%;
      height: 42px;
      border-radius: 100px;
      border: 1px solid #e5e5e5;
      padding: 0 45px 0 15px;
      outline: none;
      font-size: 14px;
    }
    .icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;