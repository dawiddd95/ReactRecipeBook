import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

import * as S from './StyledRegisterFormInput';

const RegisterFormInput = ({name, error, errorBorder, type}) => {
   return (  
      <S.Wrapper>
         <S.Label htmlFor={name}>
            {name}:
         </S.Label>
         <Field 
            style={!error ? errorBorder : {}} 
            name={name}
            component="input" 
            type={type} 
         />
      </S.Wrapper>
   );
}
 
export default RegisterFormInput;

RegisterFormInput.propTypes = {
   name: PropTypes.string.isRequired,
   error: PropTypes.bool.isRequired,
   errorBorder: PropTypes.object.isRequired,
   type: PropTypes.string.isRequired,
}