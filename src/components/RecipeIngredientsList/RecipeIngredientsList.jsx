import { ListBox, FirstListTitle, SecondListTitle, LastListTitle, ListContainer } from './RecipeIngredientsList.styled';

import { useSelector } from 'react-redux';

import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';
import { RecipeCheckbox } from './RecipeCheckbox';
import { useCallback, useEffect, useState } from 'react';

const RecipeIngredientsList = ({ recipe, handleCheckboxChange }) => {
  const { _id: recipeId, ingredients: recipeIngredients } = recipe;
  const savedShoppingList = useSelector(shoppingList);

  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const isInRecipe = useCallback(
    ingredientId => {
      return recipeIngredients.some(ingredient => ingredient.id._id === ingredientId);
    },
    [recipeIngredients]
  );

  const isInShoppingList = useCallback(
    ingredientId => {
      return savedShoppingList.some(item => {
        return item.id?._id === ingredientId;
      });
    },
    [savedShoppingList]
  );

  useEffect(() => {
    const updatedCheckedIngredients = recipeIngredients.map(
      ingredient => isInRecipe(ingredient.id._id) && isInShoppingList(ingredient.id._id)
    );

    setCheckedIngredients(updatedCheckedIngredients);
  }, [recipeIngredients, isInRecipe, isInShoppingList]);

  return (
    <>
      <ListBox>
        <FirstListTitle>Ingredients</FirstListTitle>
        <SecondListTitle>Quantity</SecondListTitle>
        <LastListTitle>Add to list</LastListTitle>
      </ListBox>
      <ListContainer>
        {recipeIngredients.map((ingredient, index) => {
          const isChecked = checkedIngredients[index] !== undefined ? checkedIngredients[index] : false;

          return (
            <RecipeCheckbox
              key={`${recipeId}_${ingredient.id._id}`}
              handleCheckboxChange={handleCheckboxChange}
              recipeId={recipeId}
              ingredient={ingredient}
              savedShoppingList={savedShoppingList}
              isChecked={isChecked}
            />
          );
        })}
      </ListContainer>
    </>
  );
};

export default RecipeIngredientsList;
