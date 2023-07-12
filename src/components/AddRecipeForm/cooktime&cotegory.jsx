import * as React from 'react';
import { StyledSelect, StyledMenuItem, StyledLabelCategory } from './AddRecipeForm.styled';

export default function CookCategoryGroup() {
  const [category, setCategory] = React.useState('');
  const [cook_time, setCook_time] = React.useState('');
  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };
  const handleChangeCookTime = event => {
    setCook_time(event.target.value);
  };
  return (
    <>
      <StyledLabelCategory htmlFor="category">
        Category
        <StyledSelect labelid="Category" id="CAtegoryId" value={category} onChange={handleChangeCategory}>
          <StyledMenuItem value={'Beef'}>Beef</StyledMenuItem>
          <StyledMenuItem value={'Breakfast'}>Breakfast</StyledMenuItem>
          <StyledMenuItem value={'Desert'}>Desert</StyledMenuItem>
          <StyledMenuItem value={'Goat'}>Goat</StyledMenuItem>
          <StyledMenuItem value={'Lamb'}>Lamb</StyledMenuItem>
          <StyledMenuItem value={'Miscellaneous'}>Miscellaneous</StyledMenuItem>
        </StyledSelect>
      </StyledLabelCategory>
      <StyledLabelCategory htmlFor="cooking_time">
        Cooking time
        <StyledSelect labelId="cooking_time" id="cooking-timeId" value={cook_time} onChange={handleChangeCookTime}>
          <StyledMenuItem value={10}>10</StyledMenuItem>
          <StyledMenuItem value={20}>20</StyledMenuItem>
          <StyledMenuItem value={30}>30</StyledMenuItem>
          <StyledMenuItem value={40}>40</StyledMenuItem>
          <StyledMenuItem value={50}>50</StyledMenuItem>
          <StyledMenuItem value={60}>60</StyledMenuItem>
          <StyledMenuItem value={120}>120</StyledMenuItem>
          <StyledMenuItem value={180}>180</StyledMenuItem>
        </StyledSelect>
      </StyledLabelCategory>
    </>
  );
}
