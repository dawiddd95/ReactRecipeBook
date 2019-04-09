import React, {Component} from 'react';
import {connect} from 'react-redux';

import './SectionTitle.scss';
import {recipeTypeAction} from '../../actions/actions';

import FilterButton from '../FilterButton/FilterButton';

class SectionTitle extends Component {
   handleChangeRecipesType = (type) => {
      this.props.changeType(type);
   }

   componentDidMount() {
      this.props.changeType('all');
   }

   renderType = () => {
      if(this.props.recipeType === 'all') {
         return 'ALL';
      } else if(this.props.recipeType === 'favorite') {
         return 'FAVORITE';
      }
   }
   
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
                     link='all' 
                     handleChangeRecipesType={this.handleChangeRecipesType}
                  />
                  <FilterButton 
                     text='Favorite'
                     link='favorite'
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
      recipeType: state.recipeTypeReducer
   }
}

const mapDispatchToProps = dispatch => {
   return {
      changeType: (type) => dispatch(recipeTypeAction(type)) 
  }
}

SectionTitle = connect(mapStateToProps, mapDispatchToProps)(SectionTitle);
 
export default SectionTitle;