import React from 'react';

import * as S from './StyledFormRecipeProperties';
import AddRecipeFormInput from '../AddRecipeFormInput/AddRecipeFormInput';

const FormRecipeProperties = () => {
   return (  
      <S.Wrapper>
         <AddRecipeFormInput
            properties={true}
            title='Preparation Time'
            name='preparationTime'
            type='text'
            placeholder=''
         /> 
         <AddRecipeFormInput
            properties={true}
            title='Cook Time'
            name='cookTime'
            type='text'
            placeholder=''
         />
         <AddRecipeFormInput
            properties={true}
            title='Total Time'
            name='totalTime'
            type='text'
            placeholder=''
         /> 
         <AddRecipeFormInput
            properties={true}
            title='Serves'
            name='serves'
            type='text'
            placeholder=''
         />
      </S.Wrapper>
   );
}
 
export default FormRecipeProperties;