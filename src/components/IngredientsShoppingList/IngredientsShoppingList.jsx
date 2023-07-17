import { useDispatch, useSelector } from 'react-redux';
import { shoppingList, shoppingListError, shoppingListLoading } from 'redux/shoppingList/shoppingListSelectors';
import {
  SLItem,
  SlItemAmount,
  SLItemImage,
  SLItemImageName,
  SLItemRemove,
  SLList,
} from './IngredientsShoppingList.styled';

import Loader from 'components/Loader/Loader';

import { VscClose } from 'react-icons/vsc';

// import testShoppingList from 'back/testShoppingList.json';
import { useEffect } from 'react';
import { shoppingListGet, shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';

import styled from 'styled-components';

const StyledVscClose = styled(VscClose)`
  fill: #333333;
`;

// перемикання тем - посилання на кнопку перемикання за допомогою useRef():
// const buttonRef = useRef(null)
// ...
// return (
//   <button type='button' onClick={ stop} ref={ buttonRef}> зупинити таймер </button>
// )

// // асинхр - робимо операцію:
// const fetchBooks = () => {
//   async (dispatch) => {
//     dispatch(booksActions.fetchBooksRequest());
//     try {
//       const books = await booksAPI.fetchBooks()
//       dispatch(booksActions.fetchBooksSuccsess());
//     } catch (error) {
//       dispatch(booksActions.fetchBooksError());
//     }
//   }
// }
// сінхр - простий діспатч

function IngredientsShoppingList() {
  // const dispatch = useDispatch();

  // Перший рендер - запит за даними на стор або сервер
  // useEffect(() => {
  //   return () => {}; // ф-я запиту на стор, або сервер
  // }, []);

  // useEffect(() => {
  //   return () => {}; // ф-я видалення інгредієнта з серверу і стору
  // }, ['залежності']);

  // // Отримання даних
  // const getInput = () => {
  //   dispatch(shoppingListGet());
  // };

  const dispatch = useDispatch();

  // first render
  const shoppingListSliceState = useSelector(shoppingList);
  // console.log('IngredientsShoppingList >> shoppingListSliceState:', shoppingListSliceState);
  const loading = useSelector(shoppingListLoading);
  const error = useSelector(shoppingListError);
  // shoppingListGetLocal();
  // console.log('IngredientsShoppingList >> shoppingListGetLocal();:', shoppingListGetLocal(shoppingListSliceState));

  useEffect(() => {
    dispatch(shoppingListGet());
  }, [dispatch]);

  // const handleAddData = () => {
  //   const newData = {};
  //   dispatch(shoppingListAdd(newData));
  // };

  // const handleRemoveItem = id => {
  //   console.log('click ID :>> ', id);
  //   // фільтр повертає новий масив, тому return. Якщо є мутація, то без return
  //   return shoppingListSliceState.filter(ingredient => ingredient.id !== id); //? action.payload.id
  // };

  // markup shopping list

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
      {shoppingListSliceState.length > 0 &&
        shoppingListSliceState.map(({ id, measure, _id }) => {
          return (
            <SLItem key={id}>
              <SLItemImage>
                <picture>
                  {/* <source srcset={img} media="(min-width: 1200px)" />
                    <source srcset={img} media="(min-width: 768px)" />
                    <source srcset={img} media="(max-width: 767px)" /> */}
                  <img src={_id.img} alt={_id.name} />
                </picture>
              </SLItemImage>

              <SLItemImageName>{_id.name}</SLItemImageName>

              <SlItemAmount>{measure}</SlItemAmount>

              <SLItemRemove
                type="button"
                data-menu-close=""
                onClick={() => {
                  // handleRemoveItem(id); // remove from store
                  dispatch(shoppingListRemove(id)); // remove from DB and repeat get from DB
                }}
              >
                <StyledVscClose />
              </SLItemRemove>
            </SLItem>
          );
        })}
    </SLList>
  );
}

export default IngredientsShoppingList;
