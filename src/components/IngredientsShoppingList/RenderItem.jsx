import { SLItem, SlItemAmount, SLItemImage, SLItemImageName, SLItemRemove } from './IngredientsShoppingList.styled';
import { shoppingListRemove } from 'redux/shoppingList/shoppingListOperations';
import { useDispatch } from 'react-redux';
import { VscClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const StyledVscClose = styled(VscClose)`
  fill: #333333;
`;

export const IngredientRender = ({ ingredient }) => {
  const {
    measure,
    uniqId,
    id: { img, name },
  } = ingredient;
  const dispatch = useDispatch();

  return (
    <SLItem key={nanoid()}>
      <SLItemImage>{img ? <img src={img} alt={name} /> : undefined}</SLItemImage>
      <SLItemImageName>{name}</SLItemImageName>
      <SlItemAmount>{measure}</SlItemAmount>
      <SLItemRemove
        type="button"
        onClick={() => {
          dispatch(shoppingListRemove(uniqId));
        }}
      >
        <StyledVscClose />
      </SLItemRemove>
    </SLItem>
  );
};
