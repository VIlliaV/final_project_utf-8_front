import React from 'react';
import { TitleRecipe, Description, Button, Time } from './RecipePageHero.styled';

const RecipePageHero = ({ title, description, time }) => {
  return (
    <>
      <TitleRecipe>{title}Salmon Avocado Salad</TitleRecipe>
      <Description>
        {description}
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado,
        tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.
      </Description>
      <Button>Add to favorite recipes</Button>
      <Time>{time} min</Time>
    </>
  );
};

export default RecipePageHero;
