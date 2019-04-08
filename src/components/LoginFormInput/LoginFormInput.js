import React from 'react'
import {Field} from 'redux-form'

const LoginFormInput = ({name, content, type}) => {
   return (  
      <div className='loginForm__input'>
         <label htmlFor={name}>
            {content}
         </label>
         <Field name={name} component="input" type={type} />
      </div>
   );
}
 
export default LoginFormInput;