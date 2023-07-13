import React from 'react';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import { StyledBody } from './AddRecipePage.styled';
import HeadContainer from '../../components/HeadContainer/HeadContainer';
import FallowUs from '../../components/AddRecipeForm/FallowUs';
import Popular from '../../components/AddRecipeForm/PopularRecipe';
import ImageRecipe from '../../components/AddRecipeForm/ImageRecipe';
import RecipePreparation from '../../components/AddRecipeForm/RecipePreparation';
import BasicButtonGroup from '../../components/AddRecipeForm/buttonGroup';

export default function AddRecipePage() {
  return (
    <HeadContainer>
          <MainPageTitle title="Add recipe" />
          <StyledBody>
            <ImageRecipe />
            <BasicButtonGroup />
            <RecipePreparation />
            <div>
              <FallowUs />
              <Popular />
            </div>
          </StyledBody>
    </HeadContainer>
  );
}
