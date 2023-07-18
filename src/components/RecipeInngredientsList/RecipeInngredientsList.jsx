import {
  ListBox,
  FirstListTitle,
  SecondListTitle,
  LastListTitle,
  ListContainer,
  ListItem,
  Image,
  Name,
  MeasureWrapper,
  Measure,
  CheckboxInput,
} from './RecipeInngredientsList.styled';
import SvgIcon from '@mui/material/SvgIcon';
import { useSelector } from 'react-redux';
import { useAuth } from 'utils/hooks/useAuth';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';
import { RecipeCheckbox } from './RecipeCheckbox';
// import { useEffect, useState } from 'react';

const RecipeInngredientsList = ({ recipe, handleCheckboxChange }) => {
  // const { isThemeToggle } = useAuth(); //?

  //^ отримали рецепт з бекенду як проп recipe
  const { _id: recipeId, ingredients: recipeIngredients } = recipe;
  // console.log('recipeIngredients:', recipeIngredients);

  const savedShoppingList = useSelector(shoppingList); // Отримую шопінг-лист з Redux Store
  // console.log('RecipeInngredientsList >> savedShoppingList:', savedShoppingList);

  // Функція для перевірки, чи інгредієнт належить до конкретного рецепту
  const isInRecipe = ingredientId => {
    return recipeIngredients.some(ingredient => ingredient.id._id === ingredientId);
  };

  const isInShoppingList = ingredientId => {
    return savedShoppingList.some(item => {
      return item?._id?._id === ingredientId;
    });
  };

  return (
    <>
      <ListBox>
        <FirstListTitle>Ingredients</FirstListTitle>
        <SecondListTitle>Quantity</SecondListTitle>
        <LastListTitle>Add to list</LastListTitle>
      </ListBox>
      <ListContainer>
        {recipeIngredients.map(ingredient => {
          const isChecked = isInRecipe(ingredient.id._id) && isInShoppingList(ingredient.id._id);

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

export default RecipeInngredientsList;
