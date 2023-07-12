import { CategoryRecipeCard } from '../CategoryRecipeCard/CategoryRecipeCard';
import { CategoriesRecipesContainer, CategoryRecipeCardWrapper } from './CategoriesRecipesList.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

export const CategoriesRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const currentCategory = useParams().categoryName.charAt(0).toUpperCase() + useParams().categoryName.slice(1);
  const [isLoading, setIsLoading] = useState();
  console.log(currentCategory);

  const getRecipesByCategory = async category => {
    try {
      const config = {
        method: 'GET',
        url: BASE_URL + `/recipes/category/${category}`,
      };
      const res = await axios(config);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log('useeff');
    setIsLoading(true);
    getRecipesByCategory(currentCategory)
      .then(res => {
        console.log('response', res);
        setRecipes(res);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [currentCategory]);

  return (
    <CategoriesRecipesContainer>
      {recipes.map(({ _id: { $oid: id }, title, thumb }) => {
        return (
          <CategoryRecipeCardWrapper key={id}>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
              <CategoryRecipeCard itemId={id} imageUrl={thumb} imageAlt={title} title={title}></CategoryRecipeCard>
            )}
          </CategoryRecipeCardWrapper>
        );
      })}
    </CategoriesRecipesContainer>
  );
};
