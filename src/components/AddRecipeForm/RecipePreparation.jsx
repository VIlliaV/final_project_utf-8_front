import React from 'react';
import { StyledH3, StyledSection3, StyledInputRecipe } from './AddRecipeForm.styled';

export default function RecipePreparation() {
  return (
    <StyledSection3>
      <StyledH3>Recipe Preparation</StyledH3>
      <StyledInputRecipe placeholder="Enter Recipe" />
      <div>
        <button type="button">
          <span>Add</span>
        </button>
      </div>
    </StyledSection3>
  );
}
