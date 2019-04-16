import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeNutrition';

const RecipeNutrition = ({nutrition}) => {
   return (  
      <S.Wrapper>
         <S.Title>
            {nutrition ? 'Nutrition: ' : undefined}
         </S.Title>
         <S.Text>
            {nutrition}
         </S.Text>
      </S.Wrapper>      
   );
}

RecipeNutrition.propTypes = {
   nutrition: PropTypes.string
}
 
export default RecipeNutrition;