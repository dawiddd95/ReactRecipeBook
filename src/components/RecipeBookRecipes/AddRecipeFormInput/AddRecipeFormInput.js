import React from 'react';
import {Field} from 'redux-form';
import * as S from './StyledAddRecipeFormInput';

const AddRecipeFormInput = ({properties, title, name, type, placeholder}) => {
   return (  
      <S.Label properties={properties}>
         {title}:
            <Field 
               name={name}
               component="input" 
               type={type} 
               placeholder={placeholder}
            />
      </S.Label>
   );
}
 
export default AddRecipeFormInput;