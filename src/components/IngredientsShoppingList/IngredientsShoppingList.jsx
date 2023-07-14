import { useSelector } from 'react-redux';
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
import testShoppingList from 'back/testShoppingList.json';
import { useEffect } from 'react';

// перемикання тем - посилання на кнопку перемикання за допомогою useRef():
// const buttonRef = useRef(null)
// ...
// return (
//   <button type='button' onClick={ stop} ref={ buttonRef}> зупинити таймер </button>
// )

function IngredientsShoppingList() {
  // const dispatch = useDispatch();
  let shoppingListStateIngredients = useSelector(shoppingList);

  // Перший рендер - запит за даними на стор або сервер
  useEffect(() => {
    return () => {}; // ф-я запиту на стор, або сервер
  }, []);

  useEffect(() => {
    return () => {}; // ф-я видалення інгредієнта з серверу і стору
  }, ['залежності']);

  // // Отримання даних
  // const getInput = () => {
  //   dispatch(shoppingListGet());
  // };

  const handleRemoveItem = id => {
    console.log('click ID :>> ', id);
    // testShoppingList = testShoppingList.filter(value => value.id !== id); // action.payload.id
    // фільтр повертає новий масив, тому return. Якщо є мутація, то без return
    return testShoppingList.filter(value => value.id !== id); // action.payload.id

    // shoppingListStateIngredients = shoppingListStateIngredients.filter(value => value._id !== id);
  };

  return (
    <SLList>
      {testShoppingList.length > 0 &&
        testShoppingList.map(({ id, name, img, measure }) => {
          return (
            <SLItem key={id}>
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
                  handleRemoveItem(id);
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
