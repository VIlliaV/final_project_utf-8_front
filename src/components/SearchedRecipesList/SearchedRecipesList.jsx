import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { NoResultWrapper, ListContainer } from './SearchedRecipesList.styled';
import Loader from 'components/Loader/Loader';
import noResultsImg from '../../img/no-results-img.webp';
import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';
import { store } from 'redux/store';

// import ingredients from '../../back/ingredients.json';
// import recepies from '../../back/recipes.json';

const token = store.getState().auth.token;
let value;

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const [currentParams] = Object.keys(Object.fromEntries([...searchParams]));
    value = searchParams.get(currentParams);
    if (!value) {
      return;
    }

    // const { _id } = ingredients.find(item => item.name.toUpperCase() === value.toUpperCase().trim());
    // const result = recepies.filter(item => item.ingredients.find(item => item.id === _id.$oid));
    if (currentParams === 'query') {
      fetchData('search', value).then(data => setRecipeList(data));
      return;
    }
    fetchData('ingredients', value).then(data => setRecipeList(data));
    // .then(setIsLoading(false));
  }, [searchParams]);

  const fetchData = async (query, value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/${query}`, { search: value });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      toast.error('Ups...Something went wrong. Try again');
      setIsLoading(false);
    }
  };

  // const NoResult = !isLoading ? (
  //   <NoResultWrapper>
  //     <img src={noResultsImg} alt="no results img" />
  //     {value ? <p>Try looking for something else...</p> : <p>Find recipes by title or ingredient</p>}
  //   </NoResultWrapper>
  // ) : null;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && recipeList?.length > 0 ? (
        <ListContainer>
          {recipeList.map(({ _id, title, thumb }) => {
            return (
              <CategoryRecipeCard
                key={_id}
                itemId={_id}
                imageUrl={thumb}
                imageAlt={title}
                title={title}
              ></CategoryRecipeCard>
            );
          })}
        </ListContainer>
      ) : (
        !isLoading && (
          <NoResultWrapper>
            <img src={noResultsImg} alt="no results img" />
            {value ? <p>Try looking for something else...</p> : <p>Find recipes by title or ingredient</p>}
          </NoResultWrapper>
        )
      )}
      <Toaster />
    </>
  );
};

export default SearchedRecipesList;
