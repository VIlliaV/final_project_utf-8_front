import { Link } from 'react-router-dom';

export const CategoryRecipeCard = ({ itemId, imageUrl, imageAlt, title }) => {
  return (
    <div>
      <Link to={`/recipe/${itemId}`}>
        <img src={imageUrl} alt={imageAlt}></img>
        {title}
      </Link>
    </div>
  );
};
