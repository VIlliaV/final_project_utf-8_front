import React from 'react';
import { StyledH3, StyledSection3, StyledInputRecipe } from './AddRecipeForm.styled';

export default function RecipePreparation() {
  return (
    <StyledSection3>
      <StyledH3>Recipe Preparation</StyledH3>
      <StyledInputRecipe placeholder="Enter Recipe" />
      <div>
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 70" fill="none">
            <path
              d="M0 23.3333C0 10.4467 10.4467 0 23.3333 0H114.333C140.107 0 161 20.8934 161 46.6667C161 59.5533 150.553 70 137.667 70H46.6667C20.8934 70 0 49.1066 0 23.3333Z"
              fill="#22252A"
            />
          </svg>
          <span>Add</span>
        </button>
      </div>
    </StyledSection3>
  );
}
