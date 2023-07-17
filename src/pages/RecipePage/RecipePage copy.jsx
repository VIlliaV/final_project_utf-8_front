import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';
import { store } from '../../redux/store';

import { useSelector, useDispatch } from 'react-redux';
import { shoppingListAdd, shoppingListRemove } from '../../redux/shoppingList/shoppingListOperations';
// import { nanoid } from 'nanoid';

const token = store.getState().auth.token;

// axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const { recipeId } = useParams();

  const shoppingList = useSelector(state => state.shoppingList.shoppingListSliceState);
  console.log(shoppingList);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/recipes/${recipeId}`);
        setRecipe(response.data);
        setIngredients(response.data.ingredients);
        if (response.data.isFavorite) {
          setIsFavorite(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  // axois.post('/favorite', {id:'id рецепту'} ); --ендпоінт для додавання рецептів до обраних
  // axois.patch('/favorite', {id:'id рецепту'}); --ендпоінт для видалення рецептів з обраних

  const addToFavorite = async () => {
    try {
      const response = await axios.post(`/favorite/{id:${recipeId}}`);
      console.log(response.data);
      setIsFavorite(true);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavorite = async () => {
    try {
      const response = await axios.patch(`/favorite/${recipeId}`);
      console.log(response.data);
      setIsFavorite(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (ingredientId, isChecked, uniqId) => {
    const ingredient = ingredients.find(ingredient => ingredient.id._id === ingredientId);
    if (isChecked) {
      if (ingredient) {
        const ingredientIsChecked = {
          _id: {
            _id: ingredient.id._id,
            desc: ingredient.id.desc,
            img: ingredient.id.img,
            name: ingredient.id.name,
          },
          measure: ingredient.measure,
          id: uniqId,
        };
        dispatch(shoppingListAdd(ingredientIsChecked));
      }
    } else {
      const ingredientToRemove = shoppingList.find(item => item.id === uniqId);

      console.log(ingredientToRemove);
      if (ingredientToRemove) {
        dispatch(shoppingListRemove(ingredientToRemove.id));
      }
    }
  };

  return (
    <div>
      {recipe && (
        <>
          <RecipePageHero
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            isFavorite={isFavorite}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
          />
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
