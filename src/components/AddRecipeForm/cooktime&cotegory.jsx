import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { StyledAutoCategory, StyledLabelCategory } from './AddRecipeForm.styled';
import { getCategories } from './redux/AddRecipreOperation';
import { addСategory, addTime } from './redux/AddRecipreOperation';

export default function CookCategoryGroup() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [cookTime, setCookTime] = useState('');
  const dispatch = useDispatch();

  const coocking_time = [];

  const addCookTime = () => {
    for (let i = 5; i <= 180; i = i + 5) {
      coocking_time.push(i.toString());
    }
  };

  useEffect(() => {
    dispatch(getCategories())
      .then(res => {
        setCategories(res.payload);
      })
      .catch(error => {
        handleError(error);
      });
  }, [dispatch]);

  function handleError(error) {
    toast(`${error.message}`);
  }

  const handleChangeCategory = event => {
    setCategory(event.target.textContent);
  };
  const handleChangeCookTime = event => {
    setCookTime(event.target.textContent);
  };

  dispatch(addСategory(category));
  dispatch(addTime(cookTime));
  addCookTime();

  return (
    <>
      <StyledLabelCategory htmlFor="category">
        Category
        <StyledAutoCategory
          disablePortal
          id="category"
          // value={category}
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
          // value={cookTime}
          ListboxProps={{ style: { maxHeight: 220 } }}
          options={coocking_time}
          renderInput={params => <TextField {...params} label="Coocking time" />}
        />
      </StyledLabelCategory>
    </>
  );
}
