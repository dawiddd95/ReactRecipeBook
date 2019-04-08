import React from 'react';

import SectionTitle from '../../SectionTitle/SectionTitle';
import CreateRecipeForm from './CreateRecipeForm/CreateRecipeForm';

// dac buttony na dodanie i na cancel
// button add to ten niebieski button cancel to ta czerwien z api
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