import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 15px; 
  box-sizing: border-box;
`;

export const Kantakt = styled.div`
  .Katalog_strelka {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;

    @media (min-width: 768px) {
      margin-top: 48px;
    }

    & p:hover {
      color: #bbb8b8ff;
      cursor: pointer;
    }
  }
`;

export const Kantakt_text = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 110%;
    color: #454545;

    @media (min-width: 768px) {
      font-size: 64px;
    }
  }

  & h2 {
    font-weight: 600;
    font-size: 20px;
    color: #454545;
    padding-bottom: 10px;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    color: #454545;
  }

  .kontakt_p {
    width: 100%;
    @media (min-width: 768px) {
      width: 215px;
    }
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  position: relative;

  @media (min-width: 1024px) {
    height: 600px; 
  }
`;

export const MapOverlay = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media (min-width: 1024px) {
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    bottom: 20px; 
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    padding: 40px;
    margin-top: 0;
  }

  & h2 {
    font-weight: 600;
    font-size: 18px;
    color: #454545;
    padding-bottom: 5px;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    color: dimgray;
  }

  & button {
    background-color: #333;
    color: white;
    border-radius: 100px;
    width: 100%; 
    height: 50px;
    cursor: pointer;
    border: none;

    @media (min-width: 768px) {
      width: 216px;
    }
  }
`;