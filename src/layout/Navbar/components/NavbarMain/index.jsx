import React from 'react';
import {
    CartIcon,
    CatalogIcon,
    HeartIcon,
    NetworkIcon,
    SearchIcon
} from '../../../../components';

import { NavMainWrapper, SearchWrapper, NavigationItems } from './NavbarMain.styled';
import { useAppNavigation } from '../../../../hooks/useAppNavigation';

function NavbarMain(props) {


  const { goToКорзина, goToHome, goToИзбранные } = useAppNavigation();
    return (
      <NavMainWrapper>
        <div onClick={goToHome}>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <SearchWrapper>
          <button className="catalog-button">
            <CatalogIcon />
            <span>Каталог</span>
          </button>
          <div className="input-wrapper">
            <input type="text" placeholder="Поиск по товарам" />
            <span className="search-icon-wrap">
              <SearchIcon />
            </span>
          </div>
        </SearchWrapper>
        <NavigationItems>
          <div className="item" onClick={ goToИзбранные}>
            <HeartIcon />
            <span>Избранное</span>
          </div>
          <div className="item">
            <NetworkIcon />
            <span>Сравнение</span>
          </div>
          <div className="item" onClick={goToКорзина}>
            <CartIcon />
            <span>Корзина</span>
          </div>
        </NavigationItems>
      </NavMainWrapper>
    );
}

export default NavbarMain;