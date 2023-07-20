import styled, { css } from 'styled-components';
import { media } from 'utils/media';
import { NavLink } from 'react-router-dom';

export const CategoriesWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);

  margin-top: 50px;
  margin-bottom: 32px;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  @media ${media.tablet} {
    margin-bottom: 50px;
  }
  @media ${media.desktop} {
    margin-top: 100px;
  }
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

    @media ${media.tablet} {
      margin-right: 55px;
    }
  }
`;

export const CategoryLink = styled(NavLink)`
  display: block;
  text-decoration: none;

  color: rgba(224, 224, 224, 1);
  &[datatype='false'] {
    color: rgba(250, 250, 250, 0.6);
  }

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;

  &:hover {
    color: ${props => css`var(--fix_back)`};
  }
  &:focus {
    color: ${props => css`var(--fix_back)`};
    outline: none;
  }

  &.active {
    color: ${props => css`var(--fix_back)`};
  }

  &.active::after {
    content: '';
    display: block;
    margin-top: 29px;
    border-bottom: 2px solid ${props => css`var(--fix_back)`};

    @media ${media.tablet} {
      margin-top: 25px;
    }
  }

  @media ${media.tablet} {
    font-size: 18px;
  }
`;
