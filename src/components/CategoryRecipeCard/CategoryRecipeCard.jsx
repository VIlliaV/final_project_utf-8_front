import { RecipeLink, RecipeName, RecipeCardWrapper, RecipeImg } from './CategoryRecipeCard.styled';
import { useAuth } from 'utils/hooks/useAuth';

import noImg from './images/no-image.png';

export const CategoryRecipeCard = ({ itemId, imageUrl, imageAlt, title }) => {
  const { isThemeToggle } = useAuth();

  const imageSrc = imageUrl ? imageUrl : noImg;

  return (
    <RecipeCardWrapper>
      <RecipeLink to={`/recipe/${itemId}`}>
        <RecipeImg src={imageSrc} alt={imageAlt} loading="lazy"></RecipeImg>
        <RecipeName datatype={isThemeToggle.toString()}>{title}</RecipeName>
      </RecipeLink>
    </RecipeCardWrapper>
  );
};
