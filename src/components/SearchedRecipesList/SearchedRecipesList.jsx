import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { NoResultWrapper, ListContainer } from './SearchedRecipesList.styled';

import noResultsImg from './no-results-img.webp';
import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';
import { store } from 'redux/store';

const token = store.getState().auth.token;
let value;

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const SearchedRecipesList = () => {
    const [searchParams] = useSearchParams();
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        const [currentParams] = Object.keys(Object.fromEntries([...searchParams]));
        value = searchParams.get(currentParams);
        if (!value) {
            return;
        }

        if (currentParams === 'query') {
            fetchData('search', value).then(data => setRecipeList(data));
            return;
        }
        fetchData('ingredients', value).then(data => setRecipeList(data));
    }, [searchParams]);

    const fetchData = async (query, value) => {
        try {
            const response = await axios.post(`/${query}`, { search: value });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {recipeList?.length > 0 ? (
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
                    {value ? <p>Try looking for something else...</p> : <p>Find recipes by title or ingredient</p>}
                </NoResultWrapper>
            )}
        </>
    );
};

export default SearchedRecipesList;
