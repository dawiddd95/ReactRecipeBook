import {FILTER_SHOW_RECIPES} from '../actions/actionTypes';

const userRegisterReducer = (state = 'all', action) => {
   switch(action.type) {
      case FILTER_SHOW_RECIPES:
         return action.data;
      default:
         return state;
   }
}

export default userRegisterReducer;