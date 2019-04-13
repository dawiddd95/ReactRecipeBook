import React from 'react'
import {Link} from 'react-router-dom';

import * as S from './StyledRecipeBookRecipes.js';

import SectionTitle from '../SectionTitle/SectionTitle';
import SearchRecipe from '../../containers/RecipeBookRecipes/SearchRecipe/SearchRecipe';
import MyRecipes from '../../containers/RecipeBookRecipes/MyRecipes/MyRecipes';

const RecipeBookRecipes = () => {
   return (  
      <>
         <SectionTitle 
            title='RECIPES'
            haveSelect={true}
         />
         <SearchRecipe />
         <Link to='/app/createRecipe'>
            <S.Button>
               Add New Recipe
            </S.Button>
         </Link>
         <MyRecipes />
      </>
   )
}
 
export default RecipeBookRecipes;