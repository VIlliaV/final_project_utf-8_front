import { StyledH3, StyledSection3, StyledInputRecipe } from './RecipePreparationFields.styled';

export default function RecipePreparationFields({ setPreparation }) {
  const handleChangePreparation = event => {
    const recipePreparation = event.currentTarget.value;
    setPreparation(recipePreparation);
  };

  return (
    <StyledSection3>
      <StyledH3>Recipe Preparation</StyledH3>
      <StyledInputRecipe onChange={handleChangePreparation} placeholder="Enter Recipe" />
    </StyledSection3>
  );
}
