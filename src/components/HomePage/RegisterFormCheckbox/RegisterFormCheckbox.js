import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

import * as S from './StyledRegisterFormCheckbox';

const RegisterFormCheckbox = ({error}) => {
   return (  
      <S.Wrapper>
         <Field   
            name="accept" 
            component="input" 
            type="checkbox" 
         />
         <S.Label htmlFor="accept" style={!error ? {'color': 'red'} : {}} >
            Accept Terms Of Use
         </S.Label>
      </S.Wrapper>
   );
}
 
export default RegisterFormCheckbox;

RegisterFormCheckbox.propTypes = {
   error: PropTypes.bool
}