import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import permissionReducer from './permissionReducer';
import userRegisterReducer from './userRegisterReducer';
import recipeTypeReducer from './recipeTypeReducer';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
   form: formReducer,
   permissionReducer,
   userRegisterReducer,
   recipeTypeReducer,
   recipeReducer,
})

export default rootReducer;