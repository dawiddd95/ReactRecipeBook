import React from 'react';

import './AppNavbar.scss';

import NavbarLogo from '../NavbarLogo/NavbarLogo';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';

const AppNavbar = () => {
   return (  
      <div className='app__navbar'>
         <NavbarLogo />
         <NavbarNavigation />
      </div>
   );
}
 
export default AppNavbar;