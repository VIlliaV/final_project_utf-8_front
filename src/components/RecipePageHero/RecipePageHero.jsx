import React from 'react';
import {
    BackgroundWrapper,
    TitleRecipe,
    Description,
    Button,
    ClockWrapper,
    Time,
    TimeWrapper,
} from './RecipePageHero.styled';
import SvgIcon from '@mui/material/SvgIcon';

const RecipePageHero = ({ title, description, time }) => {
    return (
        <>
            <BackgroundWrapper>
                <TitleRecipe>{title}Salmon Avocado Salad</TitleRecipe>
                <Description>
                    {description}
                    Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered
                    on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon
                    vinaigrette.
                </Description>
                <Button>Add to favorite recipes</Button>
                <TimeWrapper>
                    <ClockWrapper>
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                                <g clip-path="url(#clip0_264_756)">
                                    <path
                                        d="M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00002C12.8327 3.77836 10.221 1.16669 6.99935 1.16669C3.77769 1.16669 1.16602 3.77836 1.16602 7.00002C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z"
                                        stroke="#23262A"
                                        stroke-width="1.3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M7 3.5V7L9.33333 8.16667"
                                        stroke="#23262A"
                                        stroke-width="1.3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_264_756">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </SvgIcon>
                    </ClockWrapper>
                    <Time> {time} min</Time>
                </TimeWrapper>
            </BackgroundWrapper>
        </>
    );
};

export default RecipePageHero;
