// import * as React from 'react';
import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { StyledInputBtn, StyledButtonGroup, StyledSection2, StyledH3 } from './AddRecipeForm.styled';
import IngredientList from '../../components/AddRecipeForm/Ingradients_list';

export default function BasicButtonGroup() {
  const [counter, setCounter] = useState(1);
  const [ingredients, setIngredients] = useState([{ id: nanoid(), name: '' }]);

  const handleIncrement = e => {
    setCounter(counter + 1);
    setIngredients(prevState => {
      return [...prevState, { id: nanoid(), name: '' }];
    });
  };

  const handleDecrement = e => {
    if (counter === 1) {
      e.currentTarget.disabled = true;
      return;
    }
    ingredients.pop();
    setCounter(counter - 1);
  };

  return (
    <>
      <StyledSection2 name="label_ingredience">
        <StyledH3>Ingredients</StyledH3>
        <StyledButtonGroup color="secondary" variant="outlined" aria-label="outlined primary button group">
          <StyledInputBtn onClick={handleDecrement} name="decrementBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.50024 8H13.5003"
                stroke="#8BAA36"
                strokeOpacity="0.3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </StyledInputBtn>
          <StyledInputBtn>{counter}</StyledInputBtn>
          <StyledInputBtn onClick={handleIncrement} name="incrementBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.50024 8H13.5003"
                stroke="#8BAA36"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00024 2.5V13.5"
                stroke="#8BAA36"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </StyledInputBtn>
        </StyledButtonGroup>

        <ul name="detailIngrediantList">
          {counter > 1 ? (
            ingredients.map(() => <IngredientList id={nanoid()} key={nanoid()} />)
          ) : (
            <IngredientList id={nanoid()} key={nanoid()} />
          )}
        </ul>
      </StyledSection2>
    </>
  );
}
