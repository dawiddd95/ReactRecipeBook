import React from 'react';
import {Field} from 'redux-form';

const RegisterFormCheckbox = ({error}) => {
   return (  
      <div className='registerForm__input registerForm__input--checkbox'>
         <Field   
            name="accept" 
            component="input" 
            type="checkbox" 
         />
         <label 
            style={!error ? {'color': 'red'} : {}} 
            htmlFor="accept"
         >
            Accept Terms Of Use
         </label>
      </div>
   );
}
 
export default RegisterFormCheckbox;