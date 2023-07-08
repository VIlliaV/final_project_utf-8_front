export const CategoryRecipeCard = ({ imageUrl, imageAtl, title }) => {
  return (
    <div>
      <img src={imageUrl} alt={imageAtl}></img>
      <a href="123">{title}</a>
    </div>
  );
};
