import { SLItem, SlItemAmount, SLItemImage, SLItemImageName, SLItemRemove } from './IngredientsShoppingList.styled';
import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';

import { nanoid } from 'nanoid';

const StyledVscClose = styled(VscClose)`
  fill: #333333;
`;

export const IngredientRender = ({ ingredient, onRemove }) => {
  const {
    measure,
    uniqId,
    id: { img, name },
  } = ingredient;

  return (
    <SLItem key={nanoid()}>
      <SLItemImage>{img ? <img src={img} alt={name} /> : undefined}</SLItemImage>
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
