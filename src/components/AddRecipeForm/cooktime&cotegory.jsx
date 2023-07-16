import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { Autocomplete, TextField } from '@mui/material';
import { StyledSelect, StyledAutoCategory, StyledMenuItem, StyledLabelCategory } from './AddRecipeForm.styled';
import axios from 'axios';
const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

export default function CookCategoryGroup() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [cooking_time, setCook_time] = useState([]);

  const addCookTime = () => {
    for (let i = 5; i <= 180; i = i + 5) {
      setCook_time(prevState => {
        return [...prevState, i];
      });
    }
  };

  useEffect(() => {
    addCookTime();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const config = {
          method: 'GET',
          url: BASE_URL + '/recipes/category-list',
        };

        const res = await axios(config);
        return res.data;
      } catch (error) {
        throw handleError(error);
      }
    };

    getCategories()
      .then(res => {
        setCategories(res);
      })
      .catch(error => {
        handleError(error);
      });
  }, []);

  function handleError(error) {
    console.error(error);
    alert(`${error.message}`);
  }

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };
  const handleChangeCookTime = event => {
    setCookTime(event.target.value);
  };

  return (
    <>
      <StyledLabelCategory htmlFor="category">
        Category
        <StyledAutoCategory
          disablePortal
          id="category"
          ListboxProps={{ style: { maxHeight: 220 } }}
          options={categories}
          renderInput={params => <TextField {...params} label="Category" />}
        />
        {/* <StyledSelect labelid="Category" id="CAtegoryId" value={category} onChange={handleChangeCategory}>
          {categories.map(el => (
            <StyledMenuItem key={nanoid()} value={el}>
              {el}
            </StyledMenuItem>
          ))}
        </StyledSelect> */}
      </StyledLabelCategory>
      <StyledLabelCategory htmlFor="cooking_time">
        Cooking time
        <StyledAutoCategory
          disablePortal
          id="coocking_time"
          ListboxProps={{ style: { maxHeight: 220 } }}
          options={categories}
          renderInput={params => <TextField {...params} label="Coocking time" />}
        />
        {/* <StyledSelect
          sx={{ maxHeight: 190 }}
          labelId="cooking_time"
          id="cooking-timeId"
          value={cookTime}
          onChange={handleChangeCookTime}
        >
          {cooking_time.map(el => (
            <StyledMenuItem key={el} value={el}>
              {el}
            </StyledMenuItem>
          ))}
        </StyledSelect> */}
      </StyledLabelCategory>
    </>
  );
}
