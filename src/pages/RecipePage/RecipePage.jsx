import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeadContainer from 'components/HeadContainer/HeadContainer';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingListAdd, shoppingListGet, shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';
import { shoppingList, shoppingListLoading } from 'redux/shoppingList/shoppingListSelectors';

function RecipePage() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const loading = useSelector(shoppingListLoading);
  const savedShoppingList = useSelector(shoppingList);

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
      await axiosInstance.post(`/favorite`, { id: recipeId });
      setIsFavorite(true);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const removeFromFavorite = async () => {
    try {
      await axiosInstance.patch(`/favorite`, { id: recipeId });
      setIsFavorite(false);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  const handleCheckboxChange = async (ingredientId, isChecked, uniqId, recipeId) => {
    if (loading) {
      return;
    }

    const currentIngredient = ingredients.find(ingredient => ingredient.id._id === ingredientId);

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

      const isElementAlreadyExist = savedShoppingList.find(ingredient => {
        return ingredient.uniqId === uniqId;
      });

      if (isChecked) {
        if (!isElementAlreadyExist) {
          dispatch(shoppingListAdd(addIngredient));
        }
      } else {
        dispatch(shoppingListRemove(uniqId));
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
          <HeadContainer>
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
