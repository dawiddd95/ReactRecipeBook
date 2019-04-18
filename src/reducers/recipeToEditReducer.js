import {RECIPE_TO_EDIT} from '../actions/actionTypes';

const recipeToEditReducer = (state = [], action) => {
   switch(action.type) {
      case RECIPE_TO_EDIT:
         return action.recipe;
      default: 
         return state; 
   }
}

export default recipeToEditReducer;