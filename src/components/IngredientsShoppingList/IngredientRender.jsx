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

import { useMediaQuery } from 'react-responsive';

import defaultImgMobile from 'img/Stub_ShoppingList_Mobile.png';
import defaultImgTabletDesktop from 'img/Stub_ShoppingList_TabletDesktop.png';
import { useEffect, useState } from 'react';

const StyledVscClose = styled(VscClose)`
  fill: var(--back_theme_2);
`;

export const IngredientRender = ({ ingredient, onRemove }) => {
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
