import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';
import { store } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { addIngredient, removeIngredient } from '../../redux/shoppingList/shoppingListSlice';

const token = store.getState().auth.token;

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// axois.get(`/recipes/${id}`); --отримання одного рецепта по id
// axois.get('/ingredients/list'); --отримання списку інгрієнтів
// axios.post("/ingredients/list",{recipeId:'id-рецепта'})

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  console.log(ingredients);
  const dispatch = useDispatch();

  const { recipeId } = useParams();
  const shoppingList = useSelector(state => state.shoppingList.shoppingListIngredients);
  console.log(shoppingList);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/recipes/${recipeId}`);
        setRecipe(response.data);
        setIngredients(response.data.ingredients);
      } catch (error) {
        console.error(error);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  const handleCheckboxChange = (ingredientId, isChecked) => {
    // console.log(ingredientId);
    // console.log(isChecked);
    if (isChecked) {
      const ingredient = ingredients.find(ingredient => ingredient.id._id === ingredientId);
      if (ingredient) {
        // console.log(ingredient);
        // console.log(ingredient.id);
        dispatch(addIngredient(ingredient.id));
      }
    } else {
      dispatch(removeIngredient(ingredientId));
    }
  };

  return (
    <div>
      {recipe && (
        <>
          <RecipePageHero title={recipe.title} description={recipe.description} time={recipe.time} />
          <Wrapper>
            <RecipeInngredientsList ingredients={ingredients} handleCheckboxChange={handleCheckboxChange} />
            <RecipePreparation instructions={recipe.instructions} preview={recipe.preview} title={recipe.title} />
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default RecipePage;
