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
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'utils/hooks/useAuth';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';
import { useEffect } from 'react';
import { Chekboks } from './chekboks';
import { shoppingListAdd, shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';
// import { useEffect, useState } from 'react';

const RecipeInngredientsList = ({ recipe, ingredients }) => {
  const { isThemeToggle } = useAuth(); //?
  const dispatch = useDispatch();
  const savedShoppingList = useSelector(shoppingList);
  const shoppingListf = useSelector(state => state.shoppingList.shoppingListSliceState);
  // const shoppingList = useSelector(state => state.shoppingList.shoppingListSliceState);

  const handleCheckboxChange = (ingredientId, isChecked, uniqId, recipeId) => {
    const currentIngredient = ingredients.find(ingredient => ingredient.id._id === ingredientId);
    // console.log('🚀 ~ ingredients:', ingredients[0].id._id);
    // console.log('🚀 ~ shoping:', shoppingList);
    if (currentIngredient) {
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
      // console.log('🚀 ~ addIngredient.uniqId:', addIngredient._id);
      // console.log('🚀 ~ addIngredient:', addIngredient);

      // dispatch(toggleIngredient(addIngredient)); // стор

      if (isChecked) {
        dispatch(shoppingListAdd(addIngredient)); // сервер
      } else {
        const ingredientToRemove = shoppingListf.find(({ _id }) => _id._id === addIngredient.id._id)?._id;
        console.log('🚀 ~ ingredientToRemove:', ingredientToRemove);

        dispatch(shoppingListRemove(ingredientToRemove._id));
        if (ingredientToRemove) {
          // dispatch(shoppingListRemove(ingredientToRemove.id));
        }
      }
    }
  };

  // // Функція для перевірки, чи є id в масиві shoppingList
  // const isIdInShoppingList = id => shoppingList.includes(id);

  // // Модифікація масиву ingredients для додавання властивості checked
  // const updatedIngredients = ingredients.map(ingredient => ({
  //   ...ingredient,
  //   checked: isIdInShoppingList(ingredient.id),
  // }));

  // const [shoppingList, setShoppingList] = useState(savedShoppingList);
  // savedShoppingList = useSelector(state => state.shoppingList.shoppingListSliceState);

  // // Функція для перевірки, чи інгредієнт належить до конкретного рецепту
  // const isInRecipe = ingredientId => {
  //   return recipe.ingredients.some(ingredient => ingredient.id === ingredientId);
  // };

  // // Функція для додавання або видалення інгредієнта з шопінг-листу
  // const handleCheckboxChange = ingredientId => {
  //   const updatedList = shoppingList.includes(ingredientId)
  //     ? shoppingList.filter(id => id !== ingredientId)
  //     : [...shoppingList, ingredientId];
  //   setShoppingList(updatedList);
  // };

  //^ отримали рецепт з бекенду як проп recipe
  const { _id: recipeId, ingredients: recipeIngredients } = recipe;
  // console.log('recipeIngredients:', recipeIngredients);

  // Отримую шопінг-лист з Redux Store
  // console.log('savedShoppingList:', savedShoppingList);

  // Функція для перевірки, чи інгредієнт належить до конкретного рецепту
  const isInRecipe = ingredientId => {
    return recipeIngredients.some(ingredient => ingredient.id._id === ingredientId);
  };

  // const isInShoppingList = ingredientId => {
  //   return savedShoppingList.some(item => {
  //     return item._id._id === ingredientId;
  //   });
  // };
  // console.log('🚀 ~ isInRecipe:', isInRecipe());
  // console.log('🚀 ~ isInShoppingList:', isInShoppingList());
  return (
    <>
      <ListBox>
        <FirstListTitle>Ingredients</FirstListTitle>
        <SecondListTitle>Quantity</SecondListTitle>
        <LastListTitle>Add to list</LastListTitle>
      </ListBox>
      <ListContainer>
        {recipeIngredients.map(ingredient => {
          let check = false;

          const foundObject = savedShoppingList.find(obj => obj._id._id === ingredient._id._id);

          // console.log('🚀 ~ foundObject:', foundObject);
          if (foundObject) {
            // console.log('object :>> ', 'object');
            check = true;
          }
          // console.log('🚀 ~ check:', check);
          return (
            <Chekboks
              handleCheckboxChange={handleCheckboxChange}
              recipeId={recipeId}
              ingredient={ingredient}
              savedShoppingList={savedShoppingList}
              check={check}
            />
          );
        })}
      </ListContainer>
    </>
  );
};

export default RecipeInngredientsList;
