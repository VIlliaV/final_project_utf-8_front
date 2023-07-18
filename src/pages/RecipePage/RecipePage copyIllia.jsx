import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import axios from 'axios';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';

import { useSelector, useDispatch } from 'react-redux';

import { shoppingListAdd, shoppingListGet, shoppingListRemove } from '../../redux/shoppingList/shoppingListOperations';

import { toggleIngredient } from 'redux/shoppingList/shoppingListSlice';

function RecipePage() {
  const [recipe, setRecipe] = useState(null);

  const [ingredients, setIngredients] = useState([]);

  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const { recipeId } = useParams();

  const shoppingList = useSelector(state => state.shoppingList.shoppingListSliceState);

  useEffect(() => {
    dispatch(shoppingListGet());
  }, [dispatch]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axiosInstance.get(`/recipes/${recipeId}`);
        setRecipe(response.data);
        setIngredients(response.data.ingredients);
        if (response.data.isFavorite) {
          setIsFavorite(true);
        }
      } catch (error) {
        toast.error(`${error.message}`);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  const addToFavorite = async () => {
    try {
      const response = await axiosInstance.post(`/favorite`, { id: recipeId });

      console.log(response.data);
      setIsFavorite(true);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const removeFromFavorite = async () => {
    try {
      const response = await axiosInstance.patch(`/favorite`, { id: recipeId });

      console.log(response.data);
      setIsFavorite(false);
    } catch (error) {
      toast.error(`${error.message}`);
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
            <RecipeInngredientsList
              recipe={recipe}
              ingredients={ingredients}
              // shoppingList={shoppingList}
              // handleCheckboxChange={handleCheckboxChange}
              // recipeId={recipeId}
            />
            <RecipePreparation instructions={recipe.instructions} preview={recipe.preview} title={recipe.title} />
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default RecipePage;
