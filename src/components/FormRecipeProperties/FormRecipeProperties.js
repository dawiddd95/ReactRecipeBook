import React from 'react';

import AddRecipeFormInput from '../AddRecipeFormInput/AddRecipeFormInput';

const FormRecipeProperties = () => {
   return (  
      <div className='form__recipeProperties'>
         <AddRecipeFormInput
            nameOfClass='recipeProperties__preparationTime'
            inputClass='preparationTime__input recipeProperties__input'
            title='Preparation Time'
            name='preparationTime'
            type='text'
            placeholder=''
         /> 
         <AddRecipeFormInput
            nameOfClass='recipeProperties__cookTime'
            inputClass='cookTime__input recipeProperties__input'
            title='Cook Time'
            name='cookTime'
            type='text'
            placeholder=''
         />
         <AddRecipeFormInput
            nameOfClass='recipeProperties__totalTime'
            inputClass='totalTime__input recipeProperties__input'
            title='Total Time'
            name='totalTime'
            type='text'
            placeholder=''
         /> 
         <AddRecipeFormInput
            nameOfClass='recipeProperties__serves'
            inputClass='serves__input recipeProperties__input'
            title='Serves'
            name='serves'
            type='text'
            placeholder=''
         />
      </div>
   );
}
 
export default FormRecipeProperties;