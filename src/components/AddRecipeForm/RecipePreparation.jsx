import { useDispatch, useSelector } from 'react-redux';
import { addPreparation, addIngredientRecipe } from './redux/AddRecipreOperation';
import { StyledH3, StyledSection3, StyledInputRecipe } from './AddRecipeForm.styled';
import { AllIngredients } from './redux/AddRecipeSelector';

export default function RecipePreparation() {
  let search = [];
  const ingredientToSend = [];
  const dispatch = useDispatch();
  const handleChangePreparation = event => {
    const recipePreparation = event.currentTarget.value;
    dispatch(addPreparation(recipePreparation));
  };
  const ingredients = useSelector(AllIngredients);

  const approve = searchName => {
    const ListSendIngredient = document.querySelector('[name="detailIngrediantList"]');
    const ingredient = ListSendIngredient.querySelectorAll('[name="ingredient"]');
    const ingredientName = ListSendIngredient.querySelector('#ingredientsName');
    // const measureIngr = document.querySelector('#measure');
    ingredient.forEach(el => {
      search = ingredients.find(option => option.name === searchName);

      ingredientToSend.push([{ id: search._id, name: searchName, measure: el.childNodes[0].childNodes[1].value }]);
      // dispatch(addIngredientRecipe(ingredientToSend));
      console.log(ingredientToSend);
    });
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

      <button type="submit" onClick={approve}>
        <span>Proverka</span>
      </button>
    </StyledSection3>
  );
}
