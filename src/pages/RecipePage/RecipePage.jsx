import React from 'react';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';

function RecipePage() {
    return (
        <>
            <RecipePageHero />
            <Wrapper>
                <RecipeInngredientsList />
                <RecipePreparation />
            </Wrapper>
        </>
    );
}

export default RecipePage;
