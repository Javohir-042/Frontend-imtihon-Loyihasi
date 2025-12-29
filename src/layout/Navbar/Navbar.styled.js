import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 12px 0;
  margin-bottom: 68px;

  .desktop-content {
    display: block;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 25px;
    .desktop-content {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
    padding: 10px 0;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 360px) {
    padding: 8px 0;
    margin-bottom: 10px;
  }
`;