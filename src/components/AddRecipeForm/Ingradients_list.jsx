import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { CircularProgress, TextField } from '@mui/material';
import {
  StyledAutoComplete,
  StyledInputIngredients,
  StyledInputIngredient,
  StyledIngredientBtn,
  StyledIngredientList,
  StyledFormControl,
} from './AddRecipeForm.styled';
import axios from 'axios';
const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

export default function IngredientsList() {
  const [ingredients, setIngredients] = useState([]);
  // const [inputValue, setInputValue] = useState('Ingredients');
  // const [value, setValue] = useState('');
  // const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const config = {
          method: 'GET',
          url: BASE_URL + '/ingredients/list',
        };

        const res = await axios(config);
        return res.data;
      } catch (error) {
        throw handleError(error);
      }
    };

    getIngredients()
      .then(res => {
        setIngredients(res);
      })
      .catch(error => {
        handleError(error);
      });
  }, []);

  function handleError(error) {
    console.error(error);
    alert(`${error.message}`);
  }

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      // await sleep(1e3); // For demo purposes.

      if (active) {
        ingredients.map(el => setOptions(prevState => [...prevState, el.name]));
      }
    })();

    return () => {
      active = false;
    };
  }, [ingredients, loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // const handleChangeName = event => {
  //   setName(event.target.textContent);
  //   console.log(name);
  // };

  return (
    <li key={nanoid()}>
      <StyledIngredientList>
        <StyledAutoComplete
          disablePortal
          id="combo-box-demo"
          // open={open}
          // onOpen={() => {
          //   setOpen(true);
          // }}
          // onClose={() => {
          //   setOpen(false);
          // }}
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={option => option}
          options={ingredients.map(el => el.name)}
          renderInput={params => (
            <TextField
              {...params}
              label="Asynchronous"
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
        <StyledInputIngredient type="text" placeholder="count tbs,tps,kg,g" />
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
      </StyledIngredientList>
    </li>
  );
}
