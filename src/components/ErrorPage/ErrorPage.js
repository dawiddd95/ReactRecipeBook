import React from 'react';
import {NavLink} from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = () => {
   return (  
      <div className='app__error'>
         <div className="error__content">
            <h1>404</h1>
            <h2>Error :(</h2>
            <p>There isn't a RecipeBook site here.</p>
            <p>If you want continue to use RecipeBook site go to </p>
            <NavLink to='/'>
               Home site
            </NavLink>
         </div>   
      </div>
   );
}
 
export default ErrorPage;