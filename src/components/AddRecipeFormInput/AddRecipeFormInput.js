import React from 'react';
import {Field} from 'redux-form';

const AddRecipeFormInput = ({nameOfClass, inputClass, name, type, placeholder}) => {
   return (  
      <label className={nameOfClass}>
         {name}:
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