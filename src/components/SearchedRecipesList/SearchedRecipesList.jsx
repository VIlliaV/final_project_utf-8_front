import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { NoResultWrapper, ListContainer } from './SearchedRecipesList.styled';

import noResultsImg from './no-results-img.webp';
import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';
import { store } from 'redux/store';

const token = store.getState().auth.token;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const SearchedRecipesList = () => {
    const [searchParams] = useSearchParams();
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        const currentParams = Object.keys(Object.fromEntries([...searchParams]));
        if (currentParams.length === 0) {
            return;
        }

        const value = searchParams.get(...currentParams);

        if (value) {
            fetchData(...currentParams, value).then(data => setRecipeList(data));

            // return;
        }
        // const ingredientValue = searchParams.get('ingredient');
        // if (ingredientValue) {
        //     const recipes = fetchData(ingredientValue);
        //     const ingredient = ingredients.find(el => el.name?.toUpperCase() === ingredientValue?.toUpperCase().trim());
        //     if (!ingredient) {
        //         return;
        //     }
        //     const result = recipes.filter(recipe => recipe.ingredients.find(el => el.id === ingredient._id.$oid));
        //     setRecipeList(result);
        //     return;
        // }
    }, [searchParams]);

    const fetchData = async (query, value) => {
        try {
            const response = await axios.post(`/search`, { search: value });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {recipeList.length > 0 ? (
                <ListContainer>
                    {recipeList.map(({ _id, title, thumb }) => {
                        return (
                            <CategoryRecipeCard
                                key={_id}
                                itemId={_id}
                                imageUrl={thumb}
                                imageAlt={title}
                                title={title}
                            ></CategoryRecipeCard>
                        );
                    })}
                </ListContainer>
            ) : (
                <NoResultWrapper>
                    <img src={noResultsImg} alt="no results img" />
                    <p>Try looking for something else...</p>
                </NoResultWrapper>
            )}
        </>
    );
};

export default SearchedRecipesList;
