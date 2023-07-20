import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, StyledNavLink, StyledUserSvgDefault } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  const recipePathRegex = /^\/recipe\/\w+/;

  return (
    <Nav>
      <StyledNavLink to="/categories/beef">
        Categories
      </StyledNavLink>
      <StyledNavLink to="/add">
        Add recipes
      </StyledNavLink>
      <StyledNavLink to="/my" className={recipePathRegex.test(location.pathname) && 'active'}>
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
  );
};

export default Navigation;
