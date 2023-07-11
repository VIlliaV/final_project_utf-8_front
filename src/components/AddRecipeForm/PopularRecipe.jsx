import React, { Component, useState } from 'react';
import { StyledH3, StyledPopularRecipe } from './AddRecipeForm.styled';
import Banana_pancakes from '../../img/Banana_pancakes.jpg';
import Backed_salmon from '../../img/Baked_salmon.jpg';
import Sugar_pie from '../../img/Sugar_pie.jpg';
import Squash_linguine from '../../img/Squash_linguine.jpg';

export default function Popular() {
    return (
        <StyledPopularRecipe>
            <StyledH3>Popular recipe</StyledH3>
            <ul>
                <li>
                    <img src={Banana_pancakes} alt="banana pincakes" />
                    <div>
                        <h3>Banana Pincakes</h3>
                        <p>In a bowl, mash the banana with a fork until it resembles a thick purée...</p>
                    </div>
                </li>
                <li>
                    <img src={Sugar_pie} alt="squash" />
                    <div>
                        <h3>Squash linguine</h3>
                        <p>Pasta is a type of food typically made from an unleavened dough of wheat flour...</p>
                    </div>
                </li>
                <li>
                    <img src={Backed_salmon} alt="Baked" />
                    <div>
                        <h3>Baked salmon</h3>
                        <p>Cook in boiling salted water for 10 mins...</p>
                    </div>
                </li>
                <li>
                    <img src={Squash_linguine} alt="Sugar" />
                    <div>
                        <h3>Sugar Pie</h3>
                        <p>Sugar pie is a dessert in northern French and Belgiancuisine, where it is called tarte...</p>
                    </div>
                </li>
            </ul>
        </StyledPopularRecipe>
    );
}
