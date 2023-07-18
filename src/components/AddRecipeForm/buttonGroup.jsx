// import * as React from 'react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { StyledInputBtn, StyledButtonGroup, StyledSection2, StyledH3 } from './AddRecipeForm.styled';
import IngredientList from '../../components/AddRecipeForm/Ingradients_list';
import { AllIngredients } from './redux/AddRecipeSelector';

export default function BasicButtonGroup() {
  const ingredients = useSelector(AllIngredients);
  const [counter, setCounter] = useState(1);
  const [ingredientList, setIngredientsList] = useState([{ id: nanoid(), name: '', measure: '' }]);

  const handleIncrement = e => {
    setCounter(counter + 1);
    // { id: ingredients[counter]._id, name: ingredients[counter].name, measure: counter }
    setIngredientsList(prevState => {
      return [...prevState, { id: nanoid(), name: '', measure: '' }];
    });
  };

  const handleDecrement = e => {
    if (counter === 1) {
      e.currentTarget.disabled = true;
      throw toast.error('dont remove');
    }
    // if()
    ingredientList.pop();
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
          {counter >= 1 &&
            ingredientList.map(() => (
              <IngredientList
                id={nanoid()}
                key={nanoid()}
                ingredientList={ingredientList}
                counter={handleDecrement}
                counterItem={counter}
              />
            ))}
        </ul>
      </StyledSection2>
    </>
  );
}
