import React from 'react';

import { CategoriesHead } from '../../components/CategoriesHead/CategoriesHead';
import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import { CategoriesRecipesList } from '../../components/CategoriesRecipesList/CategoriesRecipesList';

function CategoriesPage() {
  return (
    // Temporary styles before general container is done. Remove than
    <div style={{ width: '375px', paddingLeft: '16px', paddingRight: '16px', marginLeft: 'auto', marginRight: 'auto' }}>
      <CategoriesHead></CategoriesHead>
      <CategoriesList></CategoriesList>
      <CategoriesRecipesList></CategoriesRecipesList>
    </div>
  );
}

export default CategoriesPage;
