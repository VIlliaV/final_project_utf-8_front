import React from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, StyledNavLink, StyledUserSvgDefault } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();
  const recipePathRegex = /^\/recipe\/\w+/;

  return (
    <Nav>
      <StyledNavLink to="categories/beef" className={recipePathRegex.test(location.pathname) && 'disabledMy'}>
        Categories
      </StyledNavLink>
      <StyledNavLink to="add" className={recipePathRegex.test(location.pathname) && 'disabledMy'}>
        Add recipes
      </StyledNavLink>
      <StyledNavLink to="my" className={recipePathRegex.test(location.pathname) && 'active'}>
        My recipes
      </StyledNavLink>
      <StyledNavLink to="favorite" className={recipePathRegex.test(location.pathname) && 'disabledMy'}>
        Favorites
      </StyledNavLink>
      <StyledNavLink to="shopping-list" className={recipePathRegex.test(location.pathname) && 'disabledMy'}>
        Shopping list
      </StyledNavLink>
      <StyledNavLink to="search" className={recipePathRegex.test(location.pathname) && 'disabledMy'}>
        <StyledUserSvgDefault />
      </StyledNavLink>
    </Nav>
  );
};


export default Navigation;
