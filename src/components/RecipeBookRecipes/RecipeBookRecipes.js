import React from 'react'
import {Link} from 'react-router-dom';

import './RecipeBookRecipes.scss';

import SectionTitle from '../SectionTitle/SectionTitle';
import SearchRecipe from '../SearchRecipe/SearchRecipe';
import FormButton from '../FormButton/FormButton';
import MyRecipesRouters from '../../Routers/MyRecipesRouters';

const RecipeBookRecipes = () => {
   return (  
      <>
         <SectionTitle 
            title='RECIPES'
            haveSelect={true}
         />
         <SearchRecipe />
         <Link to='/app/createRecipe'>
            <FormButton 
               nameOfClass='addButton__button'
               text='Add New Recipe'
            />
         </Link>
         <MyRecipesRouters />
      </>
   )
}
 
export default RecipeBookRecipes;