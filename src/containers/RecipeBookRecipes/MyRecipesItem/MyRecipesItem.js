import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as S from './StyledMyRecipesItem';

import deleteRecipe from '../../../images/deleteRecipe.svg';
import likeRecipe from '../../../images/like.svg';
import addToFavorite from '../../../images/heart.svg';
import recipeImage from '../../../images/recipe.jpg';


class MyRecipesItem extends Component {
   showAddToFavoriteMessage = () => {
      const recipe = this.props.recipe.map(currentElement => {
         if(currentElement.addFavoriteMessage) {
            return true
         }
         return currentElement
      })

      return recipe;
   }

   render() {  
      const backgroundImage = !this.props.recipeImage ? {'backgroundImage': `url(${recipeImage})`} : 
         {'backgroundImage': `url(${this.props.recipeImage})`}
   
      return (  
         <S.Wrapper>
            <S.Img style={backgroundImage}></S.Img>
            <S.Paragraph>{this.props.recipeTitle}</S.Paragraph>
            <S.StarRating>
               <StarRatingComponent
                  name='' 
                  value={this.props.starRating} 
                  starCount={5} 
                  emptyStarColor="#f3f3f3"
               />
            </S.StarRating>
            <S.Footer> 
               <Link style={{'textDecoration': 'none'}} to='ssss'>
                  VIEW RECIPE
               </Link>
               {this.props.addFavoriteMessage ? <S.Paragraph footer>Favorite recipe</S.Paragraph> : undefined}
               <S.ButtonsWrapper>
                  <S.ButtonImg footer
                     onClick={() => this.props.handleToggleFavoriteClick(this.props.lp)} 
                     src={this.props.favorite ? likeRecipe : addToFavorite} 
                     alt="like"
                  />
                  {this.props.delete ? <S.ButtonImg footer
                     onClick={() => this.props.handleShowDeleteModalClick(this.props.lp)} 
                     src={deleteRecipe} 
                     alt="delete"
                  /> : undefined}
               </S.ButtonsWrapper>
            </S.Footer>   
         </S.Wrapper>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipe: state.recipeReducer
   }
}

MyRecipesItem = connect(mapStateToProps)(MyRecipesItem);
 
export default MyRecipesItem;