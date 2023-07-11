import React, { Component, useState } from 'react';
import { nanoid } from 'nanoid';
import {
    IngredientsName,
    IngrediantsCountWeigth,
    IngrediantsWeigth,
    IngredientBtn,
    IngredianceList,
    StyledNativeSelect,
    BootstrapInput,
    StyledIngredientList,
    StyledFormControl,
} from './AddRecipeForm.styled';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

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

export default function IngredientsList() {
    const [name, setName] = useState('');
    const [wegth, setWegth] = useState('');

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeWegth = event => {
        setWegth(event.target.value);
    };

    // const [cook_time, setCook_time] = React.useState('');

    // const handleChangeCookTime = event => {
    //     setCook_time(event.target.value);
    // };

    return (
        <li key={nanoid()}>
            <StyledIngredientList>
                <StyledFormControl sx={{ m: 1 }} variant="standard">
                    <StyledNativeSelect
                        id="demo-customized-select-native"
                        value={name}
                        onChange={handleChangeName}
                        input={<BootstrapInput />}
                    >
                        {ingredients.map(el => (
                            <option key={el.value} value={el.value}>
                                {el.value}
                            </option>
                        ))}
                    </StyledNativeSelect>
                </StyledFormControl>

                {/* <InputLabel htmlFor="demo-customized-textbox">count weigth</InputLabel> */}
                <BootstrapInput id="demo-customized-textbox" heigth="20px" />

                <StyledFormControl sx={{ m: 1 }} variant="standard">
                    {/* <InputLabel htmlFor="demo-customized-select-native">weigth name</InputLabel> */}
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={wegth}
                        onChange={handleChangeWegth}
                        input={<BootstrapInput />}
                    >
                        <option aria-label="None" defaultValue="kg" />
                        {weigthName.map(el => (
                            <option key={el.value} value={el.value}>
                                {el.value}
                            </option>
                        ))}
                    </NativeSelect>
                </StyledFormControl>
                <IngredientBtn>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none">
                        <path
                            d="M15.625 4.875L4.375 16.125"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.625 16.125L4.375 4.875"
                            stroke="#333333"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </IngredientBtn>
            </StyledIngredientList>

            {/* <div>
                <IngredientsName id="outlined-select-currency" select="true" defaultValue="">
                    
                </IngredientsName>
                <IngrediantsCountWeigth InputLabelProps={{ shrink: true }} />
                <IngrediantsWeigth
                    labelId="cooking_time"
                    id="cooking-timeId"
                    value={cook_time}
                    onChange={handleChangeCookTime}
                >
                    {weigthName.map(option => (
                        <StyledMenuItem key={option.value} value={option.value} defaultValue="kg">
                            {option.value}
                        </StyledMenuItem>
                    ))}
                </IngrediantsWeigth>
                
            </div> */}
        </li>
    );
}
