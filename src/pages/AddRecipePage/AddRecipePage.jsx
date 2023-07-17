import React from 'react';
import { useDispatch } from 'react-redux';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import { StyledBody } from './AddRecipePage.styled';
import HeadContainer from '../../components/HeadContainer/HeadContainer';
import FallowUs from '../../components/AddRecipeForm/FallowUs';
import Popular from '../../components/AddRecipeForm/PopularRecipe';
import ImageRecipe from '../../components/AddRecipeForm/ImageRecipe';
import RecipePreparation from '../../components/AddRecipeForm/RecipePreparation';
import BasicButtonGroup from '../../components/AddRecipeForm/buttonGroup';
import { getIngredients, getCategories } from '../../components/AddRecipeForm/redux/AddRecipreOperation';

export default function AddRecipePage() {
  const dispatch = useDispatch();
  dispatch(getIngredients());
  dispatch(getCategories());
  return (
    <HeadContainer>
      <MainPageTitle title="Add recipe" />

      <StyledBody>
        <div>
          <ImageRecipe />
          <BasicButtonGroup />
          <RecipePreparation />
        </div>
        <div>
          <FallowUs />
          <Popular />
        </div>
      </StyledBody>
    </HeadContainer>
  );
}
