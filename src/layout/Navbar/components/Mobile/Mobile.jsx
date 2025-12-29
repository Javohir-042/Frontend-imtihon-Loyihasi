import React, { useState } from "react";
import MobileMenu from "./mobile_styled/index.jsx";
import {
  HeartIcon,
  CartIcon,
  SearchIcon,
} from "../../../../components/index.js";
import {
  MobileWrapper,
  MobileHeaderRow,
  BurgerMenu,
  MobileIconsWrap,
  MobileSearchArea,
} from "./Mobile.styled.js";
import { useAppNavigation } from "../../../../hooks/useAppNavigation.js";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { goToHome, goToИзбранные, goToКорзина } = useAppNavigation();
  

  return (
    <>
      <MobileWrapper>
        <div className="container">
          <MobileHeaderRow>
            <BurgerMenu onClick={() => setIsMenuOpen(true)}>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </BurgerMenu>

            <img
              onClick={goToHome}
              src="/logo.svg"
              alt="Logo"
              style={{ height: "22px", cursor: "pointer" }}
            />

            <MobileIconsWrap>
              <HeartIcon onClick={goToИзбранные} />
              <div className="cart-box">
                <CartIcon onClick={goToКорзина}/>
                <span className="badge">1</span>
              </div>
            </MobileIconsWrap>
          </MobileHeaderRow>

          <MobileSearchArea>
            <div className="search-input-wrap">
              <input type="text" placeholder="Поиск по товарам" />
              <span className="icon">
                <SearchIcon size={18} />
              </span>
            </div>
          </MobileSearchArea>
        </div>
      </MobileWrapper>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default MobileNavbar;
