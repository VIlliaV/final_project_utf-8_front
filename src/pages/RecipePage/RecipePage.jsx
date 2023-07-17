import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeadContainer from 'components/HeadContainer/HeadContainer';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';

import { useSelector, useDispatch } from 'react-redux';

// const token = store.getState().auth.token;

// axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

import { shoppingListAdd, shoppingListGet, shoppingListRemove } from '../../redux/shoppingList/shoppingListOperations';

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  // console.log('RecipePage >> recipe:', recipe);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const { recipeId } = useParams();

  console.log(recipeId);

  const shoppingList = useSelector(state => state.shoppingList.shoppingListSliceState);
  // console.log('RecipePage >> shoppingList:', shoppingList);

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

  const handleCheckboxChange = (ingredientId, isChecked, uniqId, recipeId) => {
    const currentIngredient = ingredients.find(ingredient => ingredient.id._id === ingredientId);

    if (currentIngredient) {
      if (isChecked) {
        const addIngredient = {
          id: {
            _id: ingredientId,
            desc: currentIngredient.id.desc,
            img: currentIngredient.id.img,
            name: currentIngredient.id.name,
          },
          measure: currentIngredient.measure,
          _id: uniqId,
          recipeId,
        };

        dispatch(shoppingListAdd(addIngredient));
      } else {
        // console.log('handleCheckboxChange >> shoppingList:', shoppingList);
        const ingredientToRemove = shoppingList.find(item => item._id === uniqId);
        // console.log('handleCheckboxChange >> ingredientToRemove:', ingredientToRemove);
        dispatch(shoppingListRemove(ingredientToRemove.id));

        if (ingredientToRemove) {
          dispatch(shoppingListRemove(ingredientToRemove.id));
        }
      }
    }
  };

  return (
    <div>
      {recipe && (
        <>
          <HeadContainer>
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
                handleCheckboxChange={handleCheckboxChange}
                recipeId={recipeId}
              />
              <RecipePreparation instructions={recipe.instructions} preview={recipe.preview} title={recipe.title} />
            </Wrapper>
          </HeadContainer>
        </>
      )}
    </div>
  );
}

export default RecipePage;
