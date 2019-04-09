import {FILTER_SHOW_RECIPES} from '../actions/actionTypes';

const filterRecipesReducer = (state = 'all', action) => {
   console.log(action.filter)
  switch(action.type) {
      case FILTER_SHOW_RECIPES:   
         return action.filter;
      default:
         return state;
  }
}

export default filterRecipesReducer;