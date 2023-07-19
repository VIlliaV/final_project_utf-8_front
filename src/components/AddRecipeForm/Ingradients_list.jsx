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

export default function IngredientsList({ counter, counterItem, id, ingredientList, el }) {
  let searchItem = [];

  const ingredients = useSelector(AllIngredients);

  const loading = ingredients.length === 0;

  console.log('el', el);
  console.log('counterItem', counterItem);

  const handleChangeIngredient = event => {
    searchItem.name = event.currentTarget.textContent;
    const currentId = ingredients.find(el => el.name === searchItem.name);
    searchItem._id = currentId._id;
    localStorage.setItem('IngredientList', JSON.stringify(ingredientList));
  };

  const handleChangeMeaure = event => {
    searchItem.measure = event.currentTarget.value;
    localStorage.setItem('IngredientList', JSON.stringify(ingredientList));
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
                // disablePortal
                disableClearable
                name="ingredientsName"
                id="ingredientsName"
                ListboxProps={{ style: { maxHeight: 220 } }}
                isOptionEqualToValue={(option, value) => option === value}
                // defaultValue={el.name}
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
                // defaultValue={el.measure}
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
