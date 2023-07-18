import { useDispatch, useSelector } from 'react-redux';
import { shoppingList, shoppingListError, shoppingListLoading } from 'redux/shoppingList/shoppingListSelectors';
import { SLList } from './IngredientsShoppingList.styled';
import Loader from 'components/Loader/Loader';
import { shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';
import { useEffect } from 'react';
import { shoppingListGet } from 'redux/shoppingList/shoppingListOperations';
import { IngredientRender } from './RenderItem';

function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const saveShoppingList = useSelector(shoppingList);
  const loading = useSelector(shoppingListLoading);
  const error = useSelector(shoppingListError);

  useEffect(() => {
    if (saveShoppingList.length === 0) {
      dispatch(shoppingListGet());
    }
  }, [dispatch, saveShoppingList.length]);

  const handleRemoveIngredient = uniqId => {
    dispatch(shoppingListRemove(uniqId));
  };

  if (loading) {
    return (
      <div>
        <Loader>Loading... </Loader>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
