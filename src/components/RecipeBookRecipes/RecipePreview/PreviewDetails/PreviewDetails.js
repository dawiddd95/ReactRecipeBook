import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './StyledPreviewDetails';

import {recipeToEditAction} from '../../../../actions/actions';

import RecipeHeader from '../RecipeHeader/RecipeHeader';
import RecipeProperties from '../RecipeProperties/RecipeProperties';
import RecipeDescription from '../RecipeDescription/RecipeDescription';
import RecipeList from '../RecipeList/RecipeList';
import RecipeNutrition from '../RecipeNutrition/RecipeNutrition';
import RecipeLink from '../RecipeLink/RecipeLink';
import RecipeComment from '../RecipeComment/RecipeComment';

class PreviewDetails extends Component {
   componentDidMount() {
      this.props.recipeToEdit(this.props.recipe)
   }

   render() {
      const {recipe} = this.props;
      
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
}

const mapDispatchToProps = dispatch => {
   return {
      recipeToEdit: (recipe) => dispatch(recipeToEditAction(recipe))
   }
}
 
PreviewDetails = connect(undefined, mapDispatchToProps)(PreviewDetails)

PreviewDetails.propTypes = {
   recipe: PropTypes.object.isRequired
}
 
export default PreviewDetails;

