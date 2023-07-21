import { useDispatch } from 'react-redux';

import { SLList } from './IngredientsShoppingList.styled';
import { shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';

import { IngredientRender } from './IngredientRender';

function IngredientsShoppingList({ currentViewport, saveShoppingList }) {
  const dispatch = useDispatch();

  const handleRemoveIngredient = uniqId => {
    dispatch(shoppingListRemove(uniqId));
  };

  return (
    <SLList>
      {
        // saveShoppingList.length > 0 &&
        saveShoppingList.map(ingredient => {
          return (
            <IngredientRender
              ingredient={ingredient}
              key={ingredient.uniqId}
              onRemove={() => handleRemoveIngredient(ingredient.uniqId)}
              currentViewport={currentViewport}
            />
          );
        })
      }
    </SLList>
  );
}

export default IngredientsShoppingList;
