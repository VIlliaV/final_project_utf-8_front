import React from 'react';
import CSS from './AddReceipePage.module.css';

import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import { StyledTextField, StyledLabel, StyledH1, StyledH3, IngredientBtn } from './AddRecipePage.styled';

import FileInput from '..//../components/AddRecipeForm/AddRecipeForm';
import HeadContainer from '../../components/HeadContainer/HeadContainer';
import CookCategoryGroup from '../../components/AddRecipeForm/cooktime&cotegory';
import FallowUs from '../../components/AddRecipeForm/FallowUs';
import Popular from '../../components/AddRecipeForm/PopularRecipe';

function AddRecipePage() {
    return (
        <HeadContainer>
            <div className={CSS.container}>
                <div className={CSS.test}>
                    <MainPageTitle />
                    <StyledH1>Add recipe</StyledH1>
                    <div className={CSS.ZAGALOM}>
                        <div className={CSS.lef_column}>
                            <div className={CSS.section1}>
                                <div className={CSS.add_Recipe_item_inputs}>
                                    <label htmlFor="img_recipe">
                                        <FileInput />
                                    </label>
                                    <div className={CSS.add_Recipe__inputs}>
                                        <StyledLabel htmlFor="item_title">
                                            <StyledTextField
                                                id="item_title"
                                                label="Enter item title"
                                                variant="filled"
                                            />
                                        </StyledLabel>
                                        <StyledLabel htmlFor="about_recipe">
                                            <StyledTextField
                                                id="item_title"
                                                label="Enter about recipe"
                                                variant="filled"
                                            />
                                        </StyledLabel>
                                        <CookCategoryGroup />
                                    </div>
                                </div>
                            </div>
                            <IngredientBtn />

                            <div className={CSS.section3}>
                                <StyledH3>Recipe Preparation</StyledH3>

                                <input type="text" placeholder="Enter recipe" className={CSS.Recipe_enter} />
                                <button className={CSS.btn_add}>
                                    <h3 className={CSS.btn_add__text}>Add</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="161"
                                        height="70"
                                        viewBox="0 0 161 70"
                                        fill="none"
                                    >
                                        <path
                                            d="M0 23.3333C0 10.4467 10.4467 0 23.3333 0H114.333C140.107 0 161 20.8934 161 46.6667C161 59.5533 150.553 70 137.667 70H46.6667C20.8934 70 0 49.1066 0 23.3333Z"
                                            fill="#22252A"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={CSS.right_column}>
                            <FallowUs />
                            <Popular />
                        </div>
                    </div>
                </div>
            </div>
        </HeadContainer>
    );
}

export default AddRecipePage;
