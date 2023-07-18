import { useState } from 'react';
import { CategoriesPageContainer } from './Categories.styled';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { CategoriesRecipesList } from '../CategoriesRecipesList/CategoriesRecipesList';
import NoResult from '../NoResult/NoResult';

export const Categories = () => {
  const [dataError, setDataError] = useState(false);

  const updateDataErrorState = data => {
    setDataError(data);
  };

  return (
    <>
      {dataError && <NoResult></NoResult>}
      {!dataError && (
        <CategoriesList dataError={dataError} updateDataErrorState={updateDataErrorState}></CategoriesList>
      )}
      {!dataError && (
        <CategoriesPageContainer>
          <CategoriesRecipesList
            dataError={dataError}
            updateDataErrorState={updateDataErrorState}
          ></CategoriesRecipesList>
        </CategoriesPageContainer>
      )}
    </>
  );
};
