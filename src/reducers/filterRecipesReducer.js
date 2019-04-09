import {FILTER_SHOW_RECIPES} from '../actions/actionTypes';

const filterRecipesReducer = (state = 'all', action) => {
  switch(action.type) {
      case FILTER_SHOW_RECIPES:   
         return action.filter;
      default:
         return state;
  }
}

export default filterRecipesReducer;