import HeadContainer from 'components/HeadContainer/HeadContainer';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

import { SLContainer, SLHeader, SLHeaderText, DefaultImgContainer } from './ShoppingListPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';

import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { shoppingListGet } from 'redux/shoppingList/shoppingListOperations';
import NoResult from 'components/NoResult/NoResult';

function ShoppingListPage() {
  const dispatch = useDispatch();
  const mainPageTitle = 'Shopping list';
  const saveShoppingList = useSelector(shoppingList);
  console.log('ShoppingListPage >> saveShoppingList:', saveShoppingList);
  const breakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1440,
  };

  const isMobile = useMediaQuery({ maxWidth: breakpoints.tablet - 1 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: breakpoints.tablet });

  const [currentViewport, setCurrentViewport] = useState('');

  useEffect(() => {
    if (isMobile) {
      setCurrentViewport('mobile');
    } else if (isTabletOrDesktop) {
      setCurrentViewport('tablet');
    }
  }, [isMobile, isTabletOrDesktop]);

  useEffect(() => {
    if (saveShoppingList.length === 0) {
      dispatch(shoppingListGet());
    }
  }, [dispatch, saveShoppingList.length]);

  const noResultImgText = 'Shopping list is empty';
  return (
    <HeadContainer>
      <SLContainer>
        <MainPageTitle title={mainPageTitle} />
        <SLHeader>
          <SLHeaderText>Products</SLHeaderText>
          <SLHeaderText>Amount</SLHeaderText>
          <SLHeaderText>Remove</SLHeaderText>
        </SLHeader>
        {saveShoppingList.length <= 0 ? (
          <DefaultImgContainer>
            <NoResult noResultImgText={noResultImgText}></NoResult>
          </DefaultImgContainer>
        ) : (
          <IngredientsShoppingList currentViewport={currentViewport} saveShoppingList={saveShoppingList} />
        )}
      </SLContainer>
    </HeadContainer>
  );
}

export default ShoppingListPage;
