import React from 'react'
import {Link} from 'react-router-dom';

import SectionTitle from '../SectionTitle/SectionTitle';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import AddRecipeButton from './AddRecipeButton/AddRecipeButton';
//import RecipesWrapper from './RecipesWrapper/RecipesWrapper';

const RecipeBookRecipes = () => {
   return (  
      <>
         <SectionTitle 
            title='RECIPES'
            haveSelect={true}
         />
         <SearchRecipe />
         <Link to='/app/createRecipe'>
            <AddRecipeButton />
         </Link>
         {/* <RecipesWrapper /> */}
      </>
   )
}
 
export default RecipeBookRecipes;