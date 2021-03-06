import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import permissionReducer from './permissionReducer';
import userRegisterReducer from './userRegisterReducer';
import trendingRecipesReducer from './trendingRecipesReducer';
import recipeReducer from './recipeReducer';
import filterRecipesReducer from './filterRecipesReducer';
import searchRecipeReducer from './searchRecipeReducer';
import recipeToEditReducer from './recipeToEditReducer';

const rootReducer = combineReducers({
   form: formReducer,
   permissionReducer,
   userRegisterReducer,
   trendingRecipesReducer,
   recipeReducer,
   filterRecipesReducer,
   searchRecipeReducer,
   recipeToEditReducer
})

export default rootReducer;