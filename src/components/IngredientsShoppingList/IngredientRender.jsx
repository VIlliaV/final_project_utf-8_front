import {
  SLItem,
  SlItemAmount,
  SLImageWrapper,
  SLItemImage,
  SLItemImageName,
  SLItemRemove,
} from './IngredientsShoppingList.styled';
import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import defaultImgMobile from 'img/Stub_ShoppingList_Mobile.png';
import defaultImgTabletDesktop from 'img/Stub_ShoppingList_TabletDesktop.png';

const StyledVscClose = styled(VscClose)`
  fill: var(--back_theme_2);
`;

export const IngredientRender = ({ ingredient, onRemove, currentViewport }) => {
  const {
    measure,
    uniqId,
    id: { img, name },
  } = ingredient;

  return (
    <>
      <SLItem key={nanoid()}>
        <SLImageWrapper>
          <SLItemImage
            src={img || (currentViewport === 'mobile' ? defaultImgMobile : defaultImgTabletDesktop)}
            alt={name}
          />
        </SLImageWrapper>

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
    </>
  );
};
