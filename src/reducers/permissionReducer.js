// Zmienic potem state = na false state = false

import {USER_LOGGED} from '../actions/actionTypes';

const permissionReducer = (state = false, action) => {
  switch(action.type) {
      case USER_LOGGED:   
         return action.isLoggedIn
      default:
         return state
  }
}

export default permissionReducer;