import { RecipeLink, RecipeName, RecipeCardWrapper, RecipeImg } from './CategoryRecipeCard.styled';
import { useAuth } from 'utils/hooks/useAuth';

export const CategoryRecipeCard = ({ itemId, imageUrl, imageAlt, title }) => {
  const { isThemeToggle } = useAuth();
  return (
    <RecipeCardWrapper>
      <RecipeLink to={`/recipe/${itemId}`}>
        <RecipeImg src={imageUrl} alt={imageAlt} loading="lazy"></RecipeImg>
        <RecipeName datatype={isThemeToggle.toString()}>{title}</RecipeName>
      </RecipeLink>
    </RecipeCardWrapper>
  );
};
