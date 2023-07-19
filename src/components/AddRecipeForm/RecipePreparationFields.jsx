import { useDispatch, useSelector } from 'react-redux';
import { addPreparation, addRecipe } from './redux/AddRecipreOperation';
import { StyledH3, StyledSection3, StyledInputRecipe } from './AddRecipeForm.styled';
import { Title, Category, Documents, Description, Time, Instructions } from './redux/AddRecipeSelector';

export default function RecipePreparationFields({ setPreparation }) {
  const dispatch = useDispatch();

  // const recipeAdd = {
  //   Documents: documents,
  //   title: title,
  //   category: category,
  //   instructions:
  //     'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
  //   description: description,
  //   time: time,
  //   ingredients: [
  //     {
  //       id: '640c2dd963a319ea671e3724',
  //       measure: '200 g',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e3663',
  //       measure: '250 g',
  //     },
  //   ],
  // };

  const handleChangePreparation = event => {
    const recipePreparation = event.currentTarget.value;
    setPreparation(recipePreparation);
  };

  return (
    <StyledSection3>
      <StyledH3>Recipe Preparation</StyledH3>
      <StyledInputRecipe onChange={handleChangePreparation} placeholder="Enter Recipe" />
    </StyledSection3>
  );
}
