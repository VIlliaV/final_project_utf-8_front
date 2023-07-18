import { useDispatch, useSelector } from 'react-redux';
import { shoppingList, shoppingListError, shoppingListLoading } from 'redux/shoppingList/shoppingListSelectors';
import { SLList } from './IngredientsShoppingList.styled';
import Loader from 'components/Loader/Loader';

import { useEffect } from 'react';
import { shoppingListGet } from 'redux/shoppingList/shoppingListOperations';
import { IngredientRender } from './RenderItem';
import { nanoid } from 'nanoid';

function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const saveShoppingList = useSelector(shoppingList);
  console.log('IngredientsShoppingList >> saveShoppingList:', saveShoppingList);
  const loading = useSelector(shoppingListLoading);
  const error = useSelector(shoppingListError);

  useEffect(() => {
    dispatch(shoppingListGet());
  }, [dispatch]);

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
          return <IngredientRender ingredient={ingredient} key={nanoid()} />;
        })}
    </SLList>
  );
}

export default IngredientsShoppingList;
