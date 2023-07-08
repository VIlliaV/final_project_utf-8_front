import React from 'react';

import { CategoriesHeader } from '../../components/CategoriesHeader/CategoriesHeader';
import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import { CategoriesRecipesList } from '../../components/CategoriesRecipesList/CategoriesRecipesList';

function CategoriesPage() {
  return (
    <div>
      <CategoriesHeader></CategoriesHeader>
      <CategoriesList></CategoriesList>
      <CategoriesRecipesList></CategoriesRecipesList>
    </div>
  );
}

export default CategoriesPage;
