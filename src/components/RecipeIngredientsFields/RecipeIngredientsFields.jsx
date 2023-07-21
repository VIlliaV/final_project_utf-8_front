import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';
import { CircularProgress, TextField } from '@mui/material';
import {
  StyledAutoComplete,
  StyledInputIngredient,
  StyledIngredientBtn,
  StyledIngredientList,
  StyledInputBtn,
  StyledButtonGroup,
  StyledSection2,
  StyledH3,
} from './RecipeIngredientsFields.styled';
import { AllIngredients } from 'redux/AddRecipePage/AddRecipeSelector';

export default function RecipeIngredientsFields({ setIngredient }) {
  const ingredients = useSelector(AllIngredients);
  const [counter, setCounter] = useState(1);

  // const [loadLocale, setLoadLocale] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([{ findid: nanoid(), id: '', name: '', measure: '' }]);
  let searchItem = [];
  const loading = ingredients.length === 0;

  useEffect(() => {
    setIngredient(ingredientsList);
  }, [ingredientsList, setIngredient]);

  const handleIncrement = e => {
    setCounter(counter + 1);

    setIngredientsList(prevState => {
      return [...prevState, { findid: nanoid(), id: '', name: '', measure: '' }];
    });
  };

  const handleDecrement = e => {
    if (counter === 1) {
      e.currentTarget.disabled = true;
      throw toast.error('dont remove');
    }
    ingredientsList.pop();
    setCounter(counter - 1);
  };

  const handleChangeIngredient = event => {
    searchItem.name = event.currentTarget.textContent;
    const currentId = ingredients.find(el => el.name === searchItem.name);
    searchItem.id = currentId._id;
  };

  const handleChangeMeaure = event => {
    searchItem.measure = event.currentTarget.value;
  };

  const handleChangeItem = event => {
    const tempId = event.currentTarget;
    searchItem = ingredientsList.find(options => options.findid === tempId.id);
    if (event.target.name === 'btnDelete') {
      if (counter > 1) {
        tempId.remove();
        setCounter(counter - 1);
      } else throw toast.error("this items don't remove");
    }
  };

  return (
    <>
      <StyledSection2 name="label_ingredience">
        <StyledH3>Ingredients</StyledH3>
        <StyledButtonGroup aria-label="outlined primary button group">
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
          <StyledInputBtn sx={{ color: 'var(--back_theme_2)' }}>{counter}</StyledInputBtn>
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
          {ingredientsList.map(el => (
            <li key={el.findid} id={el.findid} onClick={handleChangeItem}>
              <StyledIngredientList>
                {ingredients.length > 0 ? (
                  <>
                    <StyledAutoComplete
                      disableClearable
                      key={el.findid}
                      id={el.findid}
                      ListboxProps={{
                        style: {
                          maxHeight: 220,
                          backgroundColor: 'var(--active_select_1)',
                          color: 'var(--select_text_1)',
                        },
                      }}
                      isOptionEqualToValue={(option, value) => option.name === value.name}
                      getOptionLabel={option => option.name}
                      onChange={handleChangeIngredient}
                      options={ingredients}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Ingredients"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </Fragment>
                            ),
                          }}
                        />
                      )}
                    />
                    <StyledInputIngredient
                      name="measure"
                      autoComplete="off"
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
          ))}
        </ul>
      </StyledSection2>
    </>
  );
}
