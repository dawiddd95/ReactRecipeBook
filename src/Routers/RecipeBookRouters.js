import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import RecipeBookHome from '../containers/RecipeBookHome/RecipeBookHome';
import RecipeBookRecipes from '../components/RecipeBookRecipes/RecipeBookRecipes';
import CreateRecipe from '../components/CreateRecipe/CreateRecipe';
import RecipeBookShoppingList from '../containers/RecipeBookShoppingList/RecipeBookShoppingList';
import RecipeBookMealPlan from '../containers/RecipeBookMealPlan/RecipeBookMealPlan';
import RecipeBookProfile from '../containers/RecipeBookProfile/RecipeBookProfile';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RecipeBookRouters = () => {
   return (  
      <Switch>
         <Route path='/app' exact render={() => <Redirect to='/app/home' />} /> 
         <Route path='/app/home' component={RecipeBookHome}/>
         <Route path='/app/recipes' component={RecipeBookRecipes} />
         <Route path='/app/createRecipe' component={CreateRecipe} />
         <Route path='/app/shopping list' component={RecipeBookShoppingList} />
         <Route path='/app/meal plan' component={RecipeBookMealPlan} />
         <Route path='/app/profile' component={RecipeBookProfile} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default RecipeBookRouters;