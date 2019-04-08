import React from 'react';

import AddRecipeFormInput from '../AddRecipeFormInput/AddRecipeFormInput';

const FormRecipeProperties = () => {
   return (  
      <div className='form__recipeProperties'>
         <AddRecipeFormInput
            nameOfClass='recipeProperties__preparationTime'
            inputClass='preparationTime__input recipeProperties__input'
            name='Preparation Time'
            type='text'
            placeholder=''
         /> 
         <AddRecipeFormInput
            nameOfClass='recipeProperties__cookTime'
            inputClass='cookTime__input recipeProperties__input'
            name='Cook Time'
            type='text'
            placeholder=''
         />
         <AddRecipeFormInput
            nameOfClass='recipeProperties__totalTime'
            inputClass='totalTime__input recipeProperties__input'
            name='Total Time'
            type='text'
            placeholder=''
         /> 
         <AddRecipeFormInput
            nameOfClass='recipeProperties__serves'
            inputClass='serves__input recipeProperties__input'
            name='Serves'
            type='text'
            placeholder=''
         />
      </div>
   );
}
 
export default FormRecipeProperties;