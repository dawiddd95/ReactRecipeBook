import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import MyRecipesAll from '../containers/MyRecipesAll/MyRecipesAll';
import MyRecipesFavorite from '../containers/MyRecipesFavorite/MyRecipesFavorite';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RecipeBookRouters = () => {
   return (  
      <Switch>
         <Route path='/app/recipes' exact render={() => <Redirect to='/app/recipes/all' />} />
         <Route path='/app/recipes/all' component={MyRecipesAll} />
         <Route path='/app/recipes/favorite' component={MyRecipesFavorite} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default RecipeBookRouters;