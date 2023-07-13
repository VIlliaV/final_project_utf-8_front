import React from 'react';
import CSS from './AddReceipePage.module.css';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import { IngredientBtn, StyledBody } from './AddRecipePage.styled';
import HeadContainer from '../../components/HeadContainer/HeadContainer';
import FallowUs from '../../components/AddRecipeForm/FallowUs';
import Popular from '../../components/AddRecipeForm/PopularRecipe';
import ImageRecipe from '../../components/AddRecipeForm/ImageRecipe';
import RecipePreparation from '../../components/AddRecipeForm/RecipePreparation';

export default function AddRecipePage() {
  return (
    <HeadContainer>
      <div className={CSS.container}>
        <div className={CSS.test}>
          <MainPageTitle title="Add recipe" />
          <StyledBody>
            <ImageRecipe />
            <IngredientBtn />
            <RecipePreparation />

            {/* <div className={CSS.right_column}>
                            <FallowUs />
                            <Popular />
                        </div> */}
          </StyledBody>
        </div>
      </div>
    </HeadContainer>
  );
}
