import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledPreviewDetails';

import RecipeHeader from '../RecipeHeader/RecipeHeader';
import RecipeProperties from '../RecipeProperties/RecipeProperties';
import RecipeDescription from '../RecipeDescription/RecipeDescription';
import RecipeList from '../RecipeList/RecipeList';
import RecipeNutrition from '../RecipeNutrition/RecipeNutrition';
import RecipeLink from '../RecipeLink/RecipeLink';
import RecipeComment from '../RecipeComment/RecipeComment';

const PreviewDetails = ({recipe}) => {
   return (  
      <S.Wrapper>
         <RecipeHeader
            img={recipe.recipeImage}
            title={recipe.recipeTitle}
            starRating={recipe.starRating}
         />
         <RecipeProperties 
            preparationTime={recipe.preparationTime}
            totalTime={recipe.totalTime}
            cookTime={recipe.cookTime}
            serves={recipe.serves}
         />
         <RecipeDescription 
            description={recipe.recipeDescription}
         />
         <S.ListWrapper>
            <RecipeList
               title='Ingredients' 
               list={recipe.ingredients}
               methods='false'
            />
            <RecipeList 
               title='Methods'
               list={recipe.method}
               methods='true'
            />
         </S.ListWrapper>
         <RecipeNutrition 
            nutrition={recipe.recipeNutrition}
         />
         <S.LinkWrapper>
            <RecipeLink 
               title='Recipe Article: '
               link={recipe.recipeArticle}
            />
            <RecipeLink 
               title='Recipe Video: '
               link={recipe.recipeVideo}
            />
         </S.LinkWrapper>
         <RecipeComment 
            comment={recipe.recipeComment}
         />      
      </S.Wrapper>
   );
}

PreviewDetails.propTypes = {
   recipe: PropTypes.object.isRequired
}
 
export default PreviewDetails;

