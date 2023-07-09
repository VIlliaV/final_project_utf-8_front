import React from 'react';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import SearchBar from 'components/SerchBar/SerchBar';
import { Title } from './SearchPage.styled';

function SearchPage() {
  return (
    <div>
      <Title>Search</Title>
      <SearchBar />
      <SearchedRecipesList />
    </div>
  );
}

export default SearchPage;
