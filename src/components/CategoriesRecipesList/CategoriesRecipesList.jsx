import { CategoryRecipeCard } from '../CategoryRecipeCard/CategoryRecipeCard';
import Loader from '../Loader/Loader';
import { CategoriesRecipesContainer, CategoryRecipeCardWrapper } from './CategoriesRecipesList.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { axiosInstance } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

const BASE_URL = 'https://final-project-utf-8-backend.onrender.com';

export const CategoriesRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const currentCategory = useParams().categoryName.charAt(0).toUpperCase() + useParams().categoryName.slice(1);
  const [isLoading, setIsLoading] = useState(true);
  const [dataError, setDataError] = useState(false);

  const getRecipesByCategory = async category => {
    try {
      const config = {
        method: 'GET',
        url: BASE_URL + `/recipes/category/${category}`,
      };
      const res = await axiosInstance(config);
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
          setDataError(true);
          // alert('Ooops, there are no items');
          toast.error('We are sorry, there is not such category, chose one from the listed.', {
            position: 'top-right',
            duration: 5000,
          });
          return;
        }
        setRecipes(res);
        setIsLoading(false);
        setDataError(false);
      })
      .catch(error => {
        setIsLoading(false);
        setDataError(true);
        console.log(error);
      });
  }, [currentCategory]);

  const shouldRender = recipes.length > 0;

  return (
    <CategoriesRecipesContainer>
      {dataError && <div>Error!!!</div>}
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
