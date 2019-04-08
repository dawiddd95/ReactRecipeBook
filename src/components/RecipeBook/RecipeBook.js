import React from 'react'

import './RecipeBook.scss';

import AppNavbar from '../AppNavbar/AppNavbar';
import RecipeBookRouters from '../../Routers/RecipeBookRouters';

const RecipeBook = () => {
   return (  
      <div className='app'>
         <AppNavbar />
         <RecipeBookRouters />
      </div>
   );
}
 
export default RecipeBook;