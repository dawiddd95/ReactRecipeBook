import React, {Component} from 'react';
import {connect} from 'react-redux';

import './SectionTitle.scss';
import {filterShowRecipes, searchRecipeAction} from '../../actions/actions';

import FilterButton from '../FilterButton/FilterButton';

class SectionTitle extends Component {
   componentDidMount() {
      this.renderType();
   }
   
   handleChangeRecipesType = (type) => {
      this.props.changeFilter(type);
      this.props.searchingRecipe('')
   };
   renderType = () => {
      if(this.props.filterRecipe === 'all') {
         return 'ALL';
      } else if(this.props.filterRecipe === 'favorite') {
         return 'FAVORITE';
      }
   };
   
   render() {
      if(this.props.haveSelect) {
         return (
            <div className='section__title'>
               <p>{this.props.title}</p>
               <div className='type'>
                  {this.renderType()}
               </div>
               <div className='filterButtons'>
                  FILTER BY: 
                  <FilterButton 
                     text='All'
                     type='all' 
                     handleChangeRecipesType={this.handleChangeRecipesType}
                  />
                  <FilterButton 
                     text='Favorite'
                     type='favorite'
                     handleChangeRecipesType={this.handleChangeRecipesType}
                  />
               </div>
            </div>
         )
      } else {
         return (  
            <div className='section__title'>
               <p>{this.props.title}</p>
            </div>
         );
      }
   }
}

const mapStateToProps = state => {
   return {
      filterRecipe: state.filterRecipesReducer
   }
}

const mapDispatchToProps = dispatch => {
   return {
      changeFilter: (filter) => dispatch(filterShowRecipes(filter)),
      searchingRecipe: (value) => dispatch(searchRecipeAction(value)) 
  }
}

SectionTitle = connect(mapStateToProps, mapDispatchToProps)(SectionTitle);
 
export default SectionTitle;