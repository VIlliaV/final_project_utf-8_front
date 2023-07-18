import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
// import categories from '../../back/categories.json';
import { StyledAutoCategory, StyledLabelCategory } from './AddRecipeForm.styled';
import { AllCategories } from './redux/AddRecipeSelector';
import { addСategory, addTime } from './redux/AddRecipreOperation';

export default function CookCategoryGroup() {
  const categories = useSelector(AllCategories);

  const dispatch = useDispatch();

  const coocking_time = [];

  const addCookTime = () => {
    for (let i = 5; i <= 180; i = i + 5) {
      coocking_time.push(i.toString());
    }
  };

  const handleChangeCategory = event => {
    const category = event.target.textContent;
    dispatch(addСategory(category));
  };
  const handleChangeCookTime = event => {
    const cookTime = event.target.textContent;
    dispatch(addTime(cookTime));
  };

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
