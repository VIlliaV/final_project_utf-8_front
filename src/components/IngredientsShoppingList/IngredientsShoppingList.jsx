import { useDispatch, useSelector } from 'react-redux';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';
import { SLList } from './IngredientsShoppingList.styled';
import { shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';
import { useEffect } from 'react';
import { shoppingListGet } from 'redux/shoppingList/shoppingListOperations';
import { IngredientRender } from './IngredientRender';

function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const saveShoppingList = useSelector(shoppingList);

  useEffect(() => {
    if (saveShoppingList.length === 0) {
      dispatch(shoppingListGet());
    }
  }, [dispatch, saveShoppingList.length]);

  const handleRemoveIngredient = uniqId => {
    dispatch(shoppingListRemove(uniqId));
  };

  return (
    <SLList>
      {saveShoppingList.length > 0 &&
        saveShoppingList.map(ingredient => {
          return (
            <IngredientRender
              ingredient={ingredient}
              key={ingredient.uniqId}
              onRemove={() => handleRemoveIngredient(ingredient.uniqId)}
            />
          );
        })}
    </SLList>
  );
}

export default IngredientsShoppingList;
