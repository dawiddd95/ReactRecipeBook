import React from 'react'

import './Recipes.scss';

import RecipeItem from '../RecipeItem/RecipeItem';

const Recipes = ({recipes}) => {
   const recipe = recipes.map(currentElement => (
      <RecipeItem 
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
 
export default Recipes;