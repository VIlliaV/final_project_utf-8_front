import { NoResultWrapper } from './SearchedRecipesList.styled';
import noResultsImg from './no-results-img.webp';

const SearchedRecipesList = () => {
  return (
    <NoResultWrapper>
      <img src={noResultsImg} alt="no results img" />
      <p>Try looking for something else...</p>
    </NoResultWrapper>
  );
};

export default SearchedRecipesList;
