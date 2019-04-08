import React from 'react'

import SectionTitle from '../SectionTitle/SectionTitle';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import RecipesWrapper from './RecipesWrapper/RecipesWrapper';

const RecipeBookRecipes = () => {
   return (  
      <>
         <SectionTitle 
            title='RECIPES'
            haveSelect={true}
         />
         <SearchRecipe />
         <RecipesWrapper />
      </>
   );
}
 
export default RecipeBookRecipes;