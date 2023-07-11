import { useSelector } from 'react-redux';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';
import { SLItem, SlItemAmount, SLItemImage, SLItemImageName, SLItemRemove, SLList } from './IngredientsShoppingList.styled';

import { GrClose } from 'react-icons/gr';

function IngredientsShoppingList() {
  // const dispatch = useDispatch();
  let shoppingListStateIngredients = useSelector(shoppingList);

  // // Отримання даних
  // const getInput = () => {
  //   dispatch(shoppingListGet());
  // };

  const handleRemoveItem = id => {
    shoppingListStateIngredients = shoppingListStateIngredients.filter(value => value._id !== id);
  };

  return (
    // shoppingListStateIngredients.length > 0 && (
    <>
      <SLList>
        <SLItem>
          <SLItemImage className="cards__animation">
            <picture>
              <source
                srcSet="./images/desktop/portfolio2-1x.jpg 1x,
                        ./images/desktop/portfolio2-2x.jpg 2x"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="./images/tablet/portfolio2-1x.jpg 1x,
                        ./images/tablet/portfolio2-2x.jpg 2x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="./images/mobile/portfolio2-1x.jpg 1x,
                        ./images/mobile/portfolio2-2x.jpg 2x"
                media="(max-width: 767px)"
              />
              <img src="source-name-here" alt="goods-imgName" />
            </picture>
          </SLItemImage>

          <SLItemImageName>Item name</SLItemImageName>

          <SlItemAmount>400g</SlItemAmount>

          <SLItemRemove type="button">
            <GrClose />
          </SLItemRemove>
        </SLItem>

        {shoppingListStateIngredients.map(({ _id, name, img }) => {
          return (
            <SLItem>
              <SLItemImage id={_id}>
                <picture>
                  {/* <source srcset={img} media="(min-width: 1200px)" />
                    <source srcset={img} media="(min-width: 768px)" />
                    <source srcset={img} media="(max-width: 767px)" /> */}
                  <img src={img} alt={name} />
                </picture>
              </SLItemImage>

              <SLItemImageName>{name}</SLItemImageName>

              <SlItemAmount>400g - звідки брати?</SlItemAmount>

              <SLItemRemove type="button" data-menu-close="" onClick={handleRemoveItem}></SLItemRemove>
            </SLItem>
          );
        })}
      </SLList>
    </>
    // )

    // <SLList>
    //   <SLItem>
    //     <SLItemImage class="cards__animation">
    //       <picture>
    //         <source
    //           srcset="./images/desktop/portfolio2-1x.jpg 1x,
    //                     ./images/desktop/portfolio2-2x.jpg 2x"
    //           media="(min-width: 1200px)"
    //         />
    //         <source
    //           srcset="./images/tablet/portfolio2-1x.jpg 1x,
    //                     ./images/tablet/portfolio2-2x.jpg 2x"
    //           media="(min-width: 768px)"
    //         />
    //         <source
    //           srcset="./images/mobile/portfolio2-1x.jpg 1x,
    //                     ./images/mobile/portfolio2-2x.jpg 2x"
    //           media="(max-width: 767px)"
    //         />
    //         <img src="source-name-here" alt="goods-imgName" />
    //       </picture>
    //     </SLItemImage>

    //     <SLItemImageName>Item name</SLItemImageName>

    //     <SlItemAmount>400g</SlItemAmount>

    //     <SLItemRemove type="button" data-menu-close="" class="menu-close menu-close--menu">
    //       <svg class="menu-close__icon">
    //         <use href="/Ice-Cream/icons.c1fa56c8.svg#menu-close"></use>
    //       </svg>
    //     </SLItemRemove>
    //   </SLItem>

    //   <SLItem>
    //     <SLItemImage class="cards__animation">
    //       <picture>
    //         <source
    //           srcset="./images/desktop/portfolio2-1x.jpg 1x,
    //                     ./images/desktop/portfolio2-2x.jpg 2x"
    //           media="(min-width: 1200px)"
    //         />
    //         <source
    //           srcset="./images/tablet/portfolio2-1x.jpg 1x,
    //                     ./images/tablet/portfolio2-2x.jpg 2x"
    //           media="(min-width: 768px)"
    //         />
    //         <source
    //           srcset="./images/mobile/portfolio2-1x.jpg 1x,
    //                     ./images/mobile/portfolio2-2x.jpg 2x"
    //           media="(max-width: 767px)"
    //         />
    //         <img src="source-name-here" alt="goods-imgName" />
    //       </picture>
    //     </SLItemImage>

    //     <SLItemImageName>Item name</SLItemImageName>

    //     <SlItemAmount>400g</SlItemAmount>

    //     <SLItemRemove type="button" data-menu-close="" class="menu-close menu-close--menu">
    //       <svg class="menu-close__icon">
    //         <use href="/Ice-Cream/icons.c1fa56c8.svg#menu-close"></use>
    //       </svg>
    //     </SLItemRemove>
    //   </SLItem>
    // </SLList>
  );
}

export default IngredientsShoppingList;
