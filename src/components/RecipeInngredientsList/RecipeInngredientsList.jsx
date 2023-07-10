
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
  Checkbox,
} from './RecipeInngredientsList.styled';

import dataIngredients from '../../back/ingredients.json';

const RecipeInngredientsList = ({ id, measure }) => {
  const ingredients = dataIngredients.slice(0, 8);
  console.log(ingredients);

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
            <ListItem>
              <Image src={ingredient.img} alt={ingredient.name} />
              <Name>{ingredient.name}</Name>
              <MeasureWrapper>
                <Measure>{measure}2 chopped</Measure>
              </MeasureWrapper>

              <Checkbox type="checkbox" />
            </ListItem>
          );
        })}
      </ListContainer>
    </>
  );
};


export default RecipeInngredientsList;
