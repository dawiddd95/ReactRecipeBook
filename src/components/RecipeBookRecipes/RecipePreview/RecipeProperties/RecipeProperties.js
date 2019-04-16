import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeProperties';
import time from '../../../../images/preparationTime.svg';
import servesIcon from '../../../../images/serves.svg';

import RecipeProperty from '../RecipeProperty/RecipeProperty';

const RecipeProperties = ({preparationTime, totalTime, cookTime, serves}) => {
   return (  
      <S.Wrapper>
         <RecipeProperty 
            title='Preparation Time'
            img={time}
            text={preparationTime}
         />
         <RecipeProperty 
            title='Cook Time'
            img={time}
            text={cookTime}
         />
         <RecipeProperty 
            title='Total Time'
            img={time}
            text={totalTime}
         />
         <RecipeProperty 
            title='Serves'
            img={servesIcon}
            text={serves}
         />
      </S.Wrapper>
   );
}

RecipeProperties.propTypes = {
   preparationTime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   totalTime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   cookTime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   serves: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
}
 
export default RecipeProperties;
