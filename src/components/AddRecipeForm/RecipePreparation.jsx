import { useDispatch, useSelector } from 'react-redux';
import { addPreparation } from './redux/AddRecipreOperation';
import { StyledH3, StyledSection3, StyledInputRecipe } from './AddRecipeForm.styled';
import { Ingredients } from './redux/AddRecipeSelector';

export default function RecipePreparation() {
  const dispatch = useDispatch();
  const handleChangePreparation = event => {
    const recipePreparation = event.currentTarget.value;
    dispatch(addPreparation(recipePreparation));
  };
  const ing = useSelector(Ingredients);

  const aproove = () => {
    const btnApprove = document.querySelectorAll('#ingredientsName');
    btnApprove.forEach(el => console.log(el.value));

    console.log('ing', ing);
  };

  return (
    <StyledSection3>
      <StyledH3>Recipe Preparation</StyledH3>
      <StyledInputRecipe onChange={handleChangePreparation} placeholder="Enter Recipe" />
      <div>
        <button type="button">
          <span>Add</span>
        </button>
      </div>

      <button type="submit" onClick={aproove}>
        <span>Proverka</span>
      </button>
    </StyledSection3>
  );
}
