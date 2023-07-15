import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipePageHero from '../../components/RecipePageHero/RecipePageHero';
import RecipeInngredientsList from '../../components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
import { Wrapper } from './RecipePage.styled';
import { store } from 'redux/store';

const token = store.getState().auth.token;

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// axois.get(`/recipes/${id}`); --отримання одного рецепта по id
// axois.get('/ingredients/list'); --отримання списку інгрієнтів
// axios.post("/ingredients/list",{recipeId:'id-рецепта'})

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const [ingredientsMeasure, setIngredientsMeasure] = useState([]);
 
  const { recipeId } = useParams();
 
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/recipes/${recipeId}`);
        setRecipe(response.data);
        setIngredientsMeasure(response.data.ingredients);
      } catch (error) {
        console.error(error);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  return (
    <div>
      {recipe && (
           <>
          <RecipePageHero title={recipe.title} description={recipe.description} time={recipe.time}  />
          <Wrapper>
            <RecipeInngredientsList ingredientsMeasure={ingredientsMeasure} />
            <RecipePreparation instructions={recipe.instructions} preview={recipe.preview} title={recipe.title}/>
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default RecipePage;
