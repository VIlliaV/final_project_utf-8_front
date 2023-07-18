import { SLItem, SlItemAmount, SLItemImage, SLItemImageName, SLItemRemove } from './IngredientsShoppingList.styled';
import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import defaultImgMobile from 'img/Stub_ShoppingList_Mobile.jpg';
import defaultImgDesktop from 'img/Stub_ShoppingList_Desktop.jpg';

const StyledVscClose = styled(VscClose)`
  fill: var(--back_theme_2);
`;

export const IngredientRender = ({ ingredient, onRemove }) => {
  const {
    measure,
    uniqId,
    id: { img, name },
  } = ingredient;

  return (
    <SLItem key={nanoid()}>
      {/* <SLItemImage>{img ? <img src={img} alt={name} /> : undefined}</SLItemImage> */}
      <SLItemImage src={img} alt={name} $defaultImgMobile={defaultImgMobile} $defaultImgDesktop={defaultImgDesktop} />
      <SLItemImageName>{name}</SLItemImageName>
      <SlItemAmount>{measure}</SlItemAmount>
      <SLItemRemove
        type="button"
        onClick={() => {
          onRemove(uniqId);
        }}
      >
        <StyledVscClose />
      </SLItemRemove>
    </SLItem>
  );
};
