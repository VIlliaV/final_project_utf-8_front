import { useState, useEffect } from 'react';
import { StyledSelect, StyledMenuItem, StyledLabelCategory } from './AddRecipeForm.styled';
import axios from 'axios';
const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

export default function CookCategoryGroup() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [cook_time, setCook_time] = useState([]);

  const addCookTime = () => {
    for (let i = 5; i <= 180; i + 5) {
      setCook_time(prevState => {
        return [...prevState, i];
      });
    }
  };

  const getCategories = async () => {
    try {
      const config = {
        method: 'GET',
        url: BASE_URL + '/recipes/category-list',
      };
      const res = await axios(config);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
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
    setCook_time(event.target.value);
  };
  return (
    <>
      <StyledLabelCategory htmlFor="category">
        Category
        <StyledSelect labelid="Category" id="CAtegoryId" value={category} onChange={handleChangeCategory}>
          {categories.map(el => (
            <StyledMenuItem key={el} value={el}>
              {el}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledLabelCategory>
      <StyledLabelCategory htmlFor="cooking_time">
        Cooking time
        <StyledSelect labelId="cooking_time" id="cooking-timeId" value={cook_time} onChange={handleChangeCookTime}>
          {/* {cook_time.map(el => (
            <StyledMenuItem key={el} value={el}>
              {el}
            </StyledMenuItem>
          ))} */}
        </StyledSelect>
      </StyledLabelCategory>
    </>
  );
}
