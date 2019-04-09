import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteRecipeAction, favoriteRecipeAction} from '../../actions/actions';
import './MyRecipes.scss';
import MyRecipe from '../MyRecipe/MyRecipe';
import EmptyList from '../../components/EmptyList/EmptyList';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

class MyRecipesAll extends Component {
   state = {  
      deleteModalOpen: false,
      recipeLp: '',
      recipeName: '',
   }

   handleShowDeleteModalClick = (lp) => {
      this.props.recipes.map(currentElement => {
         if(currentElement.lp === lp) {
            this.setState({
               recipeLp: currentElement.lp,
               recipeName: currentElement.recipeTitle
            })
         }
      })
      this.setState({
         deleteModalOpen: true
      })
   };
   handleDeleteRecipeClick = (lp) => {
      this.handleHideModalDelete();
      this.props.deleteRecipe(lp);
   };
   handleHideModalDelete = () => {
      this.setState({
         deleteModalOpen: false
      })
   };
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
   }

   render() { 
      const justifyContent = this.props.recipes.length < 3 ? 
         {'justifyContent': 'flex-start'} : {'justifyContent': 'space-around'}
      const recipes = this.props.recipes.map(currentElement => <MyRecipe 
         key={currentElement.lp}
         delete={true}
         recipesAmount={this.props.recipes.length}       
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />)
      
      return (  
         <div className='myRecipes__wrapper' style={justifyContent}>
            {this.state.deleteModalOpen && <DeleteModal 
               recipeLp={this.state.recipeLp}
               recipeName={this.state.recipeName}
               handleDeleteRecipeClick={this.handleDeleteRecipeClick}
               handleHideModalDelete={this.handleHideModalDelete}
            />}
            {this.props.recipes.length === 0 ? <EmptyList 
               text='Your recipes collection list is empty'
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
      deleteRecipe: (lp) => dispatch(deleteRecipeAction(lp)),
      favoriteRecipe: (lp) => dispatch(favoriteRecipeAction(lp))
   }
}

MyRecipesAll = connect(mapStateToProps, mapDispatchToProps)(MyRecipesAll);

export default MyRecipesAll;