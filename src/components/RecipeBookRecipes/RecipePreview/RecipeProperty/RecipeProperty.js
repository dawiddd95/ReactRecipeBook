import React from 'react';
import * as S from './StyledRecipeProperty';
import PropTypes from 'prop-types';

const RecipeProperty = ({title, img, text}) => {
   return (  
      <S.Wrapper>
         <S.Title>
            {title}
         </S.Title>
         <S.Img src={img} alt=""/>
         {text}
      </S.Wrapper>
   );
}

RecipeProperty.propTypes = {
   title: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
   text: PropTypes.string
}
 
export default RecipeProperty;