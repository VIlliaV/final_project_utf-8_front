import { ListItem, Image, Name, MeasureWrapper, Measure, CheckboxInput } from './RecipeIngredientsList.styled';
import { useAuth } from 'utils/hooks/useAuth';
import SvgIcon from '@mui/material/SvgIcon';

import defaultImgMobile from 'img/Stub_Recipe_Mobile.jpg';
import defaultImgTablet from 'img/Stub_Recipe_Tablet.jpg';
import defaultImgDesktop from 'img/Stub_Recipe_Desktop.jpg';

export const RecipeCheckbox = ({ handleCheckboxChange, recipeId, ingredient, isChecked }) => {
  const { isThemeToggle } = useAuth(); //?

  const handle = event => {
    handleCheckboxChange(ingredient.id._id, event.target.checked, `${recipeId}_${ingredient.id._id}`, recipeId);
  };

  return (
    <ListItem key={`${recipeId}_${ingredient.id._id}`} datatype={isThemeToggle.toString()}>
      <Image
        src={ingredient.id.img}
        alt={ingredient.id.name}
        $defaultImgMobile={defaultImgMobile}
        $defaultImgTablet={defaultImgTablet}
        $defaultImgDesktop={defaultImgDesktop}
      />
      <Name datatype={isThemeToggle.toString()}>{ingredient.id.name}</Name>
      <MeasureWrapper>
        <Measure>{ingredient.measure} </Measure>
      </MeasureWrapper>

      <CheckboxInput
        checked={isChecked}
        onChange={event => {
          handle(event);
        }}
        icon={
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="1" width="18" height="18" rx="4" stroke="#7E7E7E" strokeOpacity="0.5" />
            </svg>
          </SvgIcon>
        }
        checkedIcon={
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="1" width="18" height="18" rx="4" stroke="#7E7E7E" strokeOpacity="0.5" />
              <path
                d="M12.7738 6.01229C13.0447 5.61264 13.5884 5.5083 13.988 5.77926C14.3877 6.05021 14.492 6.59384 14.2211 6.9935L9.47925 13.9876C9.13243 14.4992 8.37879 14.4992 8.03197 13.9876L5.77962 10.6654C5.50867 10.2658 5.613 9.72215 6.01266 9.45119C6.41231 9.18024 6.95595 9.28457 7.2269 9.68423L8.75561 11.9391L12.7738 6.01229Z"
                fill="#8BAA36"
              />
            </svg>
          </SvgIcon>
        }
      />
    </ListItem>
  );
};
