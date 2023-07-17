import { useDispatch, useSelector } from 'react-redux';
import { addPreparation } from './redux/AddRecipreOperation';
import { StyledH3, StyledSection3, StyledInputRecipe } from './AddRecipeForm.styled';
import { AllIngredients } from './redux/AddRecipeSelector';

export default function RecipePreparation() {
  const ingredientToSend = [];
  const dispatch = useDispatch();
  const handleChangePreparation = event => {
    const recipePreparation = event.currentTarget.value;
    dispatch(addPreparation(recipePreparation));
  };
  const allIngredients = useSelector(AllIngredients);

  const aproove = () => {
    const btnApprove = document.querySelectorAll('#ingredientsName');
    const searchIngredient = btnApprove.forEach(el => {
      ingredientToSend.push(allIngredients.find(option => option.name === el.value));
    });
    console.log('ing', searchIngredient);
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
