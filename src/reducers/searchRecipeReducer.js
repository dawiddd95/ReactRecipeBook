import { SEARCH_RECIPE } from "../actions/actionTypes";

const searchRecipeReducer = (state = '', action) => {
   switch(action.type) {
      case SEARCH_RECIPE:
         return action.searchingRecipe.toLowerCase();
      default:
         return state;
   }
}

export default searchRecipeReducer;