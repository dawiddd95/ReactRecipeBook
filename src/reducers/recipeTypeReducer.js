import {RECIPES_TYPE} from '../actions/actionTypes';

const userRegisterReducer = (state = '', action) => {
   switch(action.type) {
      case RECIPES_TYPE:
         return action.recipeType
      default:
         return state;
   }
}

export default userRegisterReducer;