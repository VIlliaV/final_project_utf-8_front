import { useDispatch, useSelector } from 'react-redux';
import { addPreparation, addIngredientRecipe } from './redux/AddRecipreOperation';
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
    const ListSendIngredient = document.querySelector('[name="detailIngrediantList"]');

    const ingredientName = ListSendIngredient.querySelectorAll('[name="ingredient"]');
    // const measureIngredient = ingredientName.querySelector['[name="measure"]'];
    // const measureIngr = document.querySelector('#measure');
    ingredientName.forEach(el => {
      console.log('el', el.childNodes[0]);
      console.log('el_child', el.childNodes[0].childNodes[1].value);
      allIngredients.find(option => option.name === el.value);
      ingredientToSend.push([el.childNodes[0].childNodes[1].value]);
      dispatch(addIngredientRecipe(ingredientToSend));
    });
    // console.log(ListSendIngredient);
    console.log(ingredientName);
    // console.log(measureIngredient);
    console.log(ingredientToSend);
    // console.log('ingredientToSend', ingredientToSend);
    // console.log('measureIngr', measureIngr);
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
