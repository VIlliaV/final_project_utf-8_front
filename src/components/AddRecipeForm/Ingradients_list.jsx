import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import TextField from '@mui/material/TextField';
import {
  StyledAutoComplete,
  StyledSelectIngredient,
  StyledSelectWegth,
  StyledSelect,
  StyledMenuItem,
  StyledLabelCategory,
  StyledInputIngredient,
  StyledOutlinedInput,
  StyledTextFieldAutoComplete,
} from './AddRecipeForm.styled';
import { InputAdornment, Select, MenuItem, TextField } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

import {
  IngredientBtn,
  BootstrapInput,
  StyledIngredientList,
  StyledFormControl,
  StyledNativeSelect,
} from './AddRecipeForm.styled';

const weigthName = [
  {
    value: 'tbs',
    label: 'tbs',
  },
  {
    value: 'tsp',
    label: 'tsp',
  },
  {
    value: 'kg',
    label: 'kg',
  },
  {
    value: 'g',
    label: 'g',
  },
];
const ingredients = [
  {
    value: 'Chicken',
    label: 'Chicken',
  },
  {
    value: 'Cheese',
    label: 'Cheese',
  },
  {
    value: 'Cheddar Cheese',
    label: 'Cheddar Cheese',
  },
  {
    value: 'Charlotte Potatoes',
    label: 'Charlotte Potatoes',
  },
  {
    value: 'Challots',
    label: 'Challots',
  },
  {
    value: 'Cherry',
    label: 'Cherry',
  },
];

export default function IngredientsList() {
  const [name, setName] = useState('');
  const [wegth, setWegth] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
    console.log(name);
  };

  const handleChangeWegth = event => {
    setWegth(event.target.value);
  };

  return (
    <li key={nanoid()}>
      <StyledIngredientList>
        <StyledFormControl size="small">
          <StyledLabelCategory htmlFor="category">
            <StyledSelectIngredient
              labelid="nameIngredient"
              id="nameIngredientId"
              value={name}
              onChange={handleChangeName}
            >
              {ingredients.map(el => (
                <StyledMenuItem key={el.value} value={el.value}>
                  {el.value}
                </StyledMenuItem>
              ))}
            </StyledSelectIngredient>

            <StyledInputIngredient type="text" placeholder="count tbs,tps,kg,g" />
          </StyledLabelCategory>
          <IngredientBtn>
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
          </IngredientBtn>
        </StyledFormControl>
      </StyledIngredientList>
    </li>
  );
}
