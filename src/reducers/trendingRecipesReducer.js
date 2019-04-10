import {TRENDING_RECIPES} from '../actions/actionTypes';

const trendingRecipesReducer = (state = [], action) => {
   switch(action.type) {
      case TRENDING_RECIPES:
         return state.concat(action.recipe);
      default: 
         return state;
   }
}

export default trendingRecipesReducer;