import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './StyledTrendingRecipeItem.js';

const TrendingRecipeItem = (props) => {
   const recipeImg = {'backgroundImage': `url(${props.image_url})`}
   
   return (
      <S.Wrapper>  
         <S.Img style={recipeImg}></S.Img>
         <S.RecipeName>{props.title}</S.RecipeName>
         <S.PublisherWrapper>
            <S.Publisher>Publisher: </S.Publisher>
            <S.PublisherName>{props.publisher}</S.PublisherName>
         </S.PublisherWrapper>
         <S.Link>
            <Link style={{'textDecoration': 'none'}} to={`/app/home/trending recipe=${props.recipe_id}`}>
               VIEW RECIPE
            </Link>
         </S.Link>
      </S.Wrapper>
   );
}
 
export default TrendingRecipeItem;

TrendingRecipeItem.propTypes = {
   title: PropTypes.string,
   publisher: PropTypes.string,
   recipe_id: PropTypes.string
}