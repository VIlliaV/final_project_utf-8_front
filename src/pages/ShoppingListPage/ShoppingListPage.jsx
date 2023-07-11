// ShoppingListPage маршрут /shopping-list

// ShoppingListPage
// + Зверстати сторінку (мобільна, планшет та десктопна версії)

// Компонент рендерить:
//  - MainPageTitle - універсальний компонент заголовка сторінки.
//  - IngredientsShoppingList
// Компонент виконує запит за колекцією інгрідієнтів зі списку покупок, якщо вона відсутня в store.
// Тобто перевірити store, якщо там немає колекції інгрідієнтів, то робити запит у якийсь список покупок? Де список покупок? У локалсторидж? Чи у стор окремим елементом?

// IngredientsShoppingList
// Компонент рендерить:
// Компонент підписаний на колекцію інгрідієнтів зі списку покупок в store
// Компонент рендерить список елементів з інгрідієнтами до покупки та заголовок до цього списку.
// Кожен елемент списку має:
//  - зображення інгрідієнту або плейсхолдер
//  - к-сть в відповідних одиницях виміру
//  - кнопку для видалення елементу зі списку
// Клік по кнопці видалення повинен видалити елемент на бекенді, та його ж в списку на сторінці.

import HeadContainer from 'components/HeadContainer/HeadContainer';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
// import ThemeSwitcher from 'services/switcherTheme';
import { SLContainer, SLHeader, SLHeaderText } from './ShoppingListPage.styled';

function ShoppingListPage() {
  return (
    <HeadContainer>
      <SLContainer>
        {/* <ThemeSwitcher /> */}
        {/* <SLMainTitle>Shopping list</SLMainTitle> */}
        <SLHeader>
          <SLHeaderText>Products</SLHeaderText>
          <SLHeaderText>Amount</SLHeaderText>
          <SLHeaderText>Remove</SLHeaderText>
        </SLHeader>

        <IngredientsShoppingList />
      </SLContainer>
    </HeadContainer>
  );
}

export default ShoppingListPage;
