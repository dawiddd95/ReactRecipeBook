import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledFilterButton';

const FilterButton = ({text, type, handleChangeRecipesType}) => {
   return (  
      <S.Button onClick={() => handleChangeRecipesType(type)}>
         {text}
      </S.Button>   
   );
}
 
export default FilterButton;

FilterButton.propTypes = {
   text: PropTypes.string.isRequired,
   type: PropTypes.string,
   handleChangeRecipesType: PropTypes.func.isRequired
}