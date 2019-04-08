import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import permissionReducer from './permissionReducer';
import userRegisterReducer from './userRegisterReducer';
import recipeTypeReducer from './recipeTypeReducer';
import addRecipeReducer from './addRecipeReducer';

const rootReducer = combineReducers({
   form: formReducer,
   permissionReducer,
   userRegisterReducer,
   recipeTypeReducer,
   addRecipeReducer
})

export default rootReducer;