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

   // Sroda
   // ------------
   // po kliknieciu nowy przepis ma zerowac searching Recipe V
   // po kliknieciach filtrowania ma zerowac, ale zapisywac wartosc inputu V
   // naprawic by mozna bylo pisc pusty przepis przy dodawaniu V
   // Zrobic jeszcze wyszukiwanie w favorite V
   // zamienic MyRecipesAll na MyRecipes V
   // Zrobic monit że jeśli nic nie znalazlo i w favorite i w recipess all. jakas smutna buzka czy ta sama ikonka tylko ze inny tytul 'Not found recipe with this title in all recipes'

   // 1. Zrobic podejrzenie przepisów z API
   // 2. Zrobic wylogowanie
   // 3. Zrobic podejrzenie przepisu z moich przepisow

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
      console.log(searchRecipeFromAllRecipes.length);
      if(this.props.recipes.length === 0 && this.props.filterRecipe === 'all') {        
         return <EmptyList text='Your recipes collection list is empty' />
      }
      else if(filterRecipes.length === 0 && this.props.filterRecipe === 'favorite') {
         return <EmptyList text='You have not favorite Recipes. Click on heart icon to add some' />
      } 
      else if(this.props.recipes.length !== 0 && this.props.filterRecipe === 'all') {
         if(this.props.searchRecipe === undefined) {
            return allRecipes;
         } else {
            return searchRecipeFromAllRecipes;
         }
      }
      else if(filterRecipes.length !== 0 && this.props.filterRecipe === 'favorite') {
         if(this.props.searchRecipe === '') {
            return favoriteRecipes;
         } else {
            return searchRecipeFromFavoriteRecipes;
         }
      }
      // tutaj dzialamy
      else if(searchRecipeFromAllRecipes.length === 0 && this.props.filterRecipe === 'all') {
         console.log('dziala')
         return <EmptyList text='Not found recipe with this title in all recipes' />
      };
   };

   
   
   render() { 
      const allRecipes = this.props.recipes.map(currentElement => <MyRecipesItem 
         key={currentElement.lp}
         delete={true}
         recipesAmount={this.props.recipes.length}       
         handleShowDeleteModalClick={this.handleShowDeleteModalClick}
         handleToggleFavoriteClick={this.handleToggleFavoriteClick}
         {...currentElement}
      />);
      const filterRecipes= this.props.recipes.filter(currentElement => currentElement.favorite === true);
      const favoriteRecipes = filterRecipes.map(currentElement => <MyRecipesItem 
         key={currentElement.lp}
         delete={false}
         recipesAmount={this.props.recipes.length}       
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
         recipesAmount={this.props.recipes.length}       
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
         recipesAmount={this.props.recipes.length}       
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
               searchRecipeFromFavoriteRecipes
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