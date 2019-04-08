import React from 'react'
import {Link} from 'react-router-dom';

import './NavItem.scss';

const NavItem = ({text, icon}) => {
   return (
      <Link to={`/app/${text.toLowerCase()}`}>
         <div className='navigation__item'>
            <img src={icon} alt=""/>
            {text}
         </div>
      </Link>  
   );
}
 
export default NavItem;