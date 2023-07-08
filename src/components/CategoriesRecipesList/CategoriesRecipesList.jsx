import { CategoryRecipeCard } from '../CategoryRecipeCard/CategoryRecipeCard';
import { useParams } from 'react-router-dom';

const recipes = require('../../back/recipes.json');

// console.log(recipes);

export const CategoriesRecipesList = () => {
  const currentCategory = useParams().categoryName.charAt(0).toUpperCase() + useParams().categoryName.slice(1);
  //   console.log(currentCategory);
  const filteredRecipes = recipes.filter(el => el.category === currentCategory);
  //   console.log(filteredRecipes);
  return (
    <ul>
      {filteredRecipes.map(({ _id: { $oid: id }, title, thumb }) => {
        return <CategoryRecipeCard key={id} itemId={id} imageUrl={thumb} imageAlt={title} title={title}></CategoryRecipeCard>;
      })}
    </ul>
  );
};
