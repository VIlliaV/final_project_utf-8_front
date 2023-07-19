import React, { useEffect, useState } from 'react';

import logo from 'img/icon.svg';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitch';

import {
  HideContentDesktop,
  LogoImg,
  LogoNav,
  MainDiv,
  Nav,
  ResponsiveHeaderContainer,
  ShowContentTablet,
  StyledNavLink,
  StyledUserSvgDefault,
  UserDiv,
} from './Header.styled';

import AvatarButtonComponent from './AvatarButton/AvatarButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [shouldChangeStyle, setShouldChangeStyle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Здесь вы можете указать условие для изменения стиля
    if (location.pathname === '/main') {
      setShouldChangeStyle(true);
    } else {
      setShouldChangeStyle(false);
    }
  }, [location]);

  return (
    <ResponsiveHeaderContainer>
      <MainDiv>
        <LogoNav to="/">
          <LogoImg src={logo} alt="" />
        </LogoNav>
        <HideContentDesktop>
          <Nav>
            <StyledNavLink to="/categories/beef">
              Categories
            </StyledNavLink>
            <StyledNavLink to="/add">
              Add recipes
            </StyledNavLink>
            <StyledNavLink to="/my">
              My recipes
            </StyledNavLink>
            <StyledNavLink to="/favorite">
              Favorites
            </StyledNavLink>
            <StyledNavLink to="/shopping-list">
              Shopping list
            </StyledNavLink>
            <StyledNavLink to="/search">
              <StyledUserSvgDefault />
            </StyledNavLink>
          </Nav>
        </HideContentDesktop>
        <UserDiv>
          <AvatarButtonComponent shouldChangeStyle={shouldChangeStyle} />
          <ShowContentTablet>
            <BurgerMenu />
          </ShowContentTablet>
          <HideContentDesktop>
            <ThemeSwitcher />
          </HideContentDesktop>
        </UserDiv>
      </MainDiv>
    </ResponsiveHeaderContainer>
  );
};

export default Header;
