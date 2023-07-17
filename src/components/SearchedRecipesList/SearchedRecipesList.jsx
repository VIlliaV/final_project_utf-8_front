import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { Pagination } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast from 'react-hot-toast';
import { NoResultWrapper, ListContainer, NoResultImg } from './SearchedRecipesList.styled';
import Loader from 'components/Loader/Loader';

import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';
import { store } from 'redux/store';
import Paginator from 'components/Paginator/Paginator';

const token = store.getState().auth.token;
let value;

// axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#EBF3D4',
//       contrastText: '#22252A',
//     },
//   },
// });

const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [recipeList, setRecipeList] = useState([]);
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    const [currentParams] = Object.keys(Object.fromEntries([...searchParams]));
    value = searchParams.get(currentParams);
    if (!value) {
      return;
    }

    if (currentParams === 'query') {
      fetchData('search', value).then(data => {
        setTotalPage(data.totalPage);
        setRecipeList(data.recipes);
      });
      return;
    }
    fetchData('ingredients', value).then(data => {
      setTotalPage(data.totalPage);
      setRecipeList(data.recipes);
    });
  }, [searchParams]);

  const fetchData = async (query, value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/${query}`, { search: value });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      toast.error('Ups...Something went wrong. Try again');
      setRecipeList([]);
      setIsLoading(false);
    }
  };

  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && recipeList?.length > 0 ? (
        <>
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
          <Paginator totalPage={totalPage} />
          {/* <PaginationWrapper>
            <ThemeProvider theme={theme}>
              <Pagination
                count={5}
                page={page}
                style={{ flexWrap: 'nowrap' }}
                color="primary"
                onChange={handleChange}
              />
            </ThemeProvider>
          </PaginationWrapper> */}
        </>
      ) : (
        !isLoading && (
          <NoResultWrapper>
            <NoResultImg />
            {value ? <p>Try looking for something else...</p> : <p>Find recipes by title or ingredient</p>}
          </NoResultWrapper>
        )
      )}
    </>
  );
};

export default SearchedRecipesList;
