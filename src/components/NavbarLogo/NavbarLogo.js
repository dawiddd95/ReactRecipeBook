import React from 'react'

import * as S from './StyledNavbarLogo';
import logo from '../../images/logo.svg';

const NavbarLogo = () => {
   return (  
      <S.Wrapper>
         <S.Img src={logo} alt="logo"/>
         RecipeBook App
      </S.Wrapper>
   );
}
 
export default NavbarLogo;