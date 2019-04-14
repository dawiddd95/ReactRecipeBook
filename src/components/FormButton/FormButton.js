import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledFormButton';

const FormButton = ({text}) => {
   return (  
      <S.Button type='submit'>
         {text}
      </S.Button>
   );
}

FormButton.propTypes = {
   text: PropTypes.string.isRequired
}
 
export default FormButton;
