import React from "react";
import { Kart } from "./Karta.styled.js";
import Karta_img from "../../../assets/svg/Karta_img.svg";

function Karta(props) {
  return (
    <Kart>
      <img src={Karta_img} alt="Map" />
    </Kart>
  );
}

export default Karta;
