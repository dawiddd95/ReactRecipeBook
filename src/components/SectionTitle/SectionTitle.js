import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './StyledSectionTitle.js';
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
            <S.Wrapper>
               <S.Paragraph>{this.props.title}</S.Paragraph>
               <S.RenderType>{this.renderType()}</S.RenderType>
               <S.FilterButtons>
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
               </S.FilterButtons>
            </S.Wrapper>
         )
      } else {
         return (  
            <S.Wrapper>
               <S.Paragraph>{this.props.title}</S.Paragraph>
            </S.Wrapper>
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

SectionTitle.propTypes = {
   haveSelect: PropTypes.bool,
   title: PropTypes.string.isRequired
}