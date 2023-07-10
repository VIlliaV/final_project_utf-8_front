import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoriesWrapper = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);

  margin-bottom: 32px;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`;

export const CategoriesContainer = styled.ul`
  display: flex;
  white-space: nowrap;
  overflow: hidden;

  margin-left: 19px;
  padding: 10px 10px 0px 10px;
`;

export const CategoriesItem = styled.li`
  &:not(:last-child) {
    margin-right: 28px;
  }
`;

export const CategoryLink = styled(NavLink)`
  display: block;
  text-decoration: none;

  color: rgba(224, 224, 224, 1);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;

  &.active {
    color: ${props => css`var(--active)`};
  }
  &.active::after {
    content: '';
    display: block;
    margin-top: 30px;
    border-bottom: 2px solid ${props => css`var(--active)`};
  }
`;
