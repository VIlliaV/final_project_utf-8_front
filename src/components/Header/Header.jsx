import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LogoImg, LogoNav, Navigation, ResponsiveHeaderContainer, StyledNavLink } from './Header.styled';
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
			<Navigation>
      <StyledNavLink exact to="/" active={activeLink === '/'}>
        Categories
      </StyledNavLink>
      <StyledNavLink to="/add" active={activeLink === '/add'}>
        Add recipes
      </StyledNavLink>
      <StyledNavLink to="/my" active={activeLink === '/my'}>
        My recipes
      </StyledNavLink>
      <StyledNavLink to="/favorite" active={activeLink === '/favorite'}>
        Favorites
      </StyledNavLink>
      <StyledNavLink to="/shopping-list" active={activeLink === '/shopping-list'}>
        Shopping list
      </StyledNavLink>
      <StyledNavLink to="/search" active={activeLink === '/search'}>
        Search
      </StyledNavLink>
    </Navigation>
  
      <AvatarButton />
      <ThemeSwitcher /> 
        </ResponsiveHeaderContainer>
    );
}

export default Header;
