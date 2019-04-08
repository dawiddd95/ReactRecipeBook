import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import './RecipeBook.scss';

import AppNavbar from './AppNavbar/AppNavbar';
import RecipeBookHome from './RecipeBookHome/RecipeBookHome';
import RecipeBookRecipes from './RecipeBookRecipes/RecipeBookRecipes';
import RecipeBookShoppingList from './RecipeBookShoppingList/RecipeBookShoppingList';
import RecipeBookMealPlan from './RecipeBookMealPlan/RecipeBookMealPlan';
import RecipeBookProfile from './RecipeBookProfile/RecipeBookProfile';
import ErrorPage from '../ErrorPage/ErrorPage';

const RecipeBook = () => {
   return (  
      <div className='app'>
         <AppNavbar />
         <Switch>
            <Route path='/app' exact render={() => <Redirect to='/app/home' />} /> 
            <Route path='/app/home' component={RecipeBookHome}/>
            <Route path='/app/recipes' component={RecipeBookRecipes} />
            <Route path='/app/shopping list' component={RecipeBookShoppingList} />
            <Route path='/app/meal plan' component={RecipeBookMealPlan} />
            <Route path='/app/profile' component={RecipeBookProfile} />
            <Route component={ErrorPage} />
         </Switch>
      </div>
   );
}
 
export default RecipeBook;