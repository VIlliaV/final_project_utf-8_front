import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
import { StyledSection3 } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { AllCategories, isAddRecipeSelector } from 'redux/AddRecipePage/AddRecipeSelector';
import { addRecipe, changeStatus } from 'redux/AddRecipePage/AddRecipreOperation';
import { useNavigate } from 'react-router-dom';

export const AddRecipeForm = () => {
  const allCategories = useSelector(AllCategories);
  // const addRecipeStatus = useSelector(AddRecipeStatus);
  const [category, setCategory] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [about, setAbout] = useState('');
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredient] = useState([]);
  const [preparation, setPreparation] = useState('');
  const navigate = useNavigate();
  const isAddRecipe = useSelector(isAddRecipeSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    let ingredientsToSend = [];
    ingredients.map(el => ingredientsToSend.push({ id: el._id, measure: el.measure }));
  }, [ingredients]);

  useEffect(() => {
    if (isAddRecipe) navigate('/my');
    dispatch(changeStatus());
  }, [dispatch, isAddRecipe, navigate]);

  const onSubmit = e => {
    e.preventDefault();
    const objectsToSend = [];
    // console.log('ingredients', ingredients);
    ingredients?.map(({ id, measure }) => objectsToSend.push({ id, measure }));
    console.log('objectsToSend', objectsToSend);
    const formData = new FormData();
    formData.append('documents', photo);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('instructions', preparation);
    formData.append('description', about);
    formData.append('time', cookTime);
    formData.append('ingredients', JSON.stringify(objectsToSend));
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    console.log('formData', formDataObject);

    dispatch(addRecipe(formData));

    // console.log('addRecipeStatus', addRecipeStatus);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <RecipeDescriptionFields
          allCategories={allCategories}
          setPhoto={setPhoto}
          photo={photo}
          setCategories={setCategory}
          setAbout={setAbout}
          setTitle={setTitle}
          setCookTime={setCookTime}
        />
        <RecipeIngredientsFields setIngredient={setIngredient} />
        <RecipePreparationFields setPreparation={setPreparation} />
        <StyledSection3>
          <div>
            <button type="submit">
              <span>Add</span>
            </button>
          </div>
        </StyledSection3>
      </form>
    </>
  );

  //
};
