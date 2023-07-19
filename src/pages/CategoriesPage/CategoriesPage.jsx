import React from 'react';

import HeadContainer from '../../components/HeadContainer/HeadContainer';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
// import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
// import { CategoriesRecipesList } from '../../components/CategoriesRecipesList/CategoriesRecipesList';
// import { CategoriesPageContainer } from './CategoriesPage.styled';
import { Categories } from '../../components/Categories/Categories';

function CategoriesPage() {
  return (
    <HeadContainer>
      <MainPageTitle title="Categories"></MainPageTitle>
      <Categories></Categories>
    </HeadContainer>
  );
}

export default CategoriesPage;

// <HeadContainer>
//   <MainPageTitle title="Categories"></MainPageTitle>
//   <CategoriesList></CategoriesList>
//   <CategoriesPageContainer>
//     <CategoriesRecipesList></CategoriesRecipesList>
//   </CategoriesPageContainer>
// </HeadContainer>;
