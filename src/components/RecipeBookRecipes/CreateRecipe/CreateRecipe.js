import React from 'react';

import SectionTitle from '../../SectionTitle/SectionTitle';
import CreateRecipeForm from '../../../containers/RecipeBookRecipes/CreateRecipeForm/CreateRecipeForm';

const CreateRecipe = () => {
   return (  
      <>
         <SectionTitle 
               title='CREATE RECIPE'
               haveSelect={false}
         />
         <CreateRecipeForm />
      </>
   );
}
 
export default CreateRecipe;