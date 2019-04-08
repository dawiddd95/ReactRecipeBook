import React from 'react';
import {NavLink} from 'react-router-dom';

import './ErrorPage.scss';

import H1 from '../H1/H1';
import H2 from '../H2/H2';

const ErrorPage = () => {
   return (  
      <div className='app__error'>
         <div className="error__content">
            <H1 text='404'/>
            <H2 text='Error :(' />
            <p>There isn't a RecipeBook site here.</p>
            <p>If you want continue to use RecipeBook site go to</p>
            <NavLink to='/'>
               Home site
            </NavLink>
         </div>   
      </div>
   );
}
 
export default ErrorPage;