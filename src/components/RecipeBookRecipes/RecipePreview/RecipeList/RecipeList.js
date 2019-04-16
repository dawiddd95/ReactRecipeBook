import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeList';

const RecipeList = ({title, list, methods}) => {
   const listElements = list.map(currentElement => (
      <S.Li>
         {title === 'Ingredients' ? currentElement.ingredientValue : 
            currentElement.methodValue
         }
      </S.Li>
   ))

   return (  
      <S.Wrapper methods={methods}>
         <S.Title>
            {title}
         </S.Title>
         <S.OrderedList>
            {listElements}
         </S.OrderedList>
      </S.Wrapper>
   );
}
 
RecipeList.propTypes = {
   title: PropTypes.string.isRequired,
   list: PropTypes.array.isRequired,
   methods: PropTypes.string.isRequired
}

export default RecipeList;

