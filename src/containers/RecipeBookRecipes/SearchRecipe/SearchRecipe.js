import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {searchRecipeAction} from '../../../actions/actions';
import * as S from './StyledSearchRecipe.js';

class SearchRecipe extends Component {
   submit = (values) => {
      if(values.searchingRecipe !== undefined) {
         this.props.searchRecipe(values.searchingRecipe);
      }
   }

   render() {
      return (  
         <S.Form onSubmit={this.props.handleSubmit(this.submit)}>
            <Field
               className='searchWrapper__input' 
               type="text"
               name='searchingRecipe'
               placeholder='Search Recipe'
               component='input'
            />
            <S.Button className='searchWrapper__button'>
               Search
            </S.Button>
         </S.Form>            
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
