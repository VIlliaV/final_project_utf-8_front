import React, { useState } from 'react';
import {
  BurgerIcon,
  BurgerMenuContainer,
  CloseButton,
  Menu,
  StyledCloseIconSVG,
  StyledMenuIconSvg,
  StyledNavLink,
  Switcher,
} from './BurgerMenu.styled';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitch';
import { useAuth } from 'utils/hooks/useAuth';
import { useLocation } from 'react-router-dom';

const BurgerMenu = ({ shouldChangeStyle }) => {
  const location = useLocation();
  const recipePathRegex = /^\/recipe\/\w+/;

  const [menuVisible, setMenuVisible] = useState(() => {
    const savedMenuVisible = localStorage.getItem('burgerMenuVisible');
    return savedMenuVisible ? JSON.parse(savedMenuVisible) : false;
  });

  const handleToggleMenu = () => {
    const newMenuVisible = !menuVisible;
    setMenuVisible(newMenuVisible);
    localStorage.setItem('burgerMenuVisible', JSON.stringify(newMenuVisible));
  };

  const handleLinkClick = () => {
    setMenuVisible(false);
    const newMenuVisible = !menuVisible;
    setMenuVisible(newMenuVisible);
    localStorage.setItem('burgerMenuVisible', JSON.stringify(newMenuVisible));
  };

  const { isThemeToggle } = useAuth();

  let strokeColor;
  switch (true) {
    case recipePathRegex.test(location.pathname):
      strokeColor = 'black';
      break;
    case location.pathname === '/main':
      strokeColor = 'var(--text_third)';
      break;
    case shouldChangeStyle:
      strokeColor = 'var(--fix_back_2)';
      break;
    default:
      strokeColor = 'var(--text_third)';
      break;
  }

  return (
    <BurgerMenuContainer datatype={isThemeToggle.toString()}>
      <BurgerIcon onClick={handleToggleMenu}>
        <StyledMenuIconSvg
          style={{
            stroke: strokeColor,
          }}
        />
      </BurgerIcon>
      <Menu className={menuVisible ? 'visible' : ''}>
        <CloseButton onClick={handleToggleMenu}>
          <StyledCloseIconSVG />
        </CloseButton>

        <StyledNavLink
          to="categories/beef"
          onClick={handleLinkClick}
          className={navData => (navData.isActive ? 'active-style' : 'none')}
        >
          Categories
        </StyledNavLink>

        <StyledNavLink
          to="add"
          onClick={handleLinkClick}
          className={navData => (navData.isActive ? 'active-style' : 'none')}
        >
          Add recipes
        </StyledNavLink>
        <StyledNavLink
          to="my"
          onClick={handleLinkClick}
          className={recipePathRegex.test(location.pathname) && 'active'}
        >
          My recipes
        </StyledNavLink>
        <StyledNavLink
          to="favorite"
          onClick={handleLinkClick}
          className={navData => (navData.isActive ? 'active-style' : 'none')}
        >
          Favorites
        </StyledNavLink>
        <StyledNavLink
          to="shopping-list"
          onClick={handleLinkClick}
          className={navData => (navData.isActive ? 'active-style' : 'none')}
        >
          Shopping list
        </StyledNavLink>
        <StyledNavLink
          to="search"
          onClick={handleLinkClick}
          className={navData => (navData.isActive ? 'active-style' : 'none')}
        >
          Search
        </StyledNavLink>
        <Switcher>
          <ThemeSwitcher />
        </Switcher>
      </Menu>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
