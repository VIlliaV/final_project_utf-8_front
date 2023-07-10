import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoriesContainer = styled.ul``;

export const CategoryLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: red;
  }
`;
