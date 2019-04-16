import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

import * as S from './StyledRecipeHeader';
import defaultImg from '../../../../images/recipe.jpg';

const RecipeHeader = ({img, title, starRating}) => {
   const backgroundImage = img ? {'backgroundImage': `url(${img})`} : {'backgroundImage': `url(${defaultImg})`};

   return (  
      <S.Wrapper style={backgroundImage}>
         <S.ImgFooter>
            <S.Paragraph> 
               {title}
            </S.Paragraph>
            <S.StarRating> 
               <StarRatingComponent
                  name='' 
                  value={starRating} 
                  starCount={5} 
                  emptyStarColor="#f3f3f3"
               />
            </S.StarRating>
         </S.ImgFooter> 
      </S.Wrapper>
   );
}
 
RecipeHeader.propTypes = {
   img: PropTypes.string,
   title: PropTypes.string.isRequired,
   starRating: PropTypes.number
}

export default RecipeHeader;