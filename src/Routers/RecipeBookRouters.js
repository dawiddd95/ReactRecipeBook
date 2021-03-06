import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import RecipeBookHome from '../containers/RecipeBookHome/RecipeBookHome';
import TrendingRecipeDetails from '../containers/RecipeBookHome/TrendingRecipeDetails/TrendingRecipeDetails';
import RecipeBookRecipes from '../components/RecipeBookRecipes/RecipeBookRecipes';
import CreateRecipe from '../containers/RecipeBookRecipes/CreateRecipe/CreateRecipe';
import RecipePreview from '../containers/RecipeBookRecipes/RecipePreview/RecipePreview';
import RecipeBookShoppingList from '../containers/RecipeBookShoppingList/RecipeBookShoppingList';
import RecipeBookMealPlan from '../containers/RecipeBookMealPlan/RecipeBookMealPlan';
import RecipeBookProfile from '../containers/RecipeBookProfile/RecipeBookProfile';
import ErrorPage from '../components/ErrorPage/ErrorPage';

   // logout button color: #904343

const RecipeBookRouters = () => {
   return (  
      <Switch>
         <Route path='/app' exact render={() => <Redirect to='/app/home' />} /> 
         <Route path='/app/home' exact component={RecipeBookHome}/>
         <Route path='/app/home/trending recipe=:id' component={TrendingRecipeDetails} />
         <Route path='/app/recipes' exact component={RecipeBookRecipes} />
         <Route path='/app/recipes/recipe=:id' exact component={RecipePreview} />
         <Route path='/app/recipes/recipe=:id/edit' exact render={(props) => <CreateRecipe {...props} edit={true}/>} />
         <Route path='/app/createRecipe' render={(props) => <CreateRecipe {...props} edit={false}/>} />
         <Route path='/app/shopping list' component={RecipeBookShoppingList} />
         <Route path='/app/meal plan' component={RecipeBookMealPlan} />
         <Route path='/app/profile' component={RecipeBookProfile} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default RecipeBookRouters;