import styled, { css } from 'styled-components';
import { media } from 'utils/media';
import { Link } from 'react-router-dom';

export const RecipeCardWrapper = styled.div`
  /* width: 343px;
    height: 323px; */
`;

export const RecipeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  text-decoration: none;
`;

export const RecipeImg = styled.img`
  width: 343px;
  height: 323px;
  border-radius: 8px;

  @media ${media.tablet} {
    width: 336px;
  }
  @media ${media.desktop} {
    width: 300px;
  }
`;

export const RecipeName = styled.p`
  width: 307px;
  padding: 16px 16px 16px 16px;
  border-radius: 8px;

  color: ${props => css`var(--text_second_theme_1)`};
  &[datatype='false'] {
    color: rgba(250, 250, 250, 1);
  }

  background: rgba(255, 255, 255, 1);
  &[datatype='false'] {
    background: rgba(42, 44, 54, 1);
  }

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;

  position: absolute;
  z-index: 1;
  bottom: 26px;

  @media ${media.mini} {
    max-width: 80%;
  }

  @media ${media.tablet} {
    width: 300px;
  }

  @media ${media.desktop} {
    width: 268px;
    bottom: 24px;
  }
`;
