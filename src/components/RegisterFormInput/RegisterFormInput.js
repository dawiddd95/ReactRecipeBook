import React from 'react'
import {Field} from 'redux-form';

const RegisterFormInput = ({name, error, errorBorder, type}) => {
   return (  
      <div className='registerForm__input'>
         <label htmlFor={name}>{name}:</label>
            <Field 
               style={!error ? errorBorder : {}} 
               name={name}
               component="input" 
               type={type} 
            />
      </div>
   );
}
 
export default RegisterFormInput;