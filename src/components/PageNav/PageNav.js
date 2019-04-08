import React from 'react'
import {Link} from 'react-router-dom';

import './PageNav.scss';

const PageNav = () => {
   return (  
      <nav className='page__navigation'>
         <Link to='/'>
            <span> &larr; </span> 
            <p>Comeback To Homesite</p>
         </Link>
      </nav>
   );
}
 
export default PageNav;