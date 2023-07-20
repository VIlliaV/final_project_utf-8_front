import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
import { StyledSection3 } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import { AllCategories } from 'redux/AddRecipePage/AddRecipeSelector';
import { addRecipe } from 'redux/AddRecipePage/AddRecipreOperation';
let ingredientsToSend = [];

export const AddRecipeForm = () => {
  const allCategories = useSelector(AllCategories);
  const [category, setCategory] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [about, setAbout] = useState('');
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredient] = useState([]);
  const [preparation, setPreparation] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    ingredients.map(el => ingredientsToSend.push({ id: el._id, measure: el.measure }));
  }, [ingredients]);

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('documents', photo);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('instructions', preparation);
    formData.append('description', about);
    formData.append('time', cookTime);
    formData.append('ingredients', JSON.stringify(ingredientsToSend));
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    console.log(formDataObject);
    console.log(ingredientsToSend);
    const result = dispatch(addRecipe(formData));
    console.log(result);
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
