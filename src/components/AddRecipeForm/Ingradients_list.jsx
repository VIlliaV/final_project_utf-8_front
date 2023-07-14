import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { CircularProgress, TextField } from '@mui/material';
import {
  StyledAutoComplete,
  StyledMenuItem,
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
  const [name, setName] = useState('');
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const getIngredients = async () => {
    try {
      const config = {
        method: 'GET',
        url: BASE_URL + '/popular-recipe',
      };

      const res = await axios(config);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions([...ingredients]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChangeName = event => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <li key={nanoid()}>
      <StyledAutoComplete
        freeSolo
        disableClearable
        id="asynchronous-demo"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={option => option.title}
        options={options}
        loading={loading}
        renderInput={params => (
          <TextField
            {...params}
            value={name}
            onChange={handleChangeName}
            InputProps={{
              ...params.InputProps,
              type: 'search',
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
      {/* <StyledIngredientList>
        <StyledFormControl size="small">
          <StyledInputIngredients htmlFor="category">
            

            <StyledInputIngredient type="text" placeholder="count tbs,tps,kg,g" />
          </StyledInputIngredients>
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
        </StyledFormControl>
      </StyledIngredientList> */}
    </li>
  );
}
