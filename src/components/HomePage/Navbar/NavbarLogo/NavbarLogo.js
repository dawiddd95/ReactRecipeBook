import React from 'react'

import './NavbarLogo.scss';
import logo from '../../../../images/logo.svg';

const NavbarLogo = () => {
   return (  
      <div className='navbar__logo'>
         <img src={logo} alt="logo"/>
         RecipeBook App
      </div>
   );
}
 
export default NavbarLogo;