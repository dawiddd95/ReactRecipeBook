import React, {Component} from 'react'
import {connect} from 'react-redux';

// zrobic usuwanie przepisu z modalem potwierdzenia :) moze modal jest gdzies w poprzendich wersjach aplikacji

import './MyRecipes.scss';

import MyRecipe from '../../components/MyRecipe/MyRecipe';
import EmptyList from '../../components/EmptyList/EmptyList';

class MyRecipes extends Component {
   state = {  

   }

   handleDeleteRecipeClick = (lp) => {

   }

   render() { 
      const justifyContent = this.props.recipes.length < 3 ? {'justifyContent': 'flex-start'} : {'justifyContent': 'space-around'}

      const myRecipe = this.props.recipes.map(currentElement => <MyRecipe 
         key={currentElement.recipeLp}
         recipesAmount={this.props.recipes.length}
         {...currentElement}
      />)
      
      return (  
         <div className='myRecipes__wrapper' style={justifyContent}>
            {this.props.recipes.length === 0 ? <EmptyList 
               text='Your recipes collection list is empty'
            /> : myRecipe}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      recipes: state.addRecipeReducer
   }
}

MyRecipes = connect(mapStateToProps)(MyRecipes);

export default MyRecipes;



















