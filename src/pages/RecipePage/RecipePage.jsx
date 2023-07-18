import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeadContainer from 'components/HeadContainer/HeadContainer';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from '../../components/RecipeInngredientsList/RecipeIngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';
import { useSelector, useDispatch } from 'react-redux';

import { shoppingListAdd, shoppingListGet, shoppingListRemove } from '../../redux/shoppingList/shoppingListOperations';

// import { toggleIngredient } from 'redux/shoppingList/shoppingListSlice';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  // console.log('RecipePage >> recipe:', recipe);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();
  const { recipeId } = useParams();

  const savedShoppingList = useSelector(shoppingList);
  console.log('RecipePage >> savedShoppingList:', savedShoppingList);

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
    // console.log('handleCheckboxChange >> isChecked:', isChecked);
    const currentIngredient = ingredients.find(ingredient => ingredient.id._id === ingredientId);
    // console.log('handleCheckboxChange >> currentIngredient:', currentIngredient);

    // для рендеру у shoppingList page треба мати всі поля:
    if (currentIngredient) {
      const addIngredient = {
        id: {
          _id: ingredientId,
          desc: currentIngredient.id.desc,
          img: currentIngredient.id.img,
          name: currentIngredient.id.name,
        },
        measure: currentIngredient.measure,
        uniqId,
        recipeId,
      };

      // dispatch(toggleIngredient(addIngredient)); // стор

      if (isChecked) {
        dispatch(shoppingListAdd(addIngredient)); // сервер
      } else {
        // const ingredientToRemove = savedShoppingList.find(item => {
        //   console.log('ingredientToRemove >> savedShoppingList:', savedShoppingList);

        //   return item._id === uniqId;
        // });

        // if (ingredientToRemove) {
        dispatch(shoppingListRemove(uniqId));
        // }
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
              <RecipeIngredientsList
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
