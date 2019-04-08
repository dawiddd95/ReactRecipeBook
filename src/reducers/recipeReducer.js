import {ADD_RECIPE} from '../actions/actionTypes';
import {DELETE_RECIPE} from '../actions/actionTypes';
import {FAVORITE_RECIPE} from '../actions/actionTypes';

const recipeReducer = (state = [], action) => {
  switch(action.type) {
      case ADD_RECIPE:   
         return state.concat(action.recipe)
      case DELETE_RECIPE:
         return state.filter(currentElement => currentElement.lp !== action.recipe)
      case FAVORITE_RECIPE:
         return state.map(currentElement => {
            if (currentElement.lp === action.recipe) {
               return {
                  ...currentElement,
                  favorite: !currentElement.favorite
               }
            }

            return currentElement;
         });
      default:
         return state
  }
}

export default recipeReducer;