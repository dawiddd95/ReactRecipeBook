import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import permissionReducer from './permissionReducer';
import userRegisterReducer from './userRegisterReducer';
import recipeReducer from './recipeReducer';
import filterRecipesReducer from './filterRecipesReducer';
import recipeTypeReducer from './recipeTypeReducer';

const rootReducer = combineReducers({
   form: formReducer,
   permissionReducer,
   userRegisterReducer,
   recipeReducer,
   filterRecipesReducer,
   recipeTypeReducer
})

export default rootReducer;