import React from 'react';

import * as S from './StyledAppNavbar';

import NavbarLogo from '../../NavbarLogo/NavbarLogo';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';

const AppNavbar = () => {
   return (  
      <S.Wrapper>
         <NavbarLogo />
         <NavbarNavigation />
      </S.Wrapper>
   );
}
 
export default AppNavbar;