import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NoResultWrapper, ListContainer } from './SearchedRecipesList.styled';

import noResultsImg from './no-results-img.webp';
import { CategoryRecipeCard } from 'components/CategoryRecipeCard/CategoryRecipeCard';

const recipes = require('../../back/recipes.json');
const ingredients = require('../../back/ingredients.json');

const SearchedRecipesList = () => {
    const [searchParams] = useSearchParams();
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        const value = searchParams.get('query');
        if (value) {
            const result = recipes.filter(recipe =>
                recipe.title.toUpperCase().trim().includes(value.toUpperCase().trim())
            );
            setRecipeList(result);
            return;
        }
        const ingredientValue = searchParams.get('ingredient');
        if (ingredientValue) {
            const ingredient = ingredients.find(el => el.name?.toUpperCase() === ingredientValue?.toUpperCase().trim());
            if (!ingredient) {
                return;
            }
            const result = recipes.filter(recipe => recipe.ingredients.find(el => el.id === ingredient._id.$oid));
            setRecipeList(result);
            return;
        }
    }, [searchParams]);
    return (
        <>
            {recipeList.length > 0 ? (
                <ListContainer>
                    {recipeList.map(({ _id: { $oid: id }, title, thumb }) => {
                        return (
                            <CategoryRecipeCard
                                key={id}
                                itemId={id}
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
