import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
// import ingredients from '../../back/ingredients.json';

import { CircularProgress, TextField } from '@mui/material';
import Loader from '../Loader/Loader';
import {
  StyledAutoComplete,
  StyledInputIngredient,
  StyledIngredientBtn,
  StyledIngredientList,
} from './AddRecipeForm.styled';
import { AllIngredients } from './redux/AddRecipeSelector';

export default function IngredientsList() {
  let ing = [];
  const ingredients = useSelector(AllIngredients);
  const loading = ingredients.length === 0;

  const handleChangeIngredient = event => {
    console.log(event.target.textContent);
    ing.push({ name: event.target.value });
  };

  const handleChangeMeaure = event => {
    console.log(event.target.value);
    ing.push({ measure: event.target.value });
  };
  console.log('ing', ing);

  return (
    <li key={nanoid()} name="ingredient">
      <StyledIngredientList>
        {ingredients.length > 0 ? (
          <>
            <StyledAutoComplete
              disablePortal
              id="ingredientsName"
              ListboxProps={{ style: { maxHeight: 220 } }}
              isOptionEqualToValue={(option, value) => option === value}
              getOptionLabel={option => option}
              onChange={handleChangeIngredient}
              options={ingredients.map(el => el.name)}
              loading={loading}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Ingredients"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            <StyledInputIngredient
              name="measure"
              onChange={handleChangeMeaure}
              type="text"
              placeholder="count tbs,tps,kg,g"
            />
            <StyledIngredientBtn>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none">
                <path
                  d="M15.625 4.875L4.375 16.125"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.625 16.125L4.375 4.875"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </StyledIngredientBtn>
          </>
        ) : (
          <Loader />
        )}
      </StyledIngredientList>
    </li>
  );
}
