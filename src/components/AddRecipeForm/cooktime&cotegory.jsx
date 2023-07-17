import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Autocomplete, TextField } from '@mui/material';
import { StyledSelect, StyledAutoCategory, StyledMenuItem, StyledLabelCategory } from './AddRecipeForm.styled';
import { getCategories } from './redux/AddRecipreOperation';

export default function CookCategoryGroup() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [cooking_time, setCook_time] = useState([]);
  const dispatch = useDispatch();

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
    dispatch(getCategories)
      // const getCategories = async () => {
      //   try {
      //     const config = {
      //       method: 'GET',
      //       url: BASE_URL + '/recipes/category-list',
      //     };

      //     const res = await axios(config);
      //     return res.data;
      //   } catch (error) {
      //     throw handleError(error);
      //   }

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
          onChange={handleChangeCategory}
          ListboxProps={{ style: { maxHeight: 220 } }}
          options={categories}
          renderInput={params => <TextField {...params} label="Category" />}
        />
      </StyledLabelCategory>
      <StyledLabelCategory htmlFor="cooking_time">
        Cooking time
        <StyledAutoCategory
          disablePortal
          id="coocking_time"
          onChange={handleChangeCookTime}
          ListboxProps={{ style: { maxHeight: 220 } }}
          options={cooking_time}
          renderInput={params => <TextField {...params} label="Coocking time" />}
        />
      </StyledLabelCategory>
    </>
  );
}
