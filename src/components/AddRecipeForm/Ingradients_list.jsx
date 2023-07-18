import React from 'react';
import btnDelete from '../../img/X.svg';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addIngredientRecipe } from './redux/AddRecipreOperation';
import { CircularProgress, TextField } from '@mui/material';
import Loader from '../Loader/Loader';
import {
  StyledAutoComplete,
  StyledInputIngredient,
  StyledIngredientBtn,
  StyledIngredientList,
} from './AddRecipeForm.styled';
import { AllIngredients } from './redux/AddRecipeSelector';

export default function IngredientsList({ counter, counterItem }) {
  const ingredients = useSelector(AllIngredients);
  const dispatch = useDispatch();
  const loading = ingredients.length === 0;

  // console.log('1234', counterItem);

  const handleChangeIngredient = event => {
    const searchName = event.target.textContent;
    // approve(searchName);
    // ingredientList.push({ name: event.target.textContent, measure: null });
  };

  const handleChangeItem = event => {
    // console.log(event.target.name);
    if (event.target.name === 'btnDelete') {
      if (counterItem > 1) {
        counter();
      } else throw toast.error("this items don't remove");
    }
    // ingredientList.push({ name: null, measure: event.target.value });
  };

  return (
    <li key={nanoid()} name="ingredient" onClick={handleChangeItem}>
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
              // onChange={handleChangeMeaure}
              type="text"
              placeholder="count tbs,tps,kg,g"
            />
            <StyledIngredientBtn name="btnDelete">
              X
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 21"
                fill="none"
                name="btnDelete"
              >
                <use href="../../img/X.svg" fill="black" stroke="yellow" width="20" height="20" />
                <path
                  d="M15.625 4.875L4.375 16.125"
                  stroke="#333333"
                  // strokeWidth="1.5"
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                />
                <path
                  d="M15.625 16.125L4.375 4.875"
                  stroke="#333333"
                  // strokeWidth="1.5"
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                />
              </svg> */}
            </StyledIngredientBtn>
          </>
        ) : (
          <Loader />
        )}
      </StyledIngredientList>
    </li>
  );
}
