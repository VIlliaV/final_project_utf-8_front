import styled from 'styled-components';
import { media } from '../../utils/media';

export const PreviewCategoriesContainer = styled.div`
  width: 100%;
  margin-top: 14px;

  @media ${media.tablet} {
    margin-top: 0;
    margin-bottom: -100px;
  }
  @media ${media.desktop} {
    margin-top: -2px;
    margin-bottom: -82px;
  }
`;

export const CategoryListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:last-child {
    margin-bottom: 40px;
  }

  @media ${media.tablet} {
    &:not(:last-child) {
      margin-bottom: 50px;
    }

    &:last-child {
      margin-bottom: 32px;
    }
  }
  @media ${media.desktop} {
    &:not(:last-child) {
      margin-bottom: 100px;
    }

    &:last-child {
      margin-bottom: 14px;
    }
  }
`;

export const CategoryListHeader = styled.h2`
  margin-bottom: 32px;
  color: var(--head_theme_1);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.56px;

  @media ${media.tablet} {
    margin-bottom: 40px;
    font-size: 44px;
    letter-spacing: -0.88px;
  }
  @media ${media.desktop} {
    margin-bottom: 50px;
  }
`;

export const ListRecipesContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 28px;

  margin-bottom: 24px;

  @media ${media.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 40px;
  }
  @media ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 14px;
    margin-bottom: 50px;
  }
`;

export const ListRecipesItem = styled.li`
  @media ${media.mobMax} {
    &:nth-child(n + 2) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      border: 0;
      clip: rect(0 0 0 0);
    }
  }

  @media ${media.tabDesk} {
    &:nth-child(n + 3) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      border: 0;
      clip: rect(0 0 0 0);
    }
  }
`;

export const SeeAllButton = styled.button`
  display: block;
  margin-left: auto;
  width: 94px;
  height: 38px;
  color: var(--back_fix);
  text-align: center;
  font-size: 14px;
  line-height: 1.29;
  border-radius: 6px;
  border: none;
  background-color: var(--fix_back);
  outline: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: var(--fix_back_2);
  }
`;

export const OtherCategoriesButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 195px;
  height: 46px;
  color: var(--text_third);
  text-align: center;
  border-radius: 24px 44px;
  border: 1px solid var(--fix_back);
  background-color: var(--fix-transparent);
  outline: none;
  font-size: 14px;
  cursor: pointer;

  &:focus,
  &:hover {
    color: var(--back_fix);
    background-color: var(--fix_back);
  }

  @media ${media.tablet} {
    width: 239px;
    height: 61px;
    font-size: 16px;
  }
`;
