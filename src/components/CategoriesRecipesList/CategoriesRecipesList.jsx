import { CategoryRecipeCard } from '../CategoryRecipeCard/CategoryRecipeCard';
import Loader from '../Loader/Loader';
import { CategoriesRecipesContainer, CategoryRecipeCardWrapper } from './CategoriesRecipesList.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

export const CategoriesRecipesList = ({ updateDataRecipiesError }) => {
  const [recipes, setRecipes] = useState([]);
  const currentCategory = useParams().categoryName.charAt(0).toUpperCase() + useParams().categoryName.slice(1);
  const [isLoading, setIsLoading] = useState(true);

  const getRecipesByCategory = async category => {
    try {
      const res = await axiosInstance.get(`/recipes/category/${category}`);
      return res.data;
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-right',
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getRecipesByCategory(currentCategory)
      .then(res => {
        if (res.length === 0) {
          updateDataRecipiesError(true);
          toast.error('We are sorry, there is not such category, chose one from the listed.', {
            position: 'top-right',
            duration: 5000,
          });
          return;
        }
        setRecipes(res);
        setIsLoading(false);
        updateDataRecipiesError(false);
      })
      .catch(error => {
        setIsLoading(false);
        updateDataRecipiesError(true);
      });
  }, [currentCategory, updateDataRecipiesError]);

  const shouldRender = recipes.length > 0;

  return (
    <CategoriesRecipesContainer>
      {isLoading && <Loader />}
      {shouldRender &&
        !isLoading &&
        recipes.map(({ _id: id, title, thumb }) => {
          return (
            <CategoryRecipeCardWrapper key={id}>
              <CategoryRecipeCard itemId={id} imageUrl={thumb} imageAlt={title} title={title}></CategoryRecipeCard>
            </CategoryRecipeCardWrapper>
          );
        })}
    </CategoriesRecipesContainer>
  );
};
