import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { StyledInputBtn, StyledButtonGroup, StyledSection2, StyledH3 } from './AddRecipeForm.styled';
import IngredientList from '../../components/AddRecipeForm/Ingradients_list';

export default function BasicButtonGroup() {
  const [counter, setCounter] = useState(1);
  const [loadLocale, setLoadLocale] = useState([]);

  const [ingredientsList, setIngredientsList] = useState([{ id: nanoid(), _id: '', name: '', measure: '' }]);
  let tmp = [];

  function loadFromLocale(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      toast.error('Get state error: ', error.message);
    }
  }

  useEffect(() => {
    tmp = loadFromLocale(IngredientList);
    console.log(tmp);
  }, []);

  // useEffect(() => {
  //   setLoadLocale(loadFromLocale('ingredientsList'));
  //   loadLocale !== undefined ? setCounter(loadLocale.length) : setCounter(1);
  // }, [loadLocale]);

  // useEffect(() => {
  //   if (loadLocale === 0) {
  //     setIngredientsList(prevState => {
  //       return [...prevState, { id: nanoid(), _id: '', name: '', measure: '' }];
  //     });
  //   } else {
  //     console.log(loadLocale.length);
  //     setCounter(loadLocale.length);
  //     setIngredientsList(prevState => {
  //       return [
  //         ...prevState,
  //         { id: loadLocale.id, _id: loadLocale._id, name: loadLocale.name, measure: loadLocale.measure },
  //       ];
  //     });
  //   }
  // }, [loadLocale]);

  const handleIncrement = e => {
    setCounter(counter + 1);

    setIngredientsList(prevState => {
      return [...prevState, { id: nanoid(), _id: '', name: '', measure: '' }];
    });
    localStorage.setItem('ingredientCount', counter);
  };

  const handleDecrement = e => {
    if (counter === 1) {
      e.currentTarget.disabled = true;
      throw toast.error('dont remove');
    }
    // if()
    ingredientsList.pop();
    setCounter(counter - 1);
    localStorage.setItem('ingredientCount', counter);
  };

  console.log(counter);

  return (
    <>
      <StyledSection2 name="label_ingredience">
        <StyledH3>Ingredients</StyledH3>
        <StyledButtonGroup color="secondary" aria-label="outlined primary button group">
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
          {counter === 1
            ? ingredientsList.map(el => (
                <IngredientList
                  id={el.id}
                  key={nanoid()}
                  ingredientList={ingredientsList}
                  counter={handleDecrement}
                  counterItem={counter}
                />
              ))
            : loadLocale > 0
            ? ingredientsList.map(el => (
                <IngredientList
                  id={el.id}
                  key={nanoid()}
                  ingredientList={ingredientsList}
                  counter={handleDecrement}
                  counterItem={counter}
                  el={el}
                />
              ))
            : toast.error('nothings in localStorage')}
          {/*      
            // <IngredientList
            //   id={el.id}
            //   key={nanoid()}
            //   ingredientList={el}
            //   counter={handleDecrement}
            //   counterItem={counter}
            //   el={el}
            // /> */}
        </ul>
      </StyledSection2>
    </>
  );
}
