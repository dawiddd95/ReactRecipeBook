import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeDescription';

const RecipeDescription = ({description}) => {
   return (  
      <S.Wrapper>
        {description}
      </S.Wrapper>
   );
}

RecipeDescription.propTypes = {
   description: PropTypes.string
}
 
export default RecipeDescription;
