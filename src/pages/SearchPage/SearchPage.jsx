import React from 'react';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import SearchBar from 'components/SerchBar/SerchBar';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
// import { Title } from './SearchPage.styled';

function SearchPage() {
  return (
    <div>
      <MainPageTitle title="Search" />
      {/* <Title>Search</Title> */}
      <SearchBar />
      <SearchedRecipesList />
    </div>
  );
}

export default SearchPage;
