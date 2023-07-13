import React from 'react';
import { StyledH3, StyledPopularRecipe, StyledList } from './AddRecipeForm.styled';
import Banana_pancakes from '../../img/Banana_pancakes.jpg';
import Backed_salmon from '../../img/Baked_salmon.jpg';
import Sugar_pie from '../../img/Sugar_pie.jpg';
import Squash_linguine from '../../img/Squash_linguine.jpg';

export default function Popular() {
  return (
    <StyledPopularRecipe>
      <StyledH3>Popular recipe</StyledH3>
      <ul>
        <StyledList>
          <a href="#" alt="popular_recipe">
            <img src={Banana_pancakes} alt="banana pincakes" />
            <div>
              <h4>Banana Pincakes</h4>
              <p>In a bowl, mash the banana with a fork until it resembles a thick purée...</p>
            </div>
          </a>
        </StyledList>
        <StyledList>
          <a href="#" alt="popular_recipe">
            <img src={Sugar_pie} alt="squash" />
            <div>
              <h4>Squash linguine</h4>
              <p>Pasta is a type of food typically made from an unleavened dough of wheat flour...</p>
            </div>
          </a>
        </StyledList>
        <StyledList>
          <a href="#" alt="popular_recipe">
            <img src={Backed_salmon} alt="Baked" />
            <div>
              <h4>Baked salmon</h4>
              <p>Cook in boiling salted water for 10 mins...</p>
            </div>
          </a>
        </StyledList>
        <StyledList>
          <a href="#" alt="popular_recipe">
            <img src={Squash_linguine} alt="Sugar" />
            <div>
              <h4>Sugar Pie</h4>
              <p>Sugar pie is a dessert in northern French and Belgiancuisine, where it is called tarte...</p>
            </div>
          </a>
        </StyledList>
      </ul>
    </StyledPopularRecipe>
  );
}
