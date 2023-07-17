import React from 'react';
import {
  BackgroundWrapper,
  TitleRecipe,
  Description,
  Button,
  ClockWrapper,
  Time,
  TimeWrapper,
} from './RecipePageHero.styled';
import SvgIcon from '@mui/material/SvgIcon';
import { useAuth } from 'utils/hooks/useAuth';

const RecipePageHero = ({ title, description, time, isFavorite, addToFavorite, removeFromFavorite }) => {
  const { isThemeToggle } = useAuth();
  return (
    <>
      <BackgroundWrapper>
        <TitleRecipe>{title}</TitleRecipe>
        <Description>{description}</Description>
        {isFavorite ? (
          <Button onClick={removeFromFavorite}>Remove from favorite recipes</Button>
        ) : (
          <Button onClick={addToFavorite}>Add to favorite recipes</Button>
        )}
        <TimeWrapper>
          <ClockWrapper>
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                <g clipPath="url(#clip0_264_756)">
                  <path
                    d="M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00002C12.8327 3.77836 10.221 1.16669 6.99935 1.16669C3.77769 1.16669 1.16602 3.77836 1.16602 7.00002C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z"
                    stroke="#23262A"
                  />
                  <path d="M7 3.5V7L9.33333 8.16667" stroke="#23262A" />
                </g>
                <defs>
                  <clipPath id="clip0_264_756">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </SvgIcon>
          </ClockWrapper>
          <Time datatype={isThemeToggle.toString()}> {time} min</Time>
        </TimeWrapper>
      </BackgroundWrapper>
    </>
  );
};

export default RecipePageHero;
