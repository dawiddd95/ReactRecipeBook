import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import * as S from './StyledRecipePreview';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PreviewDetails from '../../../components/RecipeBookRecipes/RecipePreview/PreviewDetails/PreviewDetails'; 

class RecipePreview extends Component {
   render() {
      const filterRenderRecipe = this.props.recipe.filter(currentElement => { 
         if(currentElement.lp === this.props.match.params.id) {
           return currentElement;
         }
      });
      
      if(this.props.recipe.length === 0) {
         return <Redirect to='/app/recipes' />
      }
      
      return (  
         <S.Wrapper>
            <SectionTitle 
               haveSelect={false}
               title={`RECIPE PREVIEW`}               
            />
            <PreviewDetails 
               recipe={filterRenderRecipe[0]}
            />
            <S.LinksWrapper>
               <Link to={`/app/recipes/recipe=${filterRenderRecipe[0].lp}/edit`} >
                  Edit Recipe   
               </Link> 
               <Link to='/app/recipes'>
                  Back To Recipes
               </Link>
            </S.LinksWrapper> 
         </S.Wrapper>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipe: state.recipeReducer
   }
}

RecipePreview = connect(mapStateToProps)(RecipePreview);

export default RecipePreview;