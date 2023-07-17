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
// import { useEffect, useState } from 'react';

const RecipeInngredientsList = ({ recipe, ingredients, handleCheckboxChange, recipeId }) => {
  const { isThemeToggle } = useAuth(); //?

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

  return (
    <>
      <ListBox>
        <FirstListTitle>Ingredients</FirstListTitle>
        <SecondListTitle>Quantity</SecondListTitle>
        <LastListTitle>Add to list</LastListTitle>
      </ListBox>
      <ListContainer>
        {ingredients.map(ingredient => {
          return (
            <ListItem key={`${recipeId}_${ingredient.id._id}`} datatype={isThemeToggle.toString()}>
              <Image src={ingredient.id.img} alt={ingredient.id.name} />
              <Name datatype={isThemeToggle.toString()}>{ingredient.id.name}</Name>
              <MeasureWrapper>
                <Measure>{ingredient.measure} </Measure>
              </MeasureWrapper>

              <CheckboxInput
                // checked={isInRecipe(recipe.id, ingredient.id) && shoppingList.includes(ingredient.id)}
                // checked={shoppingList.includes(ingredient.id)}
                onChange={event =>
                  handleCheckboxChange(
                    ingredient.id._id,
                    event.target.checked,
                    `${recipeId}_${ingredient.id._id}`,
                    recipeId
                  )
                }
                icon={
                  <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                      <rect x="1" y="1" width="18" height="18" rx="4" stroke="#7E7E7E" strokeOpacity="0.5" />
                    </svg>
                  </SvgIcon>
                }
                checkedIcon={
                  <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                      <rect x="1" y="1" width="18" height="18" rx="4" stroke="#7E7E7E" strokeOpacity="0.5" />
                      <path
                        d="M12.7738 6.01229C13.0447 5.61264 13.5884 5.5083 13.988 5.77926C14.3877 6.05021 14.492 6.59384 14.2211 6.9935L9.47925 13.9876C9.13243 14.4992 8.37879 14.4992 8.03197 13.9876L5.77962 10.6654C5.50867 10.2658 5.613 9.72215 6.01266 9.45119C6.41231 9.18024 6.95595 9.28457 7.2269 9.68423L8.75561 11.9391L12.7738 6.01229Z"
                        fill="#8BAA36"
                      />
                    </svg>
                  </SvgIcon>
                }
              />
            </ListItem>
          );
        })}
      </ListContainer>
    </>
  );
};

export default RecipeInngredientsList;
