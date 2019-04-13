import React from 'react'

import * as S from './StyledTrendingRecipes.js';

import TrendingRecipeItem from '../TrendingRecipeItem/TrendingRecipeItem';

const TrendingRecipes = ({recipes}) => {
   const recipe = recipes.map(currentElement => (
      <TrendingRecipeItem 
         {...currentElement}
         key={currentElement.recipe_id}
      />
   ))

   return (  
      <S.Wrapper>
         {recipe}
      </S.Wrapper>
   );
}
 
export default TrendingRecipes;