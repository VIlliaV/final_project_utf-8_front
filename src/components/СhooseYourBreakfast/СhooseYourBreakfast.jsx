import { СhooseBreakfastContainer, СhooseBreakfastText, СhooseBreakfastButton } from './СhooseYourBreakfast.styled';

const СhooseYourBreakfast = ({ handleClick }) => {
  return (
    <СhooseBreakfastContainer>
      <СhooseBreakfastText>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one satisfying meal
      </СhooseBreakfastText>
      <СhooseBreakfastButton type="button" onClick={handleClick}>
        See recipes
      </СhooseBreakfastButton>
    </СhooseBreakfastContainer>
  );
};

export default СhooseYourBreakfast;
