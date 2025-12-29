import styled from "styled-components";

export const Производство = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-top: 98px;

  .title-box {
    flex: 1;
    min-width: 300px;
  }

  .content-box {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-weight: 700;
    width: 330px;
    font-size: 40px;
    margin: 0;
    line-height: 1.1;
  }

  p {
    font-weight: 400;
    font-size: 20px; 
    line-height: 150%;
    margin: 0;
    color: #333;
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    padding-top: 40px;
    gap: 20px;

    .title-box, .content-box {
      min-width: 100%;
    }

    h1 {
      font-size: 28px; 
    }

    p {
      font-size: 14px;
    }
  }
`;