import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {searchRecipeAction} from '../../actions/actions';
import './SearchRecipe.scss';

class SearchRecipe extends Component {
   submit = (values) => {
      if(values.searchingRecipe !== undefined) {
         this.props.searchRecipe(values.searchingRecipe);
      }
   }

   render() {
      return (  
         <form className='searchForm' onSubmit={this.props.handleSubmit(this.submit)}>
            <Field
               className='searchWrapper__input' 
               type="text"
               name='searchingRecipe'
               placeholder='Search Recipe'
               component='input'
            />
            <button className='searchWrapper__button'>
               Search
            </button>
         </form>            
      );
   }
}

const mapStateToProps = state => {
   return {
      recipe: state.searchRecipeReducer
   }
}

const mapDispatchToProps = dispatch => {
   return {
      searchRecipe: (values) => dispatch(searchRecipeAction(values))
   }
}
 
SearchRecipe = connect(mapStateToProps, mapDispatchToProps)(SearchRecipe)

export default reduxForm({
   form: 'searchForm'
})(SearchRecipe); 
