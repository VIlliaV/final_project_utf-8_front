import FileInput from '..//../components/AddRecipeForm/AddRecipeForm';
import CookCategoryGroup from '../../components/AddRecipeForm/cooktime&cotegory';
import { StyledTextField, StyledLabel, StyledInputGroup } from './AddRecipeForm.styled';

export default function ImageRecipe() {
  return (
    <StyledLabel htmlFor="img_recipe">
      <FileInput />
      <StyledInputGroup>
        <StyledTextField id="item_title" label="Enter item title" variant="filled" />
        <StyledTextField id="item_title" label="Enter about recipe" variant="filled" />
        <CookCategoryGroup />
      </StyledInputGroup>
    </StyledLabel>
  );
}
