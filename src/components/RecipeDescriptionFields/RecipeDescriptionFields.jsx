import { useState, useEffect, Fragment } from 'react';
import backgroundUploadImg from '../../img/image.jpg';
import { TextField, CircularProgress } from '@mui/material';
import {
  StyledAutoCategory,
  StyledLabelCategory,
  StyledInput,
  StyledLabel,
  StyledInputGroup,
  ImageSrc,
  StyledInpytImg,
} from './RecipeDescriptionFields.styled';

export default function RecipeDescriptionFields({
  setCookTime,
  setTitle,
  setAbout,
  allCategories,
  setPhoto,
  setCategories,
  photo,
}) {
  const [open, setOpen] = useState(false);
  const [optionsCategory, setOptionsCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const loadingCategory = open && optionsCategory.length === 0;

  let cooking_time = [];

  for (let i = 5; i <= 180; i = i + 5) {
    cooking_time.push(i.toString());
  }

  const loadingCookTime = open && cooking_time.length === 0;

  useEffect(() => {
    let active = true;
    if (!loadingCategory) {
      return undefined;
    }
    (async () => {
      if (active) {
        setOptionsCategory([...allCategories]);
      }
    })();
    return () => {
      active = false;
    };
  }, [allCategories, loadingCategory]);

  useEffect(() => {
    if (!open) {
      setOptionsCategory([]);
    }
  }, [open]);

  useEffect(() => {
    setImageUrl(backgroundUploadImg);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      setPhoto(selectedImage);
      setImageUrl(URL.createObjectURL(selectedImage));
    }
    if (selectedImage === undefined) {
      setImageUrl(photo);
    }
  }, [photo, selectedImage, setPhoto]);

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
          <StyledInput id="item_title" onChange={handleChangeTitle} autoComplete="off" />
        </div>
        <div>
          <label>Enter about recipe</label>
          <StyledInput id="item_title" onChange={handleChangeAbout} label="Enter about recipe" autoComplete="off" />
        </div>
        <StyledLabelCategory htmlFor="category">
          Category
          <StyledAutoCategory
            disablePortal
            id="category"
            onChange={handleChangeCategory}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            ListboxProps={{
              style: { maxHeight: 220, backgroundColor: 'var(--active_select_1)', color: 'var(--select_text_1)' },
            }}
            // isOptionEqualToValue={(option, value) => option.title === value.title}
            // getOptionLabel={option => option.title}
            options={optionsCategory}
            loading={loadingCategory}
            renderInput={
              params => (
                <TextField
                  {...params}
                  label="Categories"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <Fragment>
                        {loadingCategory ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </Fragment>
                    ),
                  }}
                />
              )
              // <TextField {...params} label="Category" />
            }
          />
        </StyledLabelCategory>
        <StyledLabelCategory htmlFor="cooking_time">
          Cooking time
          <StyledAutoCategory
            disablePortal
            id="coocking_time"
            onChange={handleChangeCookTime}
            ListboxProps={{
              style: { maxHeight: 220, backgroundColor: 'var(--active_select_1)', color: 'var(--select_text_1)' },
            }}
            options={cooking_time}
            loading={loadingCookTime}
            renderInput={
              params => (
                <TextField
                  {...params}
                  label="CookTime"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <Fragment>
                        {loadingCookTime ? <CircularProgress color="inherit" size={20} /> : []}
                        {params.InputProps.endAdornment}
                      </Fragment>
                    ),
                  }}
                />
              )
              // <TextField {...params} label="Cooking time" />
            }
          />
        </StyledLabelCategory>
      </StyledInputGroup>
    </StyledLabel>
  );
}
