import React from "react";
import { X, NetworkIcon, HeartIcon, CartIcon, CatalogIcon } from "../../../../../components";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import {
  Badge,
  BottomSection,
  CallbackText,
  CartWrapper,
  CatalogButton,
  IconButton,
  MenuContent,
  MenuHeader,
  MenuItem,
  MenuList,
  MenuOverlay,
  PhoneLink,
  RightIcons,
} from "./mobile.styled";



const MobileMenu = ({ onClose }) => {
  const nav = useAppNavigation();

  const handleLinkClick = (action) => {
    action();
    onClose();
  };

  const handleOverlayClick = (e) => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <MenuOverlay onClick={handleOverlayClick}>
      <MenuContent onClick={handleContentClick}>
        <MenuHeader>
          <IconButton onClick={onClose}>
            <X />
          </IconButton>

          <RightIcons>
            <IconButton>
              <HeartIcon />
            </IconButton>
            <IconButton>
              <NetworkIcon />
            </IconButton>
            <IconButton onClick={() => handleLinkClick(nav.goToКорзина)}>
              <CartWrapper>
                <CartIcon />
                <Badge>1</Badge>
              </CartWrapper>
            </IconButton>
          </RightIcons>
        </MenuHeader>

        <MenuList>
          <MenuItem onClick={() => handleLinkClick(nav.goToAbout)}>
            О компании
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick(nav.goToDelivery)}>
            Доставка и оплата
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick(nav.goToReturn)}>
            Возврат
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick(nav.goToWarranty)}>
            Гарантии
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick(nav.goToContacts)}>
            Контакты
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick(nav.goToBlog)}>
            Блог
          </MenuItem>
        </MenuList>

        <BottomSection>
          <CatalogButton onClick={() => handleLinkClick(nav.goToCatalog)}>
            <CatalogIcon />
            Каталог
          </CatalogButton>

          <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
          <CallbackText>Заказать звонок</CallbackText>
        </BottomSection>
      </MenuContent>
    </MenuOverlay>
  );
};

export default MobileMenu;
