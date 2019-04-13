import React from 'react';

import * as S from './StyledFilterButton';

const FilterButton = ({text, type, handleChangeRecipesType}) => {
   return (  
      <S.Button onClick={() => handleChangeRecipesType(type)}>
         {text}
      </S.Button>   
   );
}
 
export default FilterButton;