import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as S from './StyledTrendingRecipeDetails.js';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Details from '../../../components/RecipeBookHome/Details/Details';


class TrendingRecipeDetails extends Component {
   render() {
      const filterRenderRecipe = this.props.recipe.filter(currentElement => { 
         if(currentElement.recipe_id === this.props.match.params.id) {
           return currentElement;
         }
      });
   
      if(this.props.recipe.length === 0) {
         return <Redirect to='/app/home' />
      }

      return (  
         <S.Wrapper>
            <SectionTitle 
               haveSelect={false}
               title={`TRENDING RECIPE`}               
            />
            <S.Link>
               <Link style={{'textDecoration': 'none'}} to='/app/home'>
                  <S.Span>&lsaquo;</S.Span>
                  BACK TO TRENDING RECIPES
               </Link>      
            </S.Link>
            <Details 
               recipe={filterRenderRecipe[0]}
            />
         </S.Wrapper>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipe: state.trendingRecipesReducer
   }
}

TrendingRecipeDetails = connect(mapStateToProps)(TrendingRecipeDetails)

export default TrendingRecipeDetails;