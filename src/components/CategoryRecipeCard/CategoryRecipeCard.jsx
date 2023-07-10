import { RecipeLink, RecipeName, RecipeCardWrapper, RecipeImg } from './CategoryRecipeCard.styled';

export const CategoryRecipeCard = ({ itemId, imageUrl, imageAlt, title }) => {
    return (
        <RecipeCardWrapper>
            <RecipeLink to={`/recipe/${itemId}`}>
                <RecipeImg src={imageUrl} alt={imageAlt} loading="lazy"></RecipeImg>
                <RecipeName>{title}</RecipeName>
            </RecipeLink>
        </RecipeCardWrapper>
    );
};
