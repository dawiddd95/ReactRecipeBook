import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
   deleteRecipeAction, 
   favoriteRecipeAction, 
   filterShowRecipes, 
   searchRecipeAction
} from '../../actions/actions';

import './MyRecipes.scss';
import MyRecipesItem from '../MyRecipesItem/MyRecipesItem';
import EmptyList from '../../components/EmptyList/EmptyList';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

class MyRecipes extends Component {
   state = {  
      deleteModalOpen: false,
      recipeLp: '',
      recipeName: '',
   }

   // 2. Zrobic wylogowanie (dac avatara w kolko dane Imie i nazwisko ponizej email i ikonke logaut z drzwiami) (3) łatwe i szybkie ++
   // 3. Zrobic podejrzenie przepisu z moich przepisow <MyRecipesItem /> to komponent przepisu
   
   
   // 4. Zrobic edycje moich przepisow

   componentDidMount() {
      this.props.changeFilter('all');
      this.props.searchingRecipe('');
      window.scrollTo(0,0);
   };

   handleShowDeleteModalClick = (lp) => {
      this.props.recipes.map(currentElement => {
         if(currentElement.lp === lp) {
            this.setState({
               recipeLp: currentElement.lp,
               recipeName: currentElement.recipeTitle
            })
         }
         return currentElement;
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
         return currentElement;
      })
   };
   getRecipes = (allRecipes, favoriteRecipes) => {
      if(this.props.filterRecipe === 'all') {
         return allRecipes;
      } else if(this.props.filterRecipe === 'favorite') {
         return favoriteRecipes;
      }
   };

   displayRecipes = (
      allRecipes, 
      filterRecipes, 
      favoriteRecipes, 
      searchRecipeFromAllRecipes,
      searchRecipeFromFavoriteRecipes
   ) => {
      if(this.props.recipes.length === 0 && this.props.filterRecipe === 'all') {        
         return <EmptyList text='Your recipes collection list is empty' />
      }
      else if(filterRecipes.length === 0 && this.props.filterRecipe === 'favorite') {
         return <EmptyList text='You have not favorite Recipes. Click on heart icon to add some' />
      } 
      else if(searchRecipeFromAllRecipes.length === 0 && this.props.filterRecipe === 'all') {
         return <EmptyList text='Not found this recipe in all recipes' />
      }
      else if(searchRecipeFromFavoriteRecipes.length === 0 && this.props.filterRecipe === 'favorite') {
         return <EmptyList text='Not found this recipe in favorite recipes' />
      }
      else if(this.props.recipes.length !== 0 && this.props.filterRecipe === 'all' &&  
      searchRecipeFromAllRecipes.length !== 0) {
         if(this.props.searchRecipe === undefined) {
            return allRecipes;
         } else {
            return searchRecipeFromAllRecipes;
         }
      }
      else if(filterRecipes.length !== 0 && this.props.filterRecipe === 'favorite' && searchRecipeFromFavoriteRecipes.length !== 0) {
         if(this.props.searchRecipe === '') {
            return favoriteRecipes;
         } else {
            return searchRecipeFromFavoriteRecipes;
         }
      }
   };

   
   
   render() { 
      const allRecipes = this.props.recipes.map(currentElement => <MyRecipesItem 
         key={currentElement.lp}
         delete={true}
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />);
      const filterRecipes= this.props.recipes.filter(currentElement => currentElement.favorite === true);
      const favoriteRecipes = filterRecipes.map(currentElement => <MyRecipesItem 
         key={currentElement.lp}
         delete={false}   
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />);
      const filterSearchingAll = this.props.recipes.filter(currentElement => (
         currentElement.recipeTitle.toLowerCase().includes(this.props.searchRecipe)
      ));
      const searchRecipeFromAllRecipes = filterSearchingAll.map(currentElement => <MyRecipesItem 
         key={currentElement.lp}
         delete={true}
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />);
      const filterSearchingFavorite = filterSearchingAll.filter(currentElement => (     
         currentElement.favorite === true
      ));
      const searchRecipeFromFavoriteRecipes = filterSearchingFavorite.map(currentElement => <MyRecipesItem 
         key={currentElement.lp}
         delete={false}
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />);

     


      return (  
         <div className='myRecipes__wrapper'>
            {this.state.deleteModalOpen && <DeleteModal 
               recipeLp={this.state.recipeLp}
               recipeName={this.state.recipeName}
               handleDeleteRecipeClick={this.handleDeleteRecipeClick}
               handleHideModalDelete={this.handleHideModalDelete}
            />}
            {this.displayRecipes(
               allRecipes, 
               filterRecipes, 
               favoriteRecipes, 
               searchRecipeFromAllRecipes,
               searchRecipeFromFavoriteRecipes,
            )}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipes: state.recipeReducer,
      filterRecipe: state.filterRecipesReducer,
      searchRecipe: state.searchRecipeReducer
   }
}

const mapDispatchToProps = dispatch => {
   return {
      deleteRecipe: (lp) => dispatch(deleteRecipeAction(lp)),
      favoriteRecipe: (lp) => dispatch(favoriteRecipeAction(lp)),
      changeFilter: (filter) => dispatch(filterShowRecipes(filter)),
      searchingRecipe: (value) => dispatch(searchRecipeAction(value)) 
   }
}

MyRecipes = connect(mapStateToProps, mapDispatchToProps)(MyRecipes);

export default MyRecipes;