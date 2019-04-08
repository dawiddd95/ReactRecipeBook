import {ADD_RECIPE} from '../actions/actionTypes';

const addRecipeReducer = (state = [], action) => {
  switch(action.type) {
      case ADD_RECIPE:   
         return state.concat(action.recipe)
      default:
         return state
  }
}

export default addRecipeReducer;