import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
import { TextField } from '@mui/material';
import { StyledAutoCategory, StyledLabelCategory } from './AddRecipeForm.styled';
import { addСategory, addTime, getCategories } from './redux/AddRecipreOperation';

export default function CookCategoryGroup() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  let cooking_time = [];

  useEffect(() => {
    dispatch(getCategories()).then(res => {
      setCategories(res.payload);
    });
  }, [dispatch]);

  useEffect(() => {
    for (let i = 5; i <= 180; i = i + 5) {
      cooking_time.push(i.toString());
    }
  });

  const handleChangeCategory = event => {
    const category = event.target.textContent;
    dispatch(addСategory(category));
  };
  const handleChangeCookTime = event => {
    const cookTime = event.target.textContent;
    dispatch(addTime(cookTime));
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
          renderInput={params => <TextField {...params} label="Cooking time" />}
        />
      </StyledLabelCategory>
    </>
  );
}
