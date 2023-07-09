import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeCardWrapper = styled.li``;

export const RecipeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  text-decoration: none;
`;

export const RecipeImg = styled.img`
  border-radius: 8px;
`;

export const RecipeName = styled.p`
  width: 275px;
  padding: 16px 16px 16px 16px;
  border-radius: 8px;

  color: ${props => css`var(--text_second_theme_1)`};
  background: rgba(255, 255, 255, 1);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;

  position: absolute;
  z-index: 1;
  bottom: 26px;
`;
