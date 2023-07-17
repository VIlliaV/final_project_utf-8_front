import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTitle, addAbout } from './redux/AddRecipreOperation';
import FileInput from '..//../components/AddRecipeForm/AddRecipeForm';
import CookCategoryGroup from '../../components/AddRecipeForm/cooktime&cotegory';
import { StyledTextField, StyledLabel, StyledInputGroup } from './AddRecipeForm.styled';

export default function ImageRecipe() {
  const dispatch = useDispatch();

  const handleChangeTitle = event => {
    const title = event.target.value;
    dispatch(addTitle(title));
  };

  const handleChangeAbout = event => {
    const about = event.target.value;
    dispatch(addAbout(about));
  };

  return (
    <StyledLabel htmlFor="img_recipe">
      <FileInput />
      <StyledInputGroup>
        <StyledTextField id="item_title" onChange={handleChangeTitle} label="Enter item title" variant="filled" />
        <StyledTextField id="item_title" onChange={handleChangeAbout} label="Enter about recipe" variant="filled" />
        <CookCategoryGroup />
      </StyledInputGroup>
    </StyledLabel>
  );
}
