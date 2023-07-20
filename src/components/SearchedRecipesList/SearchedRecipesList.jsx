import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosInstance } from 'redux/auth/authOperations';
import toast from 'react-hot-toast';
import { ListContainer, SearchImg, SearchWrapper } from './SearchedRecipesList.styled';
import Loader from 'components/Loader/Loader';
import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';
import Paginator from 'components/Paginator/Paginator';
import NoResult from 'components/NoResult/NoResult';
import { CategoryRecipeCardWrapper } from 'components/CategoriesRecipesList/CategoriesRecipesList.styled';

let value;

const SearchedRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [recipeList, setRecipeList] = useState();
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
      setTotalPage(data?.totalPages);
      setRecipeList(data.recipes);
    });

    // if (recipeList.length === 0) {
    //   searchParams.delete(currentParams);
    //   console.log(value);
    // }
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
      setRecipeList();
      setIsLoading(false);
    }
  };

  const handleCurrentPage = page => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !recipeList && (
        <SearchWrapper>
          <SearchImg />
          <p>Find recipe by title or ingredient</p>
        </SearchWrapper>
      )}
      {!isLoading && recipeList?.length > 0 ? (
        <>
          <ListContainer>
            {recipeList.map(({ _id, title, thumb }) => {
              return (
                <CategoryRecipeCardWrapper key={_id}>
                  <CategoryRecipeCard
                    key={_id}
                    itemId={_id}
                    imageUrl={thumb}
                    imageAlt={title}
                    title={title}
                  ></CategoryRecipeCard>
                </CategoryRecipeCardWrapper>
              );
            })}
          </ListContainer>
          <Paginator totalPage={totalPage} page={currentPage} setCurrentPage={handleCurrentPage} />
        </>
      ) : (
        !isLoading && recipeList?.length === 0 && <NoResult />
      )}
    </>
  );
};

export default SearchedRecipesList;
