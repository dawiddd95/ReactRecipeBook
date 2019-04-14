import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledEmptyList.js';

const EmptyList = ({text}) => {
   return (  
      <S.Wrapper>
         <S.Img></S.Img>
         <S.Title>Nothing!!</S.Title>
         <S.Subtitle>{text}</S.Subtitle>
      </S.Wrapper>
   );
}
 
export default EmptyList;

EmptyList.propTypes = {
   text: PropTypes.string.isRequired
}