import React from 'react'

import './TrendingRecipes.scss';

import TrendingRecipeItem from '../TrendingRecipeItem/TrendingRecipeItem';

const TrendingRecipes = ({recipes}) => {
   const recipe = recipes.map(currentElement => (
      <TrendingRecipeItem 
         {...currentElement}
         key={currentElement.recipe_id}
      />
   ))

   return (  
      <div className='wrapper__recipes'>
         {recipe}
      </div>
   );
}
 
export default TrendingRecipes;