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
    recipeId => {
      return savedShoppingList.filter(ingredient => {
        return ingredient.recipeId === recipeId;
      });
    },
    [savedShoppingList]
  );

  useEffect(() => {
    const filteredIngredients = isInRecipe(recipeId);

    const checkedIngredients = recipeIngredients.map(ingredient => {
      const foundIngredient = filteredIngredients.find(
        filteredIngredient => filteredIngredient.id._id === ingredient.id._id
      );
      return foundIngredient ? true : false;
    });

    setCheckedIngredients(checkedIngredients);
  }, [isInRecipe, recipeId, recipeIngredients]);

  return (
    <>
      <ListBox>
        <FirstListTitle>Ingredients</FirstListTitle>
        <SecondListTitle>Quantity</SecondListTitle>
        <LastListTitle>Add to list</LastListTitle>
      </ListBox>
      <ListContainer>
        {recipeIngredients.map((ingredient, index) => {
          const isChecked = checkedIngredients[index] || false;
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
