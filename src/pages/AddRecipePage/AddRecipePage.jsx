import React from 'react';
import CSS from './AddReceipePage.module.css';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import { StyledTextField, StyledLabel, IngredientBtn } from './AddRecipePage.styled';
import FileInput from '..//../components/AddRecipeForm/AddRecipeForm';
import HeadContainer from '../../components/HeadContainer/HeadContainer';
import CookCategoryGroup from '../../components/AddRecipeForm/cooktime&cotegory';
import FallowUs from '../../components/AddRecipeForm/FallowUs';
import Popular from '../../components/AddRecipeForm/PopularRecipe';
import RecipePreparation from '../../components/AddRecipeForm/RecipePreparation';

function AddRecipePage() {
    return (
        <HeadContainer>
            <div className={CSS.container}>
                <div className={CSS.test}>
                    <MainPageTitle title="Add recipe" />
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
                            <RecipePreparation />
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
