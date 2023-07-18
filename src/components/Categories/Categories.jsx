import { useState } from 'react';
import { CategoriesPageContainer } from './Categories.styled';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { CategoriesRecipesList } from '../CategoriesRecipesList/CategoriesRecipesList';
import NoResult from '../NoResult/NoResult';

export const Categories = () => {
  const [dataCategoriesError, setDataCategoriesError] = useState(false);
  const [dataRecipiesError, setDataRecipiesError] = useState(false);

  const updateDataCategoriesError = data => {
    setDataCategoriesError(data);
  };

  const updateDataRecipiesError = data => {
    setDataRecipiesError(data);
  };

  const renderError = dataCategoriesError || dataRecipiesError;

  return (
    <>
      {renderError && <NoResult></NoResult>}
      {!renderError && (
        <CategoriesList
          dataCategoriesError={dataCategoriesError}
          updateDataCategoriesError={updateDataCategoriesError}
        ></CategoriesList>
      )}
      {!renderError && (
        <CategoriesPageContainer>
          <CategoriesRecipesList updateDataRecipiesError={updateDataRecipiesError}></CategoriesRecipesList>
        </CategoriesPageContainer>
      )}
    </>
  );
};
