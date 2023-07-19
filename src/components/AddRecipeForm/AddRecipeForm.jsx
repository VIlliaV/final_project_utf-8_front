import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { StyledSection3 } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/AddRecipeForm/RecipeDescriptionFields';
import RecipePreparationFields from 'components/AddRecipeForm/RecipePreparationFields';
import RecipeIngredientsFields from 'components/AddRecipeForm/RecipeIngredientsFields';
import { AllCategories } from 'components/AddRecipeForm/redux/AddRecipeSelector';
import { addRecipe } from 'components/AddRecipeForm/redux/AddRecipreOperation';

export const AddRecipeForm = () => {
  const allCategories = useSelector(AllCategories);
  const [category, setCategory] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [about, setAbout] = useState('');
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  // const [ingredients, setIngredient] = useState([{}]);
  const [preparation, setPreparation] = useState('');

  const dispatch = useDispatch();

  const ingredients = [
    {
      id: '640c2dd963a319ea671e3724',
      measure: '200 g',
    },
    {
      id: '640c2dd963a319ea671e3663',
      measure: '250 g',
    },
  ];

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('documents', photo);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('instructions', preparation);
    formData.append('description', about);
    formData.append('time', cookTime);
    formData.append('ingredients', JSON.stringify(ingredients));
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    console.log(formDataObject);
    dispatch(addRecipe(formData));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <RecipeDescriptionFields
          allCategories={allCategories}
          setPhoto={setPhoto}
          setCategories={setCategory}
          setAbout={setAbout}
          setTitle={setTitle}
          setCookTime={setCookTime}
        />
        <RecipeIngredientsFields />
        <RecipePreparationFields setPreparation={setPreparation} />
        <StyledSection3>
          <div>
            <button type="button">
              <span>Add</span>
            </button>
          </div>

          <button type="submit">
            <span>Proverka</span>
          </button>
        </StyledSection3>
      </form>
    </>
  );

  //
};
