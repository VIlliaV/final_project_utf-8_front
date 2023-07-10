import React from 'react';

import HeadContainer from '../../components/HeadContainer/HeadContainer';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import { CategoriesList } from '../../components/CategoriesList/CategoriesList';
import { CategoriesRecipesList } from '../../components/CategoriesRecipesList/CategoriesRecipesList';
import { CategoriesPageContainer } from './CategoriesPage.styled';

function CategoriesPage() {
    return (
        // Temporary styles before general container is done. Remove than
        // <div style={{ width: '375px', paddingLeft: '16px', paddingRight: '16px', marginLeft: 'auto', marginRight: 'auto' }}>
        // </div>

        <HeadContainer>
            <MainPageTitle title="Categories"></MainPageTitle>
            <CategoriesList></CategoriesList>
            <CategoriesPageContainer>
                <CategoriesRecipesList></CategoriesRecipesList>
            </CategoriesPageContainer>
        </HeadContainer>
    );
}

export default CategoriesPage;
