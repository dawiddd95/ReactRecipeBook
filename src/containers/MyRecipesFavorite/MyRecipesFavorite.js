import React, {Component} from 'react';
import {connect} from 'react-redux';

import {favoriteRecipeAction} from '../../actions/actions';
import './MyRecipes.scss';
import MyRecipe from '../MyRecipe/MyRecipe';
import EmptyList from '../../components/EmptyList/EmptyList';

class MyRecipesFavorite extends Component {

   handleToggleFavoriteClick = (lp) => {
      this.showFavoriteAddMessage(lp);
      this.props.favoriteRecipe(lp);
   };
   showFavoriteAddMessage = (lp) => {
      this.props.recipes.map(currentElement => {
         if(currentElement.lp === lp) {
            currentElement.addFavoriteMessage = !currentElement.addFavoriteMessage
         }
      })
   };

   render() { 
      const filterRecipes = this.props.recipes.filter(currentElement => currentElement.favorite === true);
      const recipes = filterRecipes.map(currentElement => <MyRecipe 
         key={currentElement.lp}
         delete={false}
         recipesAmount={this.props.recipes.length}       
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />)
      const justifyContent = recipes.length < 3 ? 
         {'justifyContent': 'flex-start'} : {'justifyContent': 'space-around'}
      

      return (  
         <div className='myRecipes__wrapper' style={justifyContent}>
            {recipes.length === 0 ? <EmptyList 
               text='You have not favorite Recipes. Click on heart icon to add some'
            /> : recipes}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipes: state.recipeReducer,
      show: state.filterRecipesReducer
   }
}

const mapDispatchToProps = dispatch => {
   return {
      favoriteRecipe: (lp) => dispatch(favoriteRecipeAction(lp))
   }
}

MyRecipesFavorite = connect(mapStateToProps, mapDispatchToProps)(MyRecipesFavorite);

export default MyRecipesFavorite;