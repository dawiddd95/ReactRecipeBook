import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

import deleteRecipe from '../../images/deleteRecipe.svg';
import likeRecipe from '../../images/like.svg';
import addToFavorite from '../../images/heart.svg';
import recipeImage from '../../images/recipe.jpg';


const MyRecipe = (props) => {
   const marginLeft = props.recipesAmount < 3 ? {'marginLeft': '40px'} : {'marginLeft': '0px'};
   const favoriteIcon = props.favorite ? likeRecipe : addToFavorite;
   const backgroundImage = !props.recipeImage ? {'backgroundImage': `url(${recipeImage})`} : 
      {'backgroundImage': `url(${props.recipeImage})`}
   
   return (  
      <div className='wrapper__recipe' style={marginLeft}>
         <div className='recipe__img' style={backgroundImage}></div>
         <p className='recipe__name' style={{'color': 'black'}}>                 
            {props.recipeTitle}
         </p>
         <div style={{'marginLeft': '20px','fontSize': '24px'}}>
            <StarRatingComponent
               name='' 
               value={props.starRating} 
               starCount={5} 
               emptyStarColor="#f3f3f3"
            />
         </div>
         <div className="buttons">
            <button className='recipe__button' style={{'marginTop': '20px'}}>
               VIEW RECIPE
            </button>
            <div className="buttons__icons">
               <img 
                  onClick={() => props.handleToggleFavoriteClick(props.lp)} 
                  src={favoriteIcon} 
                  alt="like"
               />
               <img 
                  onClick={() => props.handleShowDeleteModalClick(props.lp)} 
                  src={deleteRecipe} 
                  alt="delete"
               />
            </div>
         </div>   
      </div>
   );
}
 
export default MyRecipe;