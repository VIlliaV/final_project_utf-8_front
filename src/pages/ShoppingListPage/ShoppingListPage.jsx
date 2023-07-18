import HeadContainer from 'components/HeadContainer/HeadContainer';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

import { SLContainer, SLHeader, SLHeaderText } from './ShoppingListPage.styled';

const mainPageTitle = 'Shopping list';

function ShoppingListPage() {
  return (
    <HeadContainer>
      <SLContainer>
        <MainPageTitle title={mainPageTitle} />
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
