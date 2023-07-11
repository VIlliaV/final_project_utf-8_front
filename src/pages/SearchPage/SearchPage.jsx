import React from 'react';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import SearchBar from 'components/SerchBar/SerchBar';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import HeadContainer from 'components/HeadContainer/HeadContainer';

function SearchPage() {
    return (
        <div>
            <HeadContainer>
                <MainPageTitle title="Search" />
                <SearchBar />
                <SearchedRecipesList />
            </HeadContainer>
        </div>
    );
}

export default SearchPage;
