import { useSelector } from 'react-redux';

export default function IngredientsList({ counter, counterItem, id, ingredientList, el }) {
  const ingredients = useSelector(AllIngredients);

  console.log('el', el);
  console.log('counterItem', counterItem);

  console.log('ingredientList', ingredientList);
  return <></>;
}
