import React from 'react';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';

function RecipePage() {
  return (
    <>
      <RecipePageHero />
      <RecipeInngredientsList />
      <RecipePreparation />
    </>
  );
}

export default RecipePage;
