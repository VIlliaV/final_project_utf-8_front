import React from 'react';

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
  UserDiv,
} from './Header.styled';

import AvatarButtonComponent from './AvatarButton/AvatarButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <ResponsiveHeaderContainer>
      <MainDiv>
        <LogoNav to="/">
          <LogoImg src={logo} alt="" />
        </LogoNav>
        <HideContentDesktop>
          <Nav>
            <StyledNavLink to="/categories/beef" className={navData => (navData.isActive ? 'active-style' : 'none')}>
              Categories
            </StyledNavLink>
            <StyledNavLink to="/add" className={navData => (navData.isActive ? 'active-style' : 'none')}>
              Add recipes
            </StyledNavLink>
            <StyledNavLink to="/my" className={navData => (navData.isActive ? 'active-style' : 'none')}>
              My recipes
            </StyledNavLink>
            <StyledNavLink to="/favorite" className={navData => (navData.isActive ? 'active-style' : 'none')}>
              Favorites
            </StyledNavLink>
            <StyledNavLink to="/shopping-list" className={navData => (navData.isActive ? 'active-style' : 'none')}>
              Shopping list
            </StyledNavLink>
            <StyledNavLink to="/search" className={navData => (navData.isActive ? 'active-style' : 'none')}>
              Search
            </StyledNavLink>
          </Nav>
        </HideContentDesktop>

        <UserDiv>
          <AvatarButtonComponent />
          <ShowContentTablet>
            <BurgerMenu />
          </ShowContentTablet>
        </UserDiv>
        <HideContentDesktop>
          <ThemeSwitcher />
        </HideContentDesktop>
      </MainDiv>
    </ResponsiveHeaderContainer>
  );
};

export default Header;
