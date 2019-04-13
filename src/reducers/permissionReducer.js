import {USER_LOGGED} from '../actions/actionTypes';

const permissionReducer = (state = true, action) => {
  switch(action.type) {
      case USER_LOGGED:   
         return action.isLoggedIn
      default:
         return state
  }
}

export default permissionReducer;