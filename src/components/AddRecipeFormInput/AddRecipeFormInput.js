import React from 'react';
import {Field} from 'redux-form';
import * as S from './StyledComponent';

const AddRecipeFormInput = ({nameOfClass, inputClass, title, name, type, placeholder}) => {
   return (  
      <label className={nameOfClass}>
         {title}:
            <Field 
               className={inputClass}
               name={name}
               component="input" 
               type={type} 
               placeholder={placeholder}
            />
      </label>
   );
}
 
export default AddRecipeFormInput;