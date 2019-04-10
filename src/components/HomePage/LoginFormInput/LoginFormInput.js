import React from 'react'
import {Field} from 'redux-form'
import * as S from './StyledLoginFormInput'

const LoginFormInput = ({name, content, type}) => {
   return (  
      <S.Wrapper>
         <label htmlFor={name}>
            {content}
         </label>
         <Field name={name} component="input" type={type} />
      </S.Wrapper>
   );
}
 
export default LoginFormInput;