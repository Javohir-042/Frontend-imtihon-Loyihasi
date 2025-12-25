import React from "react";
import { Strelka_ongga } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { Tashqi, Дocтaвкa_и } from "./Доставка.styled.js";
import Дocтaвкa_Text from "./Дocтaвкa_и/index.jsx";
import Karta from "./Karta/index.jsx";

function Доставка_и_оплата(props) {
  const { goToHome } = useAppNavigation();

  return (
    <>
      <div className="container">
        <Дocтaвкa_и>
          <div className="Katalog_strelka">
            <p onClick={goToHome}>Главная</p>
            <Strelka_ongga />
            <p>Доставка и оплата</p>
          </div>
        </Дocтaвкa_и>
        <Дocтaвкa_Text />
      </div>
      <Karta/>
    </>
  );
}

export default Доставка_и_оплата;
