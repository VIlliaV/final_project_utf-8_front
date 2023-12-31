import { СhooseBreakfastContainer, СhooseBreakfastText, СhooseBreakfastButton } from './СhooseYourBreakfast.styled';

const СhooseYourBreakfast = ({ handleClick }) => {
  return (
    <СhooseBreakfastContainer>
      <СhooseBreakfastText>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one satisfying meal
      </СhooseBreakfastText>
      <СhooseBreakfastButton type="button" onClick={handleClick}>
        See recipes
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </СhooseBreakfastButton>
    </СhooseBreakfastContainer>
  );
};

export default СhooseYourBreakfast;
