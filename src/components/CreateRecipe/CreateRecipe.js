import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import CreateRecipeForm from '../../containers/CreateRecipeForm/CreateRecipeForm';

const CreateRecipe = () => {
   return (  
      <div>
         <SectionTitle 
               title='CREATE RECIPE'
               haveSelect={false}
         />
         <CreateRecipeForm />
      </div>
   );
}
 
export default CreateRecipe;