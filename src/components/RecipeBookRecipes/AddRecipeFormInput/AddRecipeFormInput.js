import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

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

AddRecipeFormInput.propTypes = {
   properties: PropTypes.bool,
   title: PropTypes.string,
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string
}