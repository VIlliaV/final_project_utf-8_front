import { useDispatch, useSelector } from 'react-redux';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';
import {
  SLItem,
  SlItemAmount,
  SLItemImage,
  SLItemImageName,
  SLItemRemove,
  SLList,
} from './IngredientsShoppingList.styled';

import { GrClose } from 'react-icons/gr';
// import testShoppingList from 'back/testShoppingList.json';
import { useEffect } from 'react';
import { shoppingListGet, shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';
import { nanoid } from 'nanoid';

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

  // first render
  const shoppingListSliceState = useSelector(shoppingList);
  console.log('IngredientsShoppingList >> shoppingListSliceState:', shoppingListSliceState);

  //   if (state.shoppingList.shoppingListSliceState) {
  //     shoppingListGetLocal();
  //   }
  // console.log('shoppingListGet >> state:', state.shoppingList.shoppingListSliceState);

  const dispatch = useDispatch();
  useEffect(() => {
    // if (shoppingListSliceState.length > 0) {
    //   return true;
    // }

    dispatch(shoppingListGet());
  }, [dispatch]);

  // const handleRemoveItem = id => {
  //   console.log('click ID :>> ', id);
  //   // фільтр повертає новий масив, тому return. Якщо є мутація, то без return
  //   return shoppingListSliceState.filter(ingredient => ingredient.id !== id); //? action.payload.id
  // };

  // markup shopping list
  return (
    <SLList>
      {shoppingListSliceState.length > 0 &&
        shoppingListSliceState.map(({ _id, name, img, measure }) => {
          return (
            <SLItem key={`${_id}_${nanoid()}`}>
              <SLItemImage>
                <picture>
                  {/* <source srcset={img} media="(min-width: 1200px)" />
                    <source srcset={img} media="(min-width: 768px)" />
                    <source srcset={img} media="(max-width: 767px)" /> */}
                  <img src={img} alt={name} />
                </picture>
              </SLItemImage>

              <SLItemImageName>{name}</SLItemImageName>

              <SlItemAmount>{measure}</SlItemAmount>

              <SLItemRemove
                type="button"
                data-menu-close=""
                onClick={() => {
                  // handleRemoveItem(id); // remove from store
                  dispatch(shoppingListRemove(_id)); // remove from DB and repeat get from DB
                }}
              >
                <GrClose />
              </SLItemRemove>
            </SLItem>
          );
        })}
    </SLList>
  );
}

export default IngredientsShoppingList;
