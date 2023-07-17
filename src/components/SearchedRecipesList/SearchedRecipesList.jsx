import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosInstance } from 'redux/auth/authOperations';

import toast from 'react-hot-toast';
import { NoResultWrapper, ListContainer, NoResultImg } from './SearchedRecipesList.styled';
import Loader from 'components/Loader/Loader';
import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';
import Paginator from 'components/Paginator/Paginator';

let value;


const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const [currentParams] = Object.keys(Object.fromEntries([...searchParams]));
    value = searchParams.get(currentParams);

    if (!value) {
      return;
    }

    if (currentParams === 'query') {
      fetchData('search', value).then(data => {
        setTotalPage(data.totalPages);
        setRecipeList(data.recipes);
      });
      return;
    }
    fetchData('ingredients', value).then(data => {
      setTotalPage(data.totalPages);
      setRecipeList(data.recipes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, currentPage]);

  const fetchData = async (query, value) => {
    setIsLoading(true);
    try {

      const response = await axiosInstance.get(`/${query}`, {
        params: {
          search: value,
          page: currentPage,
          limit: 8,
        },
      });

      setIsLoading(false);
      return response.data;
    } catch (error) {
      toast.error('Oops...Something went wrong. Try again');
      setRecipeList([]);
      setIsLoading(false);
    }
  };

  const handleCurrentPage = page => {
    setCurrentPage(page);
  };

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
          <Paginator totalPage={totalPage} page={currentPage} setCurrentPage={handleCurrentPage} />
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
