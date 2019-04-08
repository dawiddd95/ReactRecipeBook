import {USER_REGISTER} from '../actions/actionTypes';

const userRegisterReducer = (state = [{email: 'admin', password: 'admin'}], action) => {
   switch(action.type) {
      case USER_REGISTER:
         return state.concat(action.data);
      default:
         return state;
   }
}

export default userRegisterReducer;