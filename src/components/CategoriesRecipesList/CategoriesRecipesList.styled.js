import styled from 'styled-components';
import { media } from 'utils/media';

export const CategoriesRecipesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -28px;

  @media ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-left: -32px;
    margin-top: -32px;
  }

  @media ${media.desktop} {
    margin-left: -14px;
    margin-top: -100px;
  }
`;

export const CategoryRecipeCardWrapper = styled.li`
  margin-top: 28px;

  &:hover {
    transform: scale(1.03);
  }

  @media ${media.tablet} {
    flex-basis: calc(50% - 32px);
    margin-left: 32px;
    margin-top: 32px;
  }
  @media ${media.desktop} {
    flex-basis: calc(25% - 14px);
    margin-left: 14px;
    margin-top: 100px;
  }
`;
