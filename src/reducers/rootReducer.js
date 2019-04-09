import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import permissionReducer from './permissionReducer';
import userRegisterReducer from './userRegisterReducer';
import recipeReducer from './recipeReducer';
import filterRecipesReducer from './filterRecipesReducer';
import searchRecipeReducer from './searchRecipeReducer';

const rootReducer = combineReducers({
   form: formReducer,
   permissionReducer,
   userRegisterReducer,
   recipeReducer,
   filterRecipesReducer,
   searchRecipeReducer
})

export default rootReducer;