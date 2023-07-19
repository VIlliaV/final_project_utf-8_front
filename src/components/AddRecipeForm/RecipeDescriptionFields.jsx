import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import backgroundUploadImg from '../../img/image.jpg';
import { TextField } from '@mui/material';
import {
  StyledAutoCategory,
  StyledLabelCategory,
  StyledInput,
  StyledLabel,
  StyledInputGroup,
} from './AddRecipeForm.styled';
import { ImageSrc, StyledInpytImg } from './AddRecipeForm.styled';
// import { addRecipePhoto } from 'components/AddRecipeForm/redux/addRecipeSlice';

export default function RecipeDescriptionFields({
  setCookTime,
  setTitle,
  setAbout,
  allCategories,
  setPhoto,
  setCategories,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  let cooking_time = [];

  for (let i = 5; i <= 180; i = i + 5) {
    cooking_time.push(i.toString());
  }

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    } else setImageUrl(backgroundUploadImg);
    setPhoto(selectedImage);
  }, [selectedImage]);

  const handleChangeTitle = event => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleChangeAbout = event => {
    const about = event.target.value;
    setAbout(about);
  };

  const handleChangeCategory = event => {
    const category = event.target.textContent;
    setCategories(category);
  };
  const handleChangeCookTime = event => {
    const cookTime = event.target.textContent;
    setCookTime(cookTime);
  };

  return (
    <StyledLabel htmlFor="img_recipe">
      <StyledInpytImg>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          background={imageUrl}
          style={{ display: 'none' }}
          onChange={e => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image">
          <ImageSrc style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain' }} />
        </label>
      </StyledInpytImg>
      <StyledInputGroup>
        <div>
          <label>Enter item title</label>
          <StyledInput
            id="item_title"
            onChange={handleChangeTitle}
            // label="Enter item title"
            variant="filled"
            placeholder="Enter item title"
            autoComplete="off"
            label="1234"
          />
        </div>
        <div>
          <label>Enter item title</label>
          <StyledInput
            id="item_title"
            onChange={handleChangeAbout}
            label="Enter about recipe"
            variant="filled"
            placeholder="Enter about recipe"
            autoComplete="off"
          />
        </div>
        <StyledLabelCategory htmlFor="category">
          Category
          <StyledAutoCategory
            disablePortal
            id="category"
            onChange={handleChangeCategory}
            ListboxProps={{ style: { maxHeight: 220 } }}
            options={allCategories}
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
      </StyledInputGroup>
    </StyledLabel>
  );
}
