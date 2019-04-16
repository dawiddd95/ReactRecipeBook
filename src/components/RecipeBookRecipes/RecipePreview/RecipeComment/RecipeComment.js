import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeComment';

const RecipeComment = ({comment}) => {
   return (  
      <S.Wrapper>
         {comment}
      </S.Wrapper>
   );
}

RecipeComment.propTypes = {
   comment: PropTypes.string
}
 
export default RecipeComment;