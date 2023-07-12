import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HideContentTablet,
  LogoImg,
  LogoNav,
  Navigation,
  ResponsiveHeaderContainer,
  StyledNavLink,
} from './Header.styled';
import logo from '../../pages/WellcomPage/images/icon.svg';
import AvatarButton from './AvatarButton/AvatarButton';
import ThemeSwitcher from './ThemeSwircher/ThemeSwitch';

function Header() {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <ResponsiveHeaderContainer>
      <LogoNav to="/">
        <LogoImg src={logo} alt="" />
      </LogoNav>
      <HideContentTablet>
        <Navigation>
          <StyledNavLink exact="true" to="/categories/beef" active={activeLink === '/' ? 'true' : 'false'}>
            Categories
          </StyledNavLink>
          <StyledNavLink exact="true" to="/add" active={activeLink === '/add' ? 'true' : 'false'}>
            Add recipes
          </StyledNavLink>
          <StyledNavLink exact="true" to="/my" active={activeLink === '/my' ? 'true' : 'false'}>
            My recipes
          </StyledNavLink>
          <StyledNavLink exact="true" to="/favorite" active={activeLink === '/favorite' ? 'true' : 'false'}>
            Favorites
          </StyledNavLink>
          <StyledNavLink exact="true" to="/shopping-list" active={activeLink === '/shopping-list' ? 'true' : 'false'}>
            Shopping list
          </StyledNavLink>
          <StyledNavLink exact="true" to="/search" active={activeLink === '/search' ? 'true' : 'false'}>
            Search
          </StyledNavLink>
        </Navigation>
      </HideContentTablet>
      <AvatarButton />
      <ThemeSwitcher />
    </ResponsiveHeaderContainer>
  );
}

export default Header;
