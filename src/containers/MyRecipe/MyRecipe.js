import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';

import deleteRecipe from '../../images/deleteRecipe.svg';
import likeRecipe from '../../images/like.svg';
import addToFavorite from '../../images/heart.svg';
import recipeImage from '../../images/recipe.jpg';


class MyRecipe extends Component {
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
      const marginLeft = this.props.recipesAmount < 3 ? {'marginLeft': '40px'} : {'marginLeft': '0px'};
      const favoriteIcon = this.props.favorite ? likeRecipe : addToFavorite;
      const favoriteMessage = this.props.addFavoriteMessage ? <p>Favorite recipe</p> : undefined;
      const backgroundImage = !this.props.recipeImage ? {'backgroundImage': `url(${recipeImage})`} : 
         {'backgroundImage': `url(${this.props.recipeImage})`}
   
      return (  
         <div className='wrapper__recipe' style={marginLeft}>
            <div className='recipe__img' style={backgroundImage}></div>
            <p className='recipe__name' style={{'color': 'black'}}>                 
               {this.props.recipeTitle}
            </p>
            <div style={{'marginLeft': '20px','fontSize': '24px'}}>
               <StarRatingComponent
                  name='' 
                  value={this.props.starRating} 
                  starCount={5} 
                  emptyStarColor="#f3f3f3"
               />
            </div>
            <div className="footer"> 
               <button className='recipe__button' style={{'marginTop': '20px'}}>
                  VIEW RECIPE
               </button>
               {favoriteMessage}
               <div className="buttons__icons">
                  <img 
                     onClick={() => this.props.handleToggleFavoriteClick(this.props.lp)} 
                     src={favoriteIcon} 
                     alt="like"
                  />
                  {this.props.delete ? <img 
                     onClick={() => this.props.handleShowDeleteModalClick(this.props.lp)} 
                     src={deleteRecipe} 
                     alt="delete"
                  /> : undefined}
               </div>
            </div>   
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipe: state.recipeReducer
   }
}

MyRecipe = connect(mapStateToProps)(MyRecipe);
 
export default MyRecipe;