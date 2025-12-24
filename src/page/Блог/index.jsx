import React from 'react';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { Strelka_ongga } from '../../components';

import { Blog } from "./Блог.styled";
import CatalogUy1 from '../../components/CatalogUy';

function Блог(props) {

    const { goToHome } = useAppNavigation();

    return (
      <Blog>
        <div className="Katalog_strelka">
          <p onClick={goToHome}>Главная</p>
          <Strelka_ongga />
          <p>Блог</p>
        </div>

        <h1>Блог</h1>

        <CatalogUy1 showHeader={false} />
        <br />
        <CatalogUy1 showHeader={false} />
      </Blog>
    );
}

export default Блог;