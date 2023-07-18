import React from 'react';
import toast from 'react-hot-toast';

import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { CircularProgress, TextField } from '@mui/material';
import Loader from '../Loader/Loader';
import {
  StyledAutoComplete,
  StyledInputIngredient,
  StyledIngredientBtn,
  StyledIngredientList,
} from './AddRecipeForm.styled';
import { AllIngredients } from './redux/AddRecipeSelector';

export default function IngredientsList({ counter, counterItem, id, ingredientList }) {
  let searchItem = [];

  const ingredients = useSelector(AllIngredients);

  const loading = ingredients.length === 0;

  const handleChangeIngredient = event => {
    searchItem.name = event.currentTarget.textContent;
    const currentId = ingredients.find(el => el.name === searchItem.name);
    searchItem._id = currentId._id;
  };

  const handleChangeMeaure = event => {
    // console.log(event.currentTarget.value);
    searchItem.measure = event.currentTarget.value;
    // console.log(ingredientList);
    // dispatch(addReciepe(ingredientList));
  };

  const handleChangeItem = event => {
    searchItem = ingredientList.find(options => options.id === event.currentTarget.id);
    if (event.target.name === 'btnDelete') {
      if (counterItem > 1) {
        counter();
      } else throw toast.error("this items don't remove");
    }
  };

  console.log('ingredientList', ingredientList);
  return (
    <>
      <li key={nanoid()} id={id} name="ingredient" onClick={handleChangeItem}>
        <StyledIngredientList>
          {ingredients.length > 0 ? (
            <>
              <StyledAutoComplete
                disablePortal
                name="ingredientsName"
                id="ingredientsName"
                ListboxProps={{ style: { maxHeight: 220 } }}
                // isOptionEqualToValue={(option, value) => option === value}
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
              <StyledIngredientBtn name="btnDelete">X</StyledIngredientBtn>
            </>
          ) : (
            <Loader />
          )}
        </StyledIngredientList>
      </li>
    </>
  );
}
