import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeLink';

const RecipeLink = ({title, link}) => {
   return (  
      <S.Wrapper>
         <S.Title>
            {link ? title : undefined}
         </S.Title>
         <S.Link href={link} target='__blank'>{link}</S.Link>
      </S.Wrapper>      
   );
}

RecipeLink.propTypes = {
   title: PropTypes.string,
   link: PropTypes.string
}
 
export default RecipeLink;
