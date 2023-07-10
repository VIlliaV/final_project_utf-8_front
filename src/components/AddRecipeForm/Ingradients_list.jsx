import * as React from 'react';
// import { MenuItem } from '@mui/material/';
import {
    IngredientsName,
    IngrediantsCountWeigth,
    IngrediantsWeigth,
    IngredientBtn,
    IngredianceList,
    StyledMenuItem,
} from './AddRecipeForm.styled';

const weigthName = [
    {
        value: 'tbs',
        label: 'tbs',
    },
    {
        value: 'tsp',
        label: 'tsp',
    },
    {
        value: 'kg',
        label: 'kg',
    },
    {
        value: 'g',
        label: 'g',
    },
];

export default function IngredientsList() {
    const [cook_time, setCook_time] = React.useState('');
    const handleChangeCookTime = event => {
        setCook_time(event.target.value);
    };
    const ingredients = [
        {
            value: 'Chicken',
            label: 'Chicken',
        },
        {
            value: 'Cheese',
            label: 'Cheese',
        },
        {
            value: 'Cheddar Cheese',
            label: 'Cheddar Cheese',
        },
        {
            value: 'Charlotte Potatoes',
            label: 'Charlotte Potatoes',
        },
        {
            value: 'Challots',
            label: 'Challots',
        },
        {
            value: 'Cherry',
            label: 'Cherry',
        },
    ];

    return (
        <IngredianceList>
            <IngredientsName id="outlined-select-currency" select defaultValue="">
                {ingredients.map(option => (
                    <StyledMenuItem key={option.value}>{option.label}</StyledMenuItem>
                ))}
            </IngredientsName>
            <IngrediantsCountWeigth InputLabelProps={{ shrink: true }} />
            <IngrediantsWeigth
                labelId="cooking_time"
                id="cooking-timeId"
                value={cook_time}
                onChange={handleChangeCookTime}
            >
                {weigthName.map(option => (
                    <StyledMenuItem value={option.value}>{option.value}</StyledMenuItem>
                ))}
            </IngrediantsWeigth>
            <IngredientBtn>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none">
                    <path
                        d="M15.625 4.875L4.375 16.125"
                        stroke="#333333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15.625 16.125L4.375 4.875"
                        stroke="#333333"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </IngredientBtn>
        </IngredianceList>
    );
}
