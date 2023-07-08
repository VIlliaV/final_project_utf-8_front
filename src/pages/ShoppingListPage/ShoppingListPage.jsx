// ShoppingListPage маршрут /shopping-list
// "Зверстати сторінку (мобільна, планшет та десктопна версії)

// Компонент рендерить:
//  - MainPageTitle - універсальний компонент заголовка сторінки.
//  - IngredientsShoppingList
// Компонент виконує запит за колекцією інгрідієнтів зі списку покупок, якщо вона відсутня в store."  ShoppingListPage
// "Компонент підписаний на колекцію інгрідієнтів зі списку покупок в store
// Компонент рендерить список елементів з інгрідієнтами до покупки та заголовок до цього списку.
// Кожен елемент списку має:
//  - зображення інгрідієнту або плейсхолдер
//  - к-сть в відповідних одиницях виміру
//  - кнопку для видалення елементу зі списку
// Клік по кнопці видалення повинен видалити елемент на бекенді, та його ж в списку на сторінці." IngredientsShoppingList
import React from 'react';
import {
  SLHeader,
  SLHeaderText,
  SLItem,
  SlItemAmount,
  SLItemImage,
  SLItemImageName,
  SLItemRemove,
  SLList,
  SLMainTitle,
} from './ShoppingListPage.styled';

// const liShoppingListTitle = styled.li`

// `;

function ShoppingListPage() {
  return (
    <>
      <SLMainTitle>Shopping list</SLMainTitle>
      <SLHeader>
        <SLHeaderText>Products</SLHeaderText>
        <SLHeaderText>Amount</SLHeaderText>
        <SLHeaderText>Remove</SLHeaderText>
      </SLHeader>
      <SLList>
        <SLItem>
          <SLItemImage class="cards__animation">
            <picture>
              <source
                srcset="
                        ./images/desktop/portfolio2-1x.jpg 1x,
                        ./images/desktop/portfolio2-2x.jpg 2x
                      "
                media="(min-width: 1200px)"
              />
              <source
                srcset="
                        ./images/tablet/portfolio2-1x.jpg 1x,
                        ./images/tablet/portfolio2-2x.jpg 2x
                      "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                        ./images/mobile/portfolio2-1x.jpg 1x,
                        ./images/mobile/portfolio2-2x.jpg 2x
                      "
                media="(max-width: 767px)"
              />
              <img src="source-name-here" alt="goods-imgName" />
            </picture>
          </SLItemImage>

          <SLItemImageName>Item name</SLItemImageName>

          <SlItemAmount>400g</SlItemAmount>

          <SLItemRemove type="button" data-menu-close="" class="menu-close menu-close--menu">
            <svg class="menu-close__icon">
              <use href="/Ice-Cream/icons.c1fa56c8.svg#menu-close"></use>
            </svg>
          </SLItemRemove>
        </SLItem>
      </SLList>
    </>
  );
}

export default ShoppingListPage;
